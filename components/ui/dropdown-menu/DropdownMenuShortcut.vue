<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()
</script>

<template>
  <span :class="cn('ml-auto text-xs tracking-widest opacity-60', props.class)">
    <slot></slot>
  </span>
</template>
