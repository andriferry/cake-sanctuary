<script setup lang="ts">
import type { SelectValueProps } from 'radix-vue'
import { SelectValue } from 'radix-vue'

const props = defineProps<SelectValueProps>()
</script>

<template>
  <SelectValue v-bind="props" class="font-medium text-secondary transition-all duration-300 ease-in-out">
    <slot></slot>
  </SelectValue>
</template>
