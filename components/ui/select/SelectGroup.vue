<script setup lang="ts">
import type { SelectGroupProps } from 'radix-vue'

import { cn } from '@/lib/utils'
import { SelectGroup } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<SelectGroupProps & { class?: VueHtmlAttributes['class'] }>()

const delegatedProps = computed(() => {
  const {
    class: _,
    ...delegated
  } = props

  return delegated
})
</script>

<template>
  <SelectGroup
    :class="cn('p-1 w-full', props.class)"
    v-bind="delegatedProps"
  >
    <slot></slot>
  </SelectGroup>
</template>
