<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { WithClassAsProps } from './interface';
import { useCarousel } from './useCarousel';

const props = defineProps<WithClassAsProps>();

const { orientation, carouselApi, currentPage } = useCarousel();

const itemRef = ref();

const divClass = computed( () => {
  //basis-full
  return cn(
    'min-w-0 shrink-0 grow-0',
    orientation === 'horizontal' ? 'pl-4' : 'pt-4',
    props.class
  );
});

const clickEvent = () => {
  const getNode: number | undefined = carouselApi.value?.slideNodes().findIndex((item: any) => {
    return (
      item.__vueParentComponent.uid ===
            itemRef.value.__vueParentComponent.uid
    );
  } );


  if (typeof getNode === 'number' && getNode > -1) {
    carouselApi.value?.scrollTo( getNode );
    currentPage.value = getNode;
  }
};
</script>

<template>
    <div
        ref="itemRef"
        role="group"
        aria-roledescription="slide"
        :class="divClass"
        @click="clickEvent">
        <slot />
    </div>
</template>
