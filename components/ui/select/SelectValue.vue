<script setup lang="ts">
import { SelectValue, type SelectValueProps } from 'radix-vue'

const props = defineProps<SelectValueProps>()
</script>

<template>
  <SelectValue v-bind="props" class="font-medium text-secondary transition-all duration-300 ease-in-out">
    <slot />
  </SelectValue>
</template>
