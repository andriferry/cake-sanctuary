<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue';
const [emblaRef] = emblaCarouselVue();

</script>

<template>
    <!-- <div class="embla" ref="emblaRef">
        <div class="embla__container">
            <div class="embla__slide">Slide 1</div>
            <div class="embla__slide">Slide 2</div>
            <div class="embla__slide">Slide 3</div>
        </div>
    </div> -->
    <Carousel class="relative w-full max-w-xs">
        <CarouselContent>
            <CarouselItem v-for="(_, index) in 5" :key="index">
                <div class="p-1">
                    <Card>
                        <CardContent
                            class="flex aspect-square items-center justify-center p-6">
                            <span class="text-4xl font-semibold">{{
                                index + 1
                            }}</span>
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
</template>

<style scoped>
.embla {
    overflow: hidden;
}
.embla__container {
    display: flex;
}
.embla__slide {
    flex: 0 0 100%;
    min-width: 0;
}
</style>
