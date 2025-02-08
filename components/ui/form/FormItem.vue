<script lang="ts" setup>
import type { htmlAttributes } from '@/types/index'
import { cn } from '@/lib/utils'

interface Props {
  class?: htmlAttributes['class']
}
const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('space-y-2', props.class)">
    <slot></slot>
  </div>
</template>
