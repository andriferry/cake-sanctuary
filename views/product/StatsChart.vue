<script setup lang="ts">
import { months } from '@@/lib/utils'

import { pink } from 'tailwindcss/colors'
import { Line } from 'vue-chartjs'

const chartData = computed(() => {
  return {
    labels: months({ count: 12, section: 3 }),
    datasets: [{
      data: [
        100,
        150,
        180,
        270,
        210,
        160,
        160,
        202,
        265,
        210,
        270,
        210,
      ],
      borderRadius: 9,
      tension: 0.5,
      pointRadius: 2,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 5,
      pointStyle: 'circle',
      borderColor: pink[500],
      backgroundColor: pink[500],
      pointHoverBorderColor: '#fffff',
      pointBorderColor: 'transparent',
    }],
  }
})

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
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50,
        },
        border: {
          display: false,
        },
      },
    },
  }
})
</script>

<template>
  <Card title="Income Statistics">
    <CardContent>
      <div class="w-full">
        <ClientOnly>
          <Line
            :data="chartData"
            :options="chartOptions"
            :height="400"
          />
        </ClientOnly>
      </div>
    </CardContent>
  </Card>
</template>
