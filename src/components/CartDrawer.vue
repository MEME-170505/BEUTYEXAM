<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'

const cart = useCartStore()
const totalFormatted = computed(() => cart.totalAmount.toFixed(2))
</script>

<template>
  <div v-if="cart.isOpen" 
       class="fixed inset-0 bg-black/50 z-50"
       @click="cart.toggleCart()">
  </div>
  
  <div class="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300"
       :class="cart.isOpen ? 'translate-x-0' : 'translate-x-full'">
    <div class="p-6 h-full flex flex-col">
      <div class="flex justify-between items-center mb-8">
        <h2 class="heading text-2xl">Shopping Cart</h2>
        <button @click="cart.toggleCart()" class="text-neutral-500 hover:text-neutral-800">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div class="flex-1 overflow-y-auto">
        <div v-if="cart.items.length === 0" class="text-center py-12">
          <p class="text-neutral-500">Your cart is empty</p>
        </div>
        
        <div v-else class="space-y-6">
          <div v-for="item in cart.items" 
               :key="item.id" 
               class="flex gap-4">
            <img :src="item.image" 
                 :alt="item.name" 
                 class="w-20 h-20 object-cover">
            <div class="flex-1">
              <h3 class="heading text-sm mb-1">{{ item.name }}</h3>
              <p class="text-sm text-neutral-500 mb-2">${{ item.price }}</p>
              <div class="flex items-center gap-2">
                <button @click="cart.updateQuantity(item.id, Math.max(0, item.quantity - 1))"
                        class="w-6 h-6 flex items-center justify-center border border-neutral-200 hover:border-neutral-400">
                  -
                </button>
                <span class="w-8 text-center">{{ item.quantity }}</span>
                <button @click="cart.updateQuantity(item.id, item.quantity + 1)"
                        class="w-6 h-6 flex items-center justify-center border border-neutral-200 hover:border-neutral-400">
                  +
                </button>
              </div>
            </div>
            <button @click="cart.removeItem(item.id)" 
                    class="text-neutral-400 hover:text-neutral-600">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t">
        <div class="flex justify-between mb-4">
          <span class="text-lg">Total</span>
          <span class="text-lg font-medium">${{ totalFormatted }}</span>
        </div>
        <button class="w-full bg-black text-white py-3 uppercase tracking-wider text-sm hover:bg-neutral-800">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>