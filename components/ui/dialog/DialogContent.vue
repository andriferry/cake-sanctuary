<script setup lang="ts">
import type {
  DialogContentEmits,
  DialogContentProps,
} from 'radix-vue'

import { cn } from '@/lib/utils'
import {
  DialogClose,
  DialogContent,

  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'

const props = defineProps<Props>()

const emits = defineEmits<DialogContentEmits>()

const { icons } = useAppConfig()

interface Props extends DialogContentProps {
  class?: VueHtmlAttributes['class']
}

const delegatedProps = computed(() => {
  const {
    class: _,
    ...delegated
  } = props

  return delegated
})

const dialogOverlayClass = computed(() => {
  return 'fixed inset-0 z-50 bg-black/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
})

const dialogContentClass = computed(() => {
  return 'fixed left-1/2 text-secondary top-1/2 z-50 grid w-full max-w-[22rem] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl -translate-x-1/2 -translate-y-1/2 gap-4 bg-background p-6 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg'
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay :class="dialogOverlayClass" />
    <DialogContent
      v-bind="forwarded"
      :class="cn(dialogContentClass, props.class)"
    >
      <slot></slot>

      <DialogClose class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-secondary">
        <Icon
          :name="icons.close"
          class="size-4"
        />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
