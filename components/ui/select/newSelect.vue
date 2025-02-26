<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps } from 'radix-vue'
import { SelectRoot, useForwardPropsEmits } from 'radix-vue'

interface Props extends SelectRootProps {
  items?: string[] | { title: any, value: any }[]
  width?: string
  label?: string
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: 'w-[180px]',
})
/// defineProps<Props>()

// const props = withDefaults(defineProps<Props>(), {
//   as: 'button',
//   disabled: false,
//   rounded: 'default',
// })

const emits = defineEmits<SelectRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SelectRoot v-bind="forwarded">
    <!-- <slot></slot> -->
    <SelectTrigger :class="width">
      <SelectValue placeholder="Select a period" />
    </SelectTrigger>
  </SelectRoot>
</template>
