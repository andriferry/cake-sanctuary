<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js'

import { months } from '@@/lib/utils'
import { Line } from 'vue-chartjs'

const selectModel = ref('')
const lineChart = ref()

const selectOptions = ref([
  {
    title: 'A day',
    value: 'aDay',
  },
  {
    title: 'One week',
    value: 'aWeek',
  },
  {
    title: '8 Month',
    value: '8Month',
  },
  {
    title: 'A year',
    value: 'aYear',
  },
])

const chartData = computed<ChartData<'line'>>(() => {
  const colors = {
    default: 'rgba(236, 70, 153, 0.1)',
    half: 'rgba(236, 70, 153, 0.1)',
    quarter: 'rgba(236, 70, 153, 0.25)',
    zero: 'rgba(236, 70, 153, 0)',
  }

  return {
    labels: months({ count: 12, section: 3 }),
    datasets: [{
      data: [
        1000,
        1500,
        1800,
        2700,
        2100,
        1600,
        1600,
        2020,
        2650,
        2100,
        2700,
        2100,
      ],
      tension: 0.5,
      pointRadius: 2,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 5,
      pointStyle: 'circle',
      borderColor: 'rgba(236, 70, 153, 1)',
      pointHoverBorderColor: 'rgba(236, 70, 153, 1)',
      pointBackgroundColor: 'transparent',
      fill: true,
      backgroundColor: (context) => {
        const chart = context.chart

        const { ctx } = chart

        const gradient = ctx.createLinearGradient(0, 25, 0, 300)
        gradient.addColorStop(0, colors.half)
        gradient.addColorStop(0.35, colors.quarter)
        gradient.addColorStop(1, colors.zero)

        return gradient
      },
    }],
  }
})

const chartOptions = computed<ChartOptions<'line'>>(() => {
  return {
    maintainAspectRatio: false,
    animation: { duration: 500 },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = context.parsed.y

            if (context.parsed.y !== null) {
              label = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumSignificantDigits: 3,
              }).format(context.parsed.y)
            }

            return label
          },
        },
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
          callback(val: any) {
            return `$${val}`
          },
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
  <Card>
    <CardHeader>
      <CardTitle class="flex items-center justify-between">
        Income Statistics

        <Select
          v-model="selectModel"
          placeholder="Select a period"
          label="Time a period"
          :items="selectOptions"
          item-title="title"
          item-value="value"
        />
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div class="w-full">
        <Line
          ref="lineChart"
          :data="chartData"
          :options="chartOptions"
          :height="400"
        />
      </div>
    </CardContent>
  </Card>
</template>
