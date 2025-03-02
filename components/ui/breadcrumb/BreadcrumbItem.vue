<script lang="ts" setup>
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()
</script>

<template>
  <li :class="cn('inline-flex items-center gap-1.5', props.class)">
    <slot></slot>
  </li>
</template>
