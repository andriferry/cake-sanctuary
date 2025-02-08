<script lang="ts" setup>
import type { htmlAttributes } from '@/types/index'
import { cn } from '@/lib/utils'

interface Props {
  class?: htmlAttributes['class']
}
const props = defineProps<Props>()
</script>

<template>
  <p :class="cn('text-sm text-muted-foreground', props.class)">
    <slot></slot>
  </p>
</template>
