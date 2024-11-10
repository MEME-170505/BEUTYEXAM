<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/types'

const props = defineProps<{
  product: Product
}>()

const cart = useCartStore()
</script>

<template>
  <div class="group">
    <div class="aspect-square mb-4 overflow-hidden">
      <img :src="product.image" 
           :alt="product.name" 
           class="w-full h-full object-cover transition duration-700 group-hover:scale-105">
    </div>
    <h3 class="heading text-lg mb-2">{{ product.name }}</h3>
    <p class="text-sm text-neutral-600 mb-3">{{ product.description }}</p>
    <div class="flex justify-between items-center">
      <span class="text-lg">${{ product.price }}</span>
      <button @click="cart.addItem(product)"
              class="text-sm uppercase tracking-wider hover:text-neutral-500">
        Add to Cart
      </button>
    </div>
  </div>
</template>