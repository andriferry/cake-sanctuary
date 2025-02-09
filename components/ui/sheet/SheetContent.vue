<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'radix-vue'

import type { SheetVariants } from '.'
import { cn } from '@/lib/utils'
import {
  DialogClose,
  DialogContent,

  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { sheetVariants } from '.'

interface SheetContentProps extends DialogContentProps {
  class?: VueHtmlAttributes['class']
  side?: SheetVariants['side']
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const { icons } = useAppConfig()

const delegatedProps = computed(() => {
  const { class: _, side, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <DialogContent
      :class="cn(sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot></slot>

      <DialogClose
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
      >
        <Icon :name="icons.close" class="size-4" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
