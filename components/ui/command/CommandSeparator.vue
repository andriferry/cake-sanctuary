<script setup lang="ts">
import type { ComboboxSeparatorProps } from 'radix-vue'

import { cn } from '@/lib/utils'
import { ComboboxSeparator } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<ComboboxSeparatorProps & { class?: VueHtmlAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ComboboxSeparator
    v-bind="delegatedProps"
    :class="cn('-mx-1 h-px bg-border', props.class)"
  >
    <slot></slot>
  </ComboboxSeparator>
</template>
