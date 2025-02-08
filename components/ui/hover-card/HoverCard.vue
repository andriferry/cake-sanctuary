<script setup lang="ts">
import type { HoverCardRootEmits, HoverCardRootProps } from 'radix-vue'
import {
  HoverCardRoot,

  useForwardPropsEmits,
} from 'radix-vue'

const props = withDefaults(defineProps<HoverCardRootProps>(), {
  openDelay: 0,
  closeDelay: 0,

})
const emits = defineEmits<HoverCardRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <HoverCardRoot v-bind="forwarded">
    <slot></slot>
  </HoverCardRoot>
</template>
