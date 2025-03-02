<script setup lang="ts">
import type { DialogDescriptionProps } from 'radix-vue'

import { cn } from '@/lib/utils'
import {
  DialogDescription,
  useForwardProps,
} from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<DialogDescriptionProps & { class?: VueHtmlAttributes['class'] }>()

const delegatedProps = computed(() => {
  const {
    class: _,
    ...delegated
  } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DialogDescription
    v-bind="forwardedProps"
    :class="cn('text-sm text-muted-foreground', props.class)"
  >
    <slot></slot>
  </DialogDescription>
</template>
