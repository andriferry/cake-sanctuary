<script setup lang="ts">
import type { AlertVariants } from '.'
import { cn } from '@/lib/utils'
import { alertVariants } from '.'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
  variant?: AlertVariants['variant']
}>()
</script>

<template>
  <div
    :class="cn(alertVariants({ variant }), props.class)"
    role="alert"
  >
    <slot></slot>
  </div>
</template>
