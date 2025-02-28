import { defineStore } from 'pinia'

export interface Client {
  id: number
  name: string
  hasSurvey: boolean
  treatmentStatus: 'completed' | 'in-progress' | 'not-started' | 'declined'
  hairType: string
  lastVisit: string
}

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    clients: [
      { id: 1, name: 'Ana García', hasSurvey: true, treatmentStatus: 'completed', hairType: 'Rizado', lastVisit: '2025-01-15' },
      { id: 2, name: 'Carlos Rodríguez', hasSurvey: true, treatmentStatus: 'in-progress', hairType: 'Liso', lastVisit: '2025-02-03' },
      { id: 3, name: 'María López', hasSurvey: false, treatmentStatus: 'not-started', hairType: 'Ondulado', lastVisit: '2025-01-28' },
      { id: 4, name: 'Juan Martínez', hasSurvey: true, treatmentStatus: 'declined', hairType: 'Rizado', lastVisit: '2025-01-10' },
      { id: 5, name: 'Laura Sánchez', hasSurvey: true, treatmentStatus: 'completed', hairType: 'Liso', lastVisit: '2025-02-05' },
      { id: 6, name: 'Pedro Gómez', hasSurvey: false, treatmentStatus: 'not-started', hairType: 'Ondulado', lastVisit: '2025-01-20' },
      { id: 7, name: 'Sofia Fernández', hasSurvey: true, treatmentStatus: 'in-progress', hairType: 'Rizado', lastVisit: '2025-02-10' },
      { id: 8, name: 'Diego Torres', hasSurvey: true, treatmentStatus: 'completed', hairType: 'Liso', lastVisit: '2025-01-25' },
      { id: 9, name: 'Carmen Díaz', hasSurvey: false, treatmentStatus: 'not-started', hairType: 'Ondulado', lastVisit: '2025-02-01' },
      { id: 10, name: 'Javier Ruiz', hasSurvey: true, treatmentStatus: 'declined', hairType: 'Rizado', lastVisit: '2025-01-18' }
    ] as Client[]
  }),
  
  getters: {
    totalClients: (state) => state.clients.length,
    
    clientsWithSurvey: (state) => state.clients.filter(client => client.hasSurvey).length,
    
    clientsWithoutSurvey: (state) => state.clients.filter(client => !client.hasSurvey).length,
    
    treatmentStatusCounts: (state) => {
      return {
        completed: state.clients.filter(client => client.treatmentStatus === 'completed').length,
        inProgress: state.clients.filter(client => client.treatmentStatus === 'in-progress').length,
        notStarted: state.clients.filter(client => client.treatmentStatus === 'not-started').length,
        declined: state.clients.filter(client => client.treatmentStatus === 'declined').length
      }
    },
    
    hairTypeCounts: (state) => {
      const counts: Record<string, number> = {}
      state.clients.forEach(client => {
        counts[client.hairType] = (counts[client.hairType] || 0) + 1
      })
      return counts
    },
    
    pendingTreatmentClients: (state) => {
      return state.clients.filter(client => 
        client.treatmentStatus === 'not-started' || 
        client.treatmentStatus === 'in-progress'
      )
    },
    
    surveyCompletionRate: (state) => {
      return (state.clients.filter(client => client.hasSurvey).length / state.clients.length) * 100
    },
    
    treatmentSuccessRate: (state) => {
      const completedCount = state.clients.filter(client => client.treatmentStatus === 'completed').length
      const totalWithTreatment = state.clients.filter(client => 
        client.treatmentStatus === 'completed' || 
        client.treatmentStatus === 'in-progress' || 
        client.treatmentStatus === 'declined'
      ).length
      
      return totalWithTreatment > 0 ? (completedCount / totalWithTreatment) * 100 : 0
    }
  }
})