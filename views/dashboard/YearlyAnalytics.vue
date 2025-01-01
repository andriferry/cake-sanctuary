<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import { months } from '@@/lib/utils';

const currentOverview = ref(0);
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

const chartData = computed(() => {
    return {
        labels: months({ count: 12, section: 3 }),
        datasets: [
            { data: [40, 20, 12, 40, 50, 60, 70, 89, 90, 100, 120, 340] },
        ],
    };
});

const chartOptions = ref({
    plugins: {
        legend: {
            display: false,
        },
    },
    backgroundColor: ['#ec4899'],
    borderRadius: 9,
    scales: {
        x: {
            grid: {
                display: false
            },
        },
        y: {
            grid: {
                display: false
            },
            border: {
                display: false
            }
        },
    },
});
</script>

<template>
    <Card
        title="Accepted orders"
        subtitle="Yearly Earnings Overview"
        class="h-full">
        <CardContent class="">
            <SlideGroup v-model="currentOverview">
                <CarouselItem
                    v-for="(data, index) in annualYearly"
                    :key="index"
                    class="pl-0 w-24 cursor-pointer">
                    <Card
                        :class="
                            index === currentOverview
                                ? 'border-2 border-primary'
                                : 'border-2 border-dashed'
                        "
                        class="size-28 transition duration-300 flex justify-center items-center"
                        variant="flat">
                        <CardContent
                            class="p-0 flex flex-col gap-3 justify-center items-center">
                            <div
                                :class="
                                    index === currentOverview
                                        ? 'bg-primary/20 text-primary'
                                        : 'bg-slate-300/20 text-slate-400'
                                "
                                class="flex items-center rounded-lg p-3">
                                <Icon :name="data.icon" class="text-inherit" />
                            </div>

                            <span class="font-medium text-secondary">
                                {{ data.title }}
                            </span>
                        </CardContent>
                    </Card>
                </CarouselItem>
            </SlideGroup>

            <div class="mt-3">
                <Bar
                    :data="chartData"
                    :options="chartOptions"
                    style="height: 240px; width: 100%" />
            </div>
        </CardContent>
    </Card>
</template>

<style scoped></style>
