<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products'
</script>

<template>
  <main class="pt-32 px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="heading text-5xl text-center mb-16">Our Collection</h1>
      <div class="product-grid mb-32">
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product"
        />
      </div>
    </div>
  </main>
</template>