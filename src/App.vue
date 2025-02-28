<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = ref(router.currentRoute.value.path)

router.afterEach((to) => {
  currentRoute.value = to.path
})
</script>

<template>
  <div class="flex min-h-screen">
    <aside class="w-64 bg-gray-800 text-white">
      <div class="p-4 text-xl font-bold border-b border-gray-700 pb-4 mb-4">Hair Treatment Clinic</div>
      <ul class="px-2">
        <li class="mb-1">
          <router-link to="/" 
            class="block px-4 py-2 rounded transition-colors duration-200"
            :class="currentRoute === '/' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'">
            Dashboard
          </router-link>
        </li>
        <li class="mb-1">
          <router-link to="/clients" 
            class="block px-4 py-2 rounded transition-colors duration-200"
            :class="currentRoute === '/clients' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'">
            Clientes
          </router-link>
        </li>
        <li class="mb-1">
          <router-link to="/surveys" 
            class="block px-4 py-2 rounded transition-colors duration-200"
            :class="currentRoute === '/surveys' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'">
            Encuestas
          </router-link>
        </li>
        <li class="mb-1">
          <router-link to="/treatments" 
            class="block px-4 py-2 rounded transition-colors duration-200"
            :class="currentRoute === '/treatments' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'">
            Tratamientos
          </router-link>
        </li>
      </ul>
    </aside>
    <main class="flex-1 p-8">
      <router-view />
    </main>
  </div>
</template>