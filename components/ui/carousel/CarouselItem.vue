<script setup lang="ts">
import type { WithClassAsProps } from './interface';
import { cn } from '@/lib/utils';
import { useCarousel } from './useCarousel';

const props = defineProps<WithClassAsProps>();

const { orientation, carouselApi, currentPage } = useCarousel();

const itemRef = ref();

const checkClick = () => {
    let getNode = carouselApi.value
        ?.slideNodes()
        .findIndex(
            (item: any) =>
                item.__vueParentComponent.uid ===
                itemRef.value.__vueParentComponent.uid
        );

    if (getNode) {
        carouselApi.value?.scrollTo(getNode);
        currentPage.value = getNode;
    }
};
</script>

<template>
    <div
        role="group"
        ref="itemRef"
        @click="checkClick"
        aria-roledescription="slide"
        :class="
            cn(
                'min-w-0 shrink-0 grow-0 basis-full',
                orientation === 'horizontal' ? 'pl-4' : 'pt-4',
                props.class
            )
        ">
        <slot />
    </div>
</template>
