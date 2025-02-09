<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()
</script>

<template>
  <div
    data-sidebar="group"
    :class="cn('relative flex w-full min-w-0 flex-col p-2', props.class)"
  >
    <slot></slot>
  </div>
</template>
