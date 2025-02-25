<script setup lang="ts">
import { months } from '@@/lib/utils'

import { pink } from 'tailwindcss/colors'
import { Line } from 'vue-chartjs'

const chartData = computed(() => {
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
      tooltip: {
        position: 'average',
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
          callback(val: number) {
            return new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumSignificantDigits: 3,
            }).format(val)
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
      <CardTitle class="flex justify-between">
        Income Statistics

        <div>Hello</div>
      </CardTitle>
    </CardHeader>
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
