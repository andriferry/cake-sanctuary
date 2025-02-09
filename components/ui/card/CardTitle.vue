<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()
</script>

<template>
  <h3
    :class="
      cn('font-semibold leading-none tracking-tight', props.class)
    "
  >
    <slot></slot>
  </h3>
</template>
