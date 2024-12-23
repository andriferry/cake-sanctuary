<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { type CardVariant, cardVariant } from '.';

interface Props {
    variant?: CardVariant['variant'];
    class?: HTMLAttributes['class'];
}

const props = defineProps<Props>();

</script>

<template>
    <div :class="cn(cardVariant({ variant }), props.class)">
        <slot />
    </div>
</template>
