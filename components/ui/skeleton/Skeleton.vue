<script setup lang="ts">
import { cn } from '@/lib/utils'

interface SkeletonProps {
  class?: VueHtmlAttributes['class']
}

const props = defineProps<SkeletonProps>()
</script>

<template>
  <div :class="cn('animate-pulse rounded-md bg-primary/10', props.class)"></div>
</template>
