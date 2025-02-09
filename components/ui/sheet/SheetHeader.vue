<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{ class?: VueHtmlAttributes['class'] }>()
</script>

<template>
  <div
    :class="
      cn('flex flex-col gap-y-2 text-center sm:text-left', props.class)
    "
  >
    <slot></slot>
  </div>
</template>
