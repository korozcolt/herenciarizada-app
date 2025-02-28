<script setup lang="ts">
import { computed } from 'vue'
import { useDashboardStore } from '../stores/dashboard'
import StatCard from '../components/StatCard.vue'
import BarChart from '../components/BarChart.vue'
import PieChart from '../components/PieChart.vue'
import ClientTable from '../components/ClientTable.vue'

const store = useDashboardStore()

const treatmentStatusData = computed(() => ({
  labels: ['Completados', 'En Progreso', 'No Iniciados', 'Declinados'],
  datasets: [{
    label: 'Estado de Tratamientos',
    data: [
      store.treatmentStatusCounts.completed,
      store.treatmentStatusCounts.inProgress,
      store.treatmentStatusCounts.notStarted,
      store.treatmentStatusCounts.declined
    ],
    backgroundColor: ['#4caf50', '#ff9800', '#f44336', '#9e9e9e']
  }]
}))

const hairTypeData = computed(() => {
  const types = Object.keys(store.hairTypeCounts)
  return {
    labels: types,
    datasets: [{
      label: 'Tipos de Cabello',
      data: types.map(type => store.hairTypeCounts[type]),
      backgroundColor: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6']
    }]
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard 
        :value="store.totalClients" 
        label="Total de Clientes" 
        color="#3498db"
      />
      <StatCard 
        :value="store.clientsWithSurvey" 
        label="Encuestas Completadas" 
        color="#2ecc71"
      />
      <StatCard 
        :value="`${store.surveyCompletionRate.toFixed(0)}%`" 
        label="Tasa de Completado de Encuestas" 
        color="#9b59b6"
      />
      <StatCard 
        :value="`${store.treatmentSuccessRate.toFixed(0)}%`" 
        label="Tasa de Éxito de Tratamientos" 
        color="#f39c12"
      />
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div class="bg-white rounded-lg shadow p-6">
        <h2>Estado de Tratamientos</h2>
        <div class="h-80">
          <BarChart :chartData="treatmentStatusData" :chartOptions="chartOptions" />
        </div>
      </div>
      <div class="bg-white rounded-lg shadow p-6">
        <h2>Tipos de Cabello</h2>
        <div class="h-80">
          <PieChart :chartData="hairTypeData" :chartOptions="chartOptions" />
        </div>
      </div>
    </div>
    
    <ClientTable 
      :clients="store.pendingTreatmentClients" 
      title="Clientes Pendientes de Tratamiento" 
    />
  </div>
</template>