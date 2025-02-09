<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()
</script>

<template>
  <div :class="cn('p-6 pt-0', props.class)">
    <slot></slot>
  </div>
</template>
