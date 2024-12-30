<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import { watchOnce } from '@vueuse/core';

const emblaMainApi = ref<CarouselApi>();
const emblaThumbnailApi = ref<CarouselApi>();
const selectedIndex = ref(0);

watchOnce(emblaMainApi, (emblaMainApi) => {
    if (!emblaMainApi) return;

    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
});

const onSelect = () => {
    if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
    selectedIndex.value = emblaMainApi.value.selectedScrollSnap();
    emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap());
};

const onThumbClick = (index: number) => {
    selectedIndex.value = index;
    emblaThumbnailApi.value?.scrollTo(index);
};
//            @init-api="(val) => (emblaThumbnailApi = val)"
//@click="onThumbClick(index)"
</script>

<template>
    <div class="w-full sm:w-auto">
        <Carousel class="relative w-full max-w-xs">
            <CarouselContent class="flex gap-1 ml-0">
                <CarouselItem
                    v-for="(_, index) in 10"
                    :key="index"
                    class="pl-0 basis-1/4 cursor-pointer">
                    <div
                        class="p-1"
                        :class="index === selectedIndex ? '' : 'opacity-50'">
                        <Card>
                            <CardContent
                                class="flex aspect-square items-center justify-center p-6">
                                <span class="text-4xl font-semibold">
                                    {{ index + 1 }}
                                </span>
                            </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    </div>
</template>
