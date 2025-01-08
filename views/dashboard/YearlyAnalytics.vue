<script setup lang="ts">
import { annualYearlyAnalutics } from '@/@fake/data';
import { months } from '@@/lib/utils';
import { Bar } from 'vue-chartjs';

const currentOverview = ref(0);
const annualYearly = computed(() => annualYearlyAnalutics);

const chartData = computed(() => {
    return {
        labels: months({ count: 7, section: 3 }),
        datasets: [
            { data: annualYearly.value[currentOverview.value].chartData },
        ],
    };
});

const chartOptions = computed(() => {
    return {
        maintainAspectRatio: false,
        animation: { duration: 500 },
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
        <CardContent class="flex flex-col justify-between gap-4">
            <SlideGroup v-model="currentOverview">
                <SlideGroupItem
                    v-for="(data, index) in annualYearly"
                    :key="index"
                    class="pl-0 cursor-pointer">
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
                                class="flex items-center rounded-lg p-2">
                                <Icon :name="data.icon" class="text-inherit" />
                            </div>

                            <span class="font-medium text-secondary">
                                {{ data.title }}
                            </span>
                        </CardContent>
                    </Card>
                </SlideGroupItem>
            </SlideGroup>

            <div class="mt-3">
                <Bar
                    :data="chartData"
                    :options="chartOptions"
                    :height="250" />
            </div>
        </CardContent>
    </Card>
</template>

<style scoped></style>
