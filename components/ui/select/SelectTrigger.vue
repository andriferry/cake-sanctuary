<script setup lang="ts">
import type { SelectTriggerProps } from 'radix-vue'

import { cn } from '@/lib/utils'
import {
  SelectIcon,
  SelectTrigger,

  useForwardProps,
} from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<
    SelectTriggerProps & { class?: VueHtmlAttributes['class'] }
>()

const { icons } = useAppConfig()

const delegatedProps = computed(() => {
  const {
    class: _,
    ...delegated
  } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

const defaultClass = computed(() => {
  return 'flex h-9 w-full items-center justify-between whitespace-nowrap group rounded-md border data-[state=open]:border-primary data-[state=open]:ring-primary data-[state=open]:ring-1 border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-secondary focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start'
})
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="cn(defaultClass, props.class)"
  >
    <slot></slot>
    <SelectIcon as-child>
      <Icon
        :name="icons.chevronDown"
        class="w-5 h-5 text-secondary opacity-50 transition-all duration-300 ease-in-out group-data-[state=open]:rotate-180 shrink-0"
      />
    </SelectIcon>
  </SelectTrigger>
</template>
