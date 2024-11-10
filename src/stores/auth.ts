import { defineStore } from 'pinia'

interface User {
  email: string
  name: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isLoginModalOpen: false
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.user
  },
  
  actions: {
    async login(email: string, password: string) {
      // Simulate API call
      if (email && password) {
        this.user = {
          email,
          name: email.split('@')[0]
        }
        this.isLoginModalOpen = false
      }
    },
    
    logout() {
      this.user = null
    },
    
    toggleLoginModal() {
      this.isLoginModalOpen = !this.isLoginModalOpen
    }
  }
})