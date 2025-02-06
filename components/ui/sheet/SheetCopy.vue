<script setup lang="ts">
import {
  DialogRoot,
  type DialogRootEmits,
  type DialogRootProps,
  useForwardPropsEmits,
} from 'radix-vue';

const props = defineProps<DialogRootProps>();
const emits = defineEmits<DialogRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
// const model = defineModel<boolean>();
// const openModal = ref(false);

// watch(model, (value) => {
//     if (value) openModal.value = value;
// });

// const updateDialog = (value: boolean) => {
//     if (model.value) model.value = value;
// };
// @update:open="updateDialog"
// v-model:open="openModal"
</script>

<template>
    <DialogRoot v-bind="forwarded">
        <slot />
    </DialogRoot>
</template>
