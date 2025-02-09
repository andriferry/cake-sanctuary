<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()
</script>

<template>
  <li
    data-sidebar="menu-item"
    :class="cn('group/menu-item relative font-medium text-secondary', props.class)"
  >
    <slot></slot>
  </li>
</template>
