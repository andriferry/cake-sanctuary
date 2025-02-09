<script lang="ts" setup>
import type { CalendarHeadCellProps } from 'radix-vue'

import { cn } from '@/lib/utils'
import { CalendarHeadCell, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<CalendarHeadCellProps & { class?: VueHtmlAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeadCell :class="cn('w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground', props.class)" v-bind="forwardedProps">
    <slot></slot>
  </CalendarHeadCell>
</template>
