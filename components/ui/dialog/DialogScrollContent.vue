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
import { computed } from 'vue'

const props = defineProps<
    DialogContentProps & { class?: VueHtmlAttributes['class'] }
>()
const emits = defineEmits<DialogContentEmits>()

const { icons } = useAppConfig()

const delegatedProps = computed(() => {
  const {
    class: _,
    ...delegated
  } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

function pointerDownEvent(event: any) {
  const originalEvent = event.detail.originalEvent
  const target = originalEvent.target as HTMLElement
  if (
    originalEvent.offsetX > target.clientWidth
    || originalEvent.offsetY > target.clientHeight
  ) {
    event.preventDefault()
  }
}
</script>

<template>
  <DialogPortal>
    <DialogOverlay class="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      <DialogContent
        :class="
          cn(
            'relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full',
            props.class,
          )
        "
        v-bind="forwarded"
        @pointer-down-outside="pointerDownEvent"
      >
        <slot></slot>

        <DialogClose class="absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary">
          <Icon
            :name="icons.close"
            class="size-4"
          />
          <span class="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </DialogOverlay>
  </DialogPortal>
</template>
