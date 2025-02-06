<script setup lang="ts">
import {
  TooltipRoot,
  type TooltipRootEmits,
  type TooltipRootProps,
  useForwardPropsEmits,
} from 'radix-vue';

const props = withDefaults(defineProps<TooltipRootProps>(), {
  delayDuration: 0,
});
const emits = defineEmits<TooltipRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <TooltipProvider>
        <TooltipRoot v-bind="forwarded">
            <slot />
        </TooltipRoot>
    </TooltipProvider>
</template>
