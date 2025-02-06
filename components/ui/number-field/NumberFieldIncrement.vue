<script setup lang="ts">
import type { NumberFieldIncrementProps } from 'radix-vue';
import { cn } from '@/lib/utils';
import { NumberFieldIncrement, useForwardProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';

const { icons } = useAppConfig();
const props = defineProps<
    NumberFieldIncrementProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
    <NumberFieldIncrement
        data-slot="increment"
        v-bind="forwarded"
        :class="
            cn(
                'absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-3',
                props.class
            )
        ">
        <slot>
            <Icon :name="icons.plus" class="size-4" />
        </slot>
    </NumberFieldIncrement>
</template>
