<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()
</script>

<template>
  <h5 :class="cn('font-medium leading-none tracking-tight', props.class)">
    <slot></slot>
  </h5>
</template>
