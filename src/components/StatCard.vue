<script setup lang="ts">
defineProps<{
  value: number | string
  label: string
  color?: string
}>()
</script>

<template>
  <div class="bg-white rounded-lg shadow p-6" :class="{ 'border-t-4': color }" :style="{ borderTopColor: color }">
    <div class="text-3xl font-bold mb-2">{{ value }}</div>
    <div class="text-sm text-gray-500">{{ label }}</div>
  </div>
</template>