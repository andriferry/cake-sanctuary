<script setup lang="ts">
import { Bar } from 'vue-chartjs';

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

const chartData = ref({
    labels: ['January', 'February', 'March'],
    datasets: [{ data: [40, 20, 12] }],
});

const chartOptions = ref({
    responsive: false,
});

// const chartOptions = {
//     chart: {
//         parentHeightOffset: 0,
//         type: 'bar',
//         toolbar: { show: false },
//     },
//     plotOptions: {
//         bar: {
//             columnWidth: '32%',
//             startingShape: 'rounded',
//             borderRadius: 4,
//             distributed: true,
//             dataLabels: { position: 'top' },
//         },
//     },
//     grid: {
//         show: false,
//         padding: {
//             top: 0,
//             bottom: 0,
//             left: -10,
//             right: -10,
//         },
//     },
//     colors: ['hsl(var(--primary))'],
//     dataLabels: {
//         enabled: true,
//         formatter(val: string) {
//             return `${val}k`;
//         },
//         offsetY: -25,
//         style: {
//             fontSize: '15px',
//             colors: ['#ef4444'],
//             fontWeight: '600',
//             fontFamily: 'Public Sans',
//         },
//     },
//     legend: { show: false },
//     tooltip: { enabled: false },
//     xaxis: {
//         categories: [
//             'Jan',
//             'Feb',
//             'Mar',
//             'Apr',
//             'May',
//             'Jun',
//             'Jul',
//             'Aug',
//             'Sep',
//         ],
//         axisBorder: {
//             show: true,
//             color: '#ef4444',
//         },
//         axisTicks: { show: false },
//         labels: {
//             style: {
//                 colors: '#ef4444',
//                 fontSize: '14px',
//                 fontFamily: 'Inter',
//             },
//         },
//     },
//     yaxis: {
//         labels: {
//             offsetX: -15,
//             formatter(val: number) {
//                 return `${parseInt(val / 1)}k`;
//             },
//             style: {
//                 fontSize: '14px',
//                 colors: '#ef4444',
//                 fontFamily: 'Public Sans',
//             },
//             min: 0,
//             max: 60000,
//             tickAmount: 6,
//         },
//     },
//     responsive: [
//         {
//             breakpoint: 1441,
//             options: { plotOptions: { bar: { columnWidth: '41%' } } },
//         },
//         {
//             breakpoint: 590,
//             options: {
//                 plotOptions: { bar: { columnWidth: '61%' } },
//                 grid: { padding: { right: 0 } },
//                 dataLabels: {
//                     style: {
//                         fontSize: '12px',
//                         fontWeight: '400',
//                     },
//                 },
//                 yaxis: { labels: { show: false } },
//             },
//         },
//     ],
// };
// const series = [
//     {
//         data: [35, 25, 15, 40, 42, 25, 48, 8, 30],
//     },
// ];
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
                    style="height: 240px; width: 100%;" />
            </div>
        </CardContent>
    </Card>
</template>

<style scoped></style>
