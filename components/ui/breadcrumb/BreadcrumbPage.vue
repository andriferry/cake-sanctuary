<script lang="ts" setup>
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()
</script>

<template>
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    :class="cn('font-normal text-foreground', props.class)"
  >
    <slot></slot>
  </span>
</template>
