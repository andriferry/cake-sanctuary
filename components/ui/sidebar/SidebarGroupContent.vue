<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()
</script>

<template>
  <div
    data-sidebar="group-content"
    :class="cn('w-full text-sm', props.class)"
  >
    <slot></slot>
  </div>
</template>
