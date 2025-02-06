<script setup lang="ts">
import type { WithClassAsProps } from './interface';
import { cn } from '@/lib/utils';
import { useCarousel } from './useCarousel';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<WithClassAsProps>();

const { carouselRef, orientation } = useCarousel();

const containerClass = computed(() => {
  return cn(
    'flex',
    orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
    props.class
  );
});
</script>

<template>
    <div ref="carouselRef" class="overflow-hidden">
        <div :class="containerClass" v-bind="$attrs">
            <slot />
        </div>
    </div>
</template>
