<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const {
  orientation,
  canScrollNext,
  scrollNext,
} = useCarousel()

const btnClass = computed(() => {
  return orientation === 'horizontal'
    ? '-right-12 top-1/2 -translate-y-1/2'
    : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90'
})
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="
      cn(
        'touch-manipulation absolute h-8 w-8 rounded-full p-0',
        btnClass,
        props.class,
      )
    "
    variant="outline"
    @click="scrollNext"
  >
    <slot>
      <ChevronRightIcon />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
