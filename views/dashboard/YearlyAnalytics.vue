<script setup lang="ts">
import { months } from '@@/lib/utils';
import { Bar } from 'vue-chartjs';

const currentOverview = ref(0);
const annualYearly = computed(() => {
    return [
        {
            title: 'Sales',
            icon: 'tabler:currency-dollar',
            chartData: [40, 100, 120, 340, 40, 50, 60, 70, 89, 90, 100, 120],
            bgColors: [
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                '#ec4899',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
            ],
        },
        {
            title: 'Customer',
            icon: 'tabler:users-group',
            chartData: [20, 40, 50, 60, 80, 100, 80, 70, 89, 90, 50, 50],
            bgColors: [
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                '#ec4899',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
            ],
        },
        {
            title: 'Orders',
            icon: 'tabler:bowl-chopsticks',
            chartData: [90, 140, 50, 60, 80, 100, 80, 70, 89, 90, 50, 50],
            bgColors: [
                'rgba(236, 72, 153, 0.5)',
                '#ec4899',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
            ],
        },
        {
            title: 'Tips',
            icon: 'tabler:wallet',
            chartData: [90, 100, 100, 60, 80, 100, 80, 70, 89, 90, 50, 50],
            bgColors: [
                'rgba(236, 72, 153, 0.5)',
                '#ec4899',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
            ],
        },
        {
            title: 'Income',
            icon: 'tabler:chart-pie-2',
            chartData: [190, 100, 200, 60, 80, 100, 80, 170, 89, 90, 50, 50],
            bgColors: [
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                '#ec4899',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
            ],
        },
        {
            title: 'Satisfaction',
            icon: 'tabler:mood-smile',
            chartData: [20, 30, 40, 60, 80, 100, 120, 110, 89, 90, 50, 50],
            bgColors: [
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                '#ec4899',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(236, 72, 153, 0.5)',
            ],
        },
    ];
});

const chartData = computed(() => {
    return {
        labels: months({ count: 12, section: 3 }),
        datasets: [
            { data: annualYearly.value[currentOverview.value].chartData },
        ],
    };
});

const chartOptions = computed(() => {
    return {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        backgroundColor: annualYearly.value[currentOverview.value].bgColors,
        borderRadius: 9,
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: '12',
                        weight: 'bolder',
                        color: '#6b95a9',
                    },
                },
            },
            y: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: '12',
                        color: '#6b95a9',
                        weight: 'bolder',
                    },
                },
            },
        },
    };
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
                    style="height: 340px; width: 100%" />
            </div>
        </CardContent>
    </Card>
</template>

<style scoped></style>
