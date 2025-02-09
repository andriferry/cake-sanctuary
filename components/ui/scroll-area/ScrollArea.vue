<script setup lang="ts">
import type { ScrollAreaRootProps } from 'radix-vue'

import { cn } from '@/lib/utils'
import {
  ScrollAreaCorner,
  ScrollAreaRoot,

  ScrollAreaViewport,
} from 'radix-vue'
import ScrollBar from './ScrollBar.vue'

const props = defineProps<
    ScrollAreaRootProps & { class?: VueHtmlAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ScrollAreaRoot
    v-bind="delegatedProps"
    :class="cn('relative overflow-hidden', props.class)"
  >
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
      <slot></slot>
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
