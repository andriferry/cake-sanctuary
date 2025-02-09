<script lang="ts" setup>
import type { RangeCalendarPrevProps } from 'radix-vue'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  RangeCalendarPrev,

  useForwardProps,
} from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<
    RangeCalendarPrevProps & { class?: VueHtmlAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarPrev
    :class="
      cn(
        buttonVariants({ variant: 'outline' }),
        'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        props.class,
      )
    "
    v-bind="forwardedProps"
  >
    <slot>
      <ArrowLeftIcon />
    </slot>
  </RangeCalendarPrev>
</template>
