<script setup lang="ts">
import type { SelectLabelProps } from 'radix-vue'

import { cn } from '@/lib/utils'
import { SelectLabel } from 'radix-vue'

const props = defineProps<SelectLabelProps & { class?: VueHtmlAttributes['class'] }>()
</script>

<template>
  <SelectLabel :class="cn('px-2 py-1.5 text-sm font-semibold text-secondary', props.class)">
    <slot></slot>
  </SelectLabel>
</template>
