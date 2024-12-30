<script setup lang="ts">
import { cn } from '@/lib/utils';
import type {
    CarouselEmits,
    CarouselProps,
    WithClassAsProps,
} from './interface';
import { useProvideCarousel } from './useCarousel';

const props = withDefaults(defineProps<CarouselProps & WithClassAsProps>(), {
    orientation: 'horizontal',
});

const emits = defineEmits<CarouselEmits>();

const {
    canScrollNext,
    canScrollPrev,
    carouselApi,
    carouselRef,
    orientation,
    scrollNext,
    scrollPrev,
    currentPage,
} = useProvideCarousel(props, emits);

defineExpose({
    canScrollNext,
    canScrollPrev,
    carouselApi,
    carouselRef,
    orientation,
    scrollNext,
    scrollPrev,
});
const model = defineModel();

const onKeyDown = (event: KeyboardEvent) => {
    const prevKey = props.orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
    const nextKey =
        props.orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';

    if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();

        return;
    }

    if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
    }
};

watch(currentPage, (value) => {
    model.value = value;
});
//@init-api="(val) => (emblaThumbnailApi = val)"
</script>

<template>
    <div
        :class="cn('relative', props.class)"
        role="region"
        aria-roledescription="carousel"
        tabindex="0"
        @keydown="onKeyDown">
        <slot
            :can-scroll-next
            :can-scroll-prev
            :scroll-next
            :scroll-prev
            :carousel-api
            :carousel-ref
            :orientation />
    </div>
</template>
