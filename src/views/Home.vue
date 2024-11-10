<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products'

const featuredProducts = products.slice(0, 3)
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <h1>BEAUTY OF JOSEON</h1>
        <p>Discover the secrets of Korean beauty</p>
      </div>
      <div class="hero-images">
        <img
          src="https://cdn.pixabay.com/photo/2024/03/01/15/29/beauty-8606769_1280.png"
          alt="Beauty Image"
          class="hero-image"
        />
        <img
          src="https://img.freepik.com/foto-gratis/senora-flores-orquidea-rosa-labios-grandes-maquillaje-natural_273443-2105.jpg"
          alt="Orchid Woman"
          class="hero-image"
        />
      </div>
    </section>

    <!-- Our Mission Section -->
    <section class="mission-section">
      <h2>Our Mission</h2>
      <p>
        We believe in the power of traditional Korean beauty wisdom combined with modern skincare innovation.
        Each product is thoughtfully formulated to enhance your natural beauty while honoring centuries-old ingredients.
      </p>
      <router-link to="/about" 
                   class="inline-block border border-black px-8 py-3 uppercase tracking-wider text-sm hover:bg-black hover:text-white transition duration-300">
        Learn More
      </router-link>
    </section>

    <!-- Featured Products Section -->
    <section class="products-section">
      <h2>FEATURED PRODUCTS</h2>
      <div class="product-grid">
        <ProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 4rem;
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  position: relative;
}

.hero-text {
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-images {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.hero-image {
  width: 45%;
  height: auto;
  border-radius: 8px;
}

.mission-section {
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  text-align: center;
}

.mission-section h2 {
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.mission-section p {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.products-section {
  text-align: center;
  padding: 4rem 2rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

h2 {
  font-weight: bold;
}
</style>
