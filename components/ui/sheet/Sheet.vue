<script setup lang="ts">
import type {
  DialogRootEmits,
  DialogRootProps,
} from 'radix-vue'
import {
  DialogRoot,

  useForwardPropsEmits,
} from 'radix-vue'

const props = defineProps<DialogRootProps>()
const emits = defineEmits<DialogRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
const model = defineModel<boolean>()
const openModal = ref(false)

watch(model, (value) => {
  if (value)
    openModal.value = value
})

function updateDialog(value: boolean) {
  if (model.value)
    model.value = value
}
</script>

<template>
  <DialogRoot
    v-bind="forwarded"
    v-model:open="openModal"
    @update:open="updateDialog"
  >
    <slot></slot>
  </DialogRoot>
</template>
