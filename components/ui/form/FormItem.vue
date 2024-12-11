<script lang="ts" setup>
import { cn } from '@/lib/utils';
import type { htmlAttributes } from '@/types/index';

interface Props {
    class?: htmlAttributes['class'];
}
const props = defineProps<Props>();
</script>

<template>
    <div :class="cn('space-y-2', props.class)">
        <slot />
    </div>
</template>
