<script setup lang="ts">
import type { Align } from './index'

import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
  align?: Align
}>()
</script>

<template>
  <th
    scope="col"
    :class="
      cn(
        'h-12 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5',
        props.class,
      )
    "
  >
    <div
      :class="align"
      class="w-full flex items-center"
    >
      <slot></slot>
    </div>
  </th>
</template>
