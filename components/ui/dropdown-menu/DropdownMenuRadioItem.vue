<script setup lang="ts">
import type { DropdownMenuRadioItemEmits, DropdownMenuRadioItemProps } from 'radix-vue'

import { cn } from '@/lib/utils'
import {
  DropdownMenuItemIndicator,
  DropdownMenuRadioItem,

  useForwardPropsEmits,
} from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<Props>()

const emits = defineEmits<DropdownMenuRadioItemEmits>()

const { icons } = useAppConfig()

interface Props extends DropdownMenuRadioItemProps {
  class?: VueHtmlAttributes['class']
  dotIcon?: string
}

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const icon = computed(() => props.dotIcon || icons.dropdownRadioItem)

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 text-sm outline-none transition-colors focus:bg-accent  data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class,
      )
    "
  >
    <span
      class="absolute start-0 z-10 inset-y-0 flex items-center justify-center px-2"
    >
      <DropdownMenuItemIndicator class="flex">
        <Icon
          :name="icon"
          class="font-medium text-lg text-inherit"
        />
      </DropdownMenuItemIndicator>
    </span>
    <slot></slot>
  </DropdownMenuRadioItem>
</template>
