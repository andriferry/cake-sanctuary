<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps } from 'radix-vue'
import { SelectRoot, useForwardPropsEmits } from 'radix-vue'

interface Props extends SelectRootProps {
  items?: any[]
  width?: string
  label?: string
  placeholder?: string
  itemTitle?: any
  itemValue?: any
}

const props = withDefaults(defineProps<Props>(), {
  width: 'w-[180px]',
})

const emits = defineEmits<SelectRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SelectRoot v-bind="forwarded">
    <SelectTrigger :class="width">
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>

    <SelectContent>
      <SelectGroup>
        <SelectLabel v-if="label">
          {{ label }}
        </SelectLabel>

        <SelectItem
          v-for="data, index in items"
          :key="index"
          :value="itemValue ? data[itemValue] : data"
        >
          {{ itemTitle ? data[itemTitle] : data }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </SelectRoot>
</template>
