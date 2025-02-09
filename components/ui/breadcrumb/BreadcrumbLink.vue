<script lang="ts" setup>
import type { PrimitiveProps } from 'radix-vue'

import { cn } from '@/lib/utils'
import { Primitive } from 'radix-vue'

const props = withDefaults(defineProps<PrimitiveProps & { class?: VueHtmlAttributes['class'] }>(), {
  as: 'a',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn('transition-colors hover:text-foreground', props.class)"
  >
    <slot></slot>
  </Primitive>
</template>
