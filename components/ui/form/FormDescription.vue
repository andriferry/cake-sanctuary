<script lang="ts" setup>
import { cn } from '@/lib/utils'

interface Props {
  class?: VueHtmlAttributes['class']
}
const props = defineProps<Props>()
</script>

<template>
  <p :class="cn('text-sm text-muted-foreground', props.class)">
    <slot></slot>
  </p>
</template>
