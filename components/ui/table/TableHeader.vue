<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()
</script>

<template>
  <thead :class="cn('[&_tr]:border-b', props.class)">
    <slot></slot>
  </thead>
</template>
