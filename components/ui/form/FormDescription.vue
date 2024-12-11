<script lang="ts" setup>
import { cn } from '@/lib/utils';
// import type { HTMLAttributes } from 'vue';
import type { htmlAttributes } from '@/types/index';

interface Props {
    class?: htmlAttributes['class'];
}
const props = defineProps<Props>();
</script>

<template>
    <p :class="cn('text-sm text-muted-foreground', props.class)">
        <slot />
    </p>
</template>
