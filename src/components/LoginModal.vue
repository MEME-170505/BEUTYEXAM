<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  await auth.login(email.value, password.value)
}
</script>

<template>
  <div v-if="auth.isLoginModalOpen"
       class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
       @click.self="auth.toggleLoginModal()">
    <div class="bg-white p-8 max-w-md w-full mx-4 rounded-lg">
      <div class="flex justify-between items-center mb-6">
        <h2 class="heading text-2xl">Sign In</h2>
        <button @click="auth.toggleLoginModal()" class="text-neutral-500 hover:text-neutral-800">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-neutral-700 mb-1">
            Email
          </label>
          <input type="email" 
                 id="email" 
                 v-model="email"
                 class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black">
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-neutral-700 mb-1">
            Password
          </label>
          <input type="password" 
                 id="password" 
                 v-model="password"
                 class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black">
        </div>
        
        <button type="submit" 
                class="w-full bg-black text-white py-3 uppercase tracking-wider text-sm hover:bg-neutral-800">
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>