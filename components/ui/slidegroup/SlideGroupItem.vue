<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
interface Props {
    class?: HTMLAttributes['class'];
}
const props = defineProps<Props>();

const divClass = computed(() => {
  return cn('pl-0 cursor-pointer', props.class);
});
</script>

<template>
    <CarouselItem :class="divClass">
        <slot />
    </CarouselItem>
</template>
