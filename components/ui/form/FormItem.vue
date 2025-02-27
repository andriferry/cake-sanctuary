<script lang="ts" setup>
import { cn } from '@/lib/utils';

interface Props {
  class?: VueHtmlAttributes['class']
}
const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('space-y-2', props.class)">
    <slot></slot>
  </div>
</template>
