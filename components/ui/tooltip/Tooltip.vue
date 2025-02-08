<script setup lang="ts">
import type { TooltipRootEmits, TooltipRootProps } from 'radix-vue'
import {
  TooltipRoot,

  useForwardPropsEmits,
} from 'radix-vue'

const props = withDefaults(defineProps<TooltipRootProps>(), {
  delayDuration: 0,
})
const emits = defineEmits<TooltipRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TooltipProvider>
    <TooltipRoot v-bind="forwarded">
      <slot></slot>
    </TooltipRoot>
  </TooltipProvider>
</template>
