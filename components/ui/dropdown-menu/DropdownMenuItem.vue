<script setup lang="ts">
import type { DropdownMenuItemProps } from 'radix-vue'

import { cn } from '@/lib/utils'
import { DropdownMenuItem, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<DropdownMenuItemProps & { class?: VueHtmlAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    :class="cn(
      'relative flex cursor-pointer text-secondary select-none items-center rounded-sm gap-2 px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50  [&>svg]:size-4 [&>svg]:shrink-0',
      inset && 'pl-8',
      props.class,
    )"
  >
    <slot></slot>
  </DropdownMenuItem>
</template>
