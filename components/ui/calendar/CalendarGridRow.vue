<script lang="ts" setup>
import type { CalendarGridRowProps } from 'radix-vue'

import { cn } from '@/lib/utils'
import {
  CalendarGridRow,
  useForwardProps,
} from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<CalendarGridRowProps & { class?: VueHtmlAttributes['class'] }>()

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
  <CalendarGridRow
    :class="cn('flex', props.class)"
    v-bind="forwardedProps"
  >
    <slot></slot>
  </CalendarGridRow>
</template>
