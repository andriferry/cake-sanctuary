<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()
</script>

<template>
  <td
    :class="
      cn(
        'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5',
        props.class,
      )
    "
  >
    <slot></slot>
  </td>
</template>
