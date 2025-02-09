<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex flex-col gap-y-1.5 p-6', props.class)">
    <slot></slot>
  </div>
</template>
