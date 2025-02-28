<script setup lang="ts">
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

defineProps<{
  chartData: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string[]
    }[]
  }
  chartOptions?: Record<string, any>
}>()
</script>

<template>
  <Pie :data="chartData" :options="chartOptions || {}" />
</template>