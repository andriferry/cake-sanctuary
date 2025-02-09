<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()
</script>

<template>
  <div :class="cn('text-sm [&_p]:leading-relaxed', props.class)">
    <slot></slot>
  </div>
</template>
