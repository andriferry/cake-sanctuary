<script lang="ts" setup>
import type { StepperItemProps } from 'radix-vue'

import { cn } from '@/lib/utils'

import { StepperItem, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<StepperItemProps & { class?: VueHtmlAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperItem
    v-slot="slotProps"
    v-bind="forwarded"
    :class="cn('flex items-center gap-2 group data-[disabled]:pointer-events-none', props.class)"
  >
    <slot v-bind="slotProps"></slot>
  </StepperItem>
</template>
