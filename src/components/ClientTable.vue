<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Client } from '../stores/dashboard'

const props = defineProps<{
  clients: Client[]
  title: string
}>()

const search = ref('')

const filteredClients = computed(() => {
  if (!search.value) return props.clients
  
  const searchTerm = search.value.toLowerCase()
  return props.clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm) || 
    client.hairType.toLowerCase().includes(searchTerm)
  )
})

const getStatusClass = (status: string) => {
  switch (status) {
    case 'completed': return 'status-completed'
    case 'in-progress': return 'status-in-progress'
    case 'not-started': return 'status-not-started'
    case 'declined': return 'status-declined'
    default: return ''
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'completed': return 'Completado'
    case 'in-progress': return 'En progreso'
    case 'not-started': return 'No iniciado'
    case 'declined': return 'Declinado'
    default: return status
  }
}
</script>

<template>
  <div class="bg-white rounded-lg shadow p-6 mb-6">
    <h2>{{ title }}</h2>
    
    <div class="mb-4">
      <input 
        type="text" 
        v-model="search" 
        placeholder="Buscar cliente..." 
        class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    
    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr class="bg-gray-50">
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo de Cabello</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Encuesta</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado del Tratamiento</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última Visita</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="client in filteredClients" :key="client.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">{{ client.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ client.hairType }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ client.hasSurvey ? 'Completada' : 'Pendiente' }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="['status-badge', getStatusClass(client.treatmentStatus)]">
                {{ getStatusText(client.treatmentStatus) }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">{{ client.lastVisit }}</td>
          </tr>
          <tr v-if="filteredClients.length === 0">
            <td colspan="5" class="px-6 py-4 text-center text-gray-500">No se encontraron clientes</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>