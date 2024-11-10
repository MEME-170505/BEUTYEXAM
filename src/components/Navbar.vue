<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const cart = useCartStore()
const auth = useAuthStore()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="navbar fixed w-full bg-white/90 backdrop-blur-sm z-40">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo Container -->
        <div class="logo-container flex-1 flex justify-center items-center">
          <router-link to="/">
            <img src="https://www.cosmoprof.com/media//cosmoprof/brandBible/2024/EA091B5E-B597-9F69-BF76E830F822A6C6.png" alt="Beauty of Joseon" class="logo-img"/>
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-12">
          <router-link to="/" class="text-sm uppercase tracking-wider hover:text-neutral-500">Home</router-link>
          <router-link to="/products" class="text-sm uppercase tracking-wider hover:text-neutral-500">Products</router-link>
          <router-link to="/about" class="text-sm uppercase tracking-wider hover:text-neutral-500">About</router-link>
          
          <div class="flex items-center space-x-6">
            <button v-if="!auth.isAuthenticated" 
                    @click="auth.toggleLoginModal()"
                    class="text-sm uppercase tracking-wider hover:text-neutral-500">
              Sign In
            </button>
            <div v-else class="relative group">
              <button class="text-sm uppercase tracking-wider hover:text-neutral-500">
                {{ auth.user?.name }}
              </button>
              <div class="absolute right-0 mt-2 w-48 bg-white shadow-lg py-2 hidden group-hover:block">
                <button @click="auth.logout()" 
                        class="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                  Sign Out
                </button>
              </div>
            </div>
            
            <button @click="cart.toggleCart()" 
                    class="relative text-neutral-800 hover:text-neutral-600">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span v-if="cart.totalItems > 0"
                    class="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-black text-white text-xs rounded-full">
                {{ cart.totalItems }}
              </span>
            </button>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center space-x-4">
          <button @click="cart.toggleCart()" 
                  class="relative text-neutral-800 hover:text-neutral-600">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span v-if="cart.totalItems > 0"
                  class="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-black text-white text-xs rounded-full">
              {{ cart.totalItems }}
            </span>
          </button>
          
          <button @click="toggleMenu" class="text-neutral-800">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white/90 backdrop-blur-sm">
      <div class="px-4 pt-2 pb-3 space-y-3">
        <router-link to="/" class="block text-sm uppercase tracking-wider hover:text-neutral-500">Home</router-link>
        <router-link to="/products" class="block text-sm uppercase tracking-wider hover:text-neutral-500">Products</router-link>
        <router-link to="/about" class="block text-sm uppercase tracking-wider hover:text-neutral-500">About</router-link>
        <button v-if="!auth.isAuthenticated" 
                @click="auth.toggleLoginModal()"
                class="block text-sm uppercase tracking-wider hover:text-neutral-500">
          Sign In
        </button>
        <button v-else 
                @click="auth.logout()"
                class="block text-sm uppercase tracking-wider hover:text-neutral-500">
          Sign Out
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
  position: relative;
}

.logo-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.logo-img {
  width: 150px;
  max-width: 100%;
}

.nav-links,
.nav-right {
  display: flex;
  gap: 2rem;
}

.md\\:hidden {
  display: none;
}

@media (max-width: 768px) {
  .hidden.md\\:flex {
    display: none;
  }

  .md:hidden {
    display: flex;
  }

  .logo-container {
    flex: 1;
    display: flex;
    justify-content: center;
  }
}
</style>
