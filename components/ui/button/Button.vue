<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { ButtonVariants } from '.'
import { cn } from '@/lib/utils'
import { Primitive } from 'radix-vue'
import { buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  prependIcon?: string
  appendIcon?: string
  disabled?: boolean
  rounded?: ButtonVariants['rounded']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  disabled: false,
  rounded: 'default',
})

defineSlots<{
  default: () => any
}>()
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="
      cn(buttonVariants({ variant, size, rounded }), props.class, {
        'cursor-text opacity-50 bg-accent hover:!bg-accent': disabled,
      })
    "
  >
    <Icon
      v-if="props.prependIcon"
      :name="props.prependIcon"
      class="text-xl"
    />
    <slot></slot>
    <Icon
      v-if="props.appendIcon"
      :name="props.appendIcon"
      class="text-xl"
    />
  </Primitive>
</template>
