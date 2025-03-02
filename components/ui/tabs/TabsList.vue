<script setup lang="ts">
import type { TabsListProps } from 'radix-vue'

import { cn } from '@/lib/utils'
import { TabsList } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<TabsListProps & { class?: VueHtmlAttributes['class'] }>()

const delegatedProps = computed(() => {
  const {
    class: _,
    ...delegated
  } = props

  return delegated
})
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="cn(
      'inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
      props.class,
    )"
  >
    <slot></slot>
  </TabsList>
</template>
