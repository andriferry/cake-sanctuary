<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { AvatarRoot } from 'radix-vue';
import { avatarVariant, type AvatarVariants } from '.';

interface Props {
    class?: HTMLAttributes['class'];
    size?: AvatarVariants['size'];
    shape?: AvatarVariants['shape'];
}

const props = withDefaults(defineProps<Props>(), {
    size: 'sm',
    shape: 'circle',
});
</script>

<template>
    <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
        <slot />
    </AvatarRoot>
</template>
