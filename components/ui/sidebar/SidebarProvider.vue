<script setup lang="ts">
import type { Ref } from 'vue'
import { cn } from '@/lib/utils'
import {
  useEventListener,
  useMediaQuery,
  useVModel,
} from '@vueuse/core'
import { TooltipProvider } from 'radix-vue'
import { provideSidebarContext } from './utils'

interface Props {
  defaultOpen?: boolean
  open?: boolean
  class?: VueHtmlAttributes['class']
}

interface Emit {
  'update:open': [open: boolean]
}

const props = withDefaults(defineProps<Props>(), {
  defaultOpen: true,
  open: undefined,
})

const emits = defineEmits<Emit>()

const isMobile = useMediaQuery('(max-width: 768px)')
const openMobile = ref(false)
const { sidebar } = useAppConfig()

const open = useVModel(props, 'open', emits, {
  defaultValue: props.defaultOpen ?? false,
  passive: (props.open === undefined) as false,
}) as Ref<boolean>

function setOpen(value: boolean) {
  open.value = value // emits('update:open', value)

  // This sets the cookie to keep the sidebar state.
  document.cookie = `${sidebar.SIDEBAR_COOKIE_NAME}=${open.value}; path=/; max-age=${sidebar.SIDEBAR_COOKIE_MAX_AGE}`
}

function setOpenMobile(value: boolean) {
  openMobile.value = value
}

// Helper to toggle the sidebar.
function toggleSidebar() {
  return isMobile.value
    ? setOpenMobile(!openMobile.value)
    : setOpen(!open.value)
}

useEventListener('keydown', (event: KeyboardEvent) => {
  if (
    event.key === sidebar.SIDEBAR_KEYBOARD_SHORTCUT
    && (event.metaKey || event.ctrlKey)
  ) {
    event.preventDefault()
    toggleSidebar()
  }
})

// We add a state so that we can do data-state="expanded" or "collapsed".
// This makes it easier to style the sidebar with Tailwind classes.
const state = computed(() => (open.value ? 'expanded' : 'collapsed'))

provideSidebarContext({
  state,
  open,
  setOpen,
  isMobile,
  openMobile,
  setOpenMobile,
  toggleSidebar,
})
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <div
      :class="
        cn(
          'group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar',
          props.class,
        )
      "
    >
      <slot></slot>
    </div>
  </TooltipProvider>
</template>
