<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';
import { type ButtonVariants, buttonVariants } from '.';

interface Props extends PrimitiveProps {
    variant?: ButtonVariants['variant'];
    size?: ButtonVariants['size'];
    class?: HTMLAttributes['class'];
    prependIcon?: string
    appendIcon?: string
}

const props = withDefaults(defineProps<Props>(), {
    as: 'button',
});
</script>

<template>
    <Primitive
        :as="as"
        :as-child="asChild"
        :class="cn(buttonVariants({ variant, size }), props.class)">
        <Icon v-if="props.prependIcon" :name="props.prependIcon" class="text-xl" />
        <slot />
        <Icon v-if="props.appendIcon" :name="props.appendIcon" class="text-xl" />
    </Primitive>
</template>
