<script lang="ts" setup>
import type { CalendarCellProps } from 'radix-vue'

import { cn } from '@/lib/utils'
import {
  CalendarCell,
  useForwardProps,
} from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<CalendarCellProps & { class?: VueHtmlAttributes['class'] }>()

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
  <CalendarCell
    :class="
      cn(
        'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent [&:has([data-selected][data-outside-view])]:bg-accent/50',
        props.class,
      )
    "
    v-bind="forwardedProps"
  >
    <slot></slot>
  </CalendarCell>
</template>
