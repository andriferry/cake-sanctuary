<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  class?: VueHtmlAttributes['class']
}
const props = defineProps<Props>()

const divClass = computed(() => {
  return cn('pl-0 cursor-pointer', props.class)
})
</script>

<template>
  <CarouselItem :class="divClass">
    <slot></slot>
  </CarouselItem>
</template>
