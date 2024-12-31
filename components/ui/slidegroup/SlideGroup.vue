<script setup lang="ts">
const selectedIndex = defineModel();

const annualYearly = computed(() => {
    return [
        {
            title: 'Sales',
            icon: 'tabler:currency-dollar',
        },
        {
            title: 'Customer',
            icon: 'tabler:users-group',
        },
        {
            title: 'Orders',
            icon: 'tabler:bowl-chopsticks',
        },
        {
            title: 'Tips',
            icon: 'tabler:wallet',
        },
        {
            title: 'Income',
            icon: 'tabler:chart-pie-2',
        },
        {
            title: 'Satisfaction',
            icon: 'tabler:mood-smile',
        },
    ];
});
</script>

<template>
    <div class="w-full overflow-hidden relative">
        <Carousel v-model="selectedIndex" class="relative w-full">
            <CarouselContent class="flex gap-9 ml-0">
                <slot />
            </CarouselContent>
        </Carousel>
    </div>
</template>
