<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import CartDrawer from './components/CartDrawer.vue'
import LoginModal from './components/LoginModal.vue'
</script>

<template>
  <div class="min-h-screen bg-neutral-50">
    <Navbar />
    <RouterView />
    <CartDrawer />
    <LoginModal />
  </div>
</template>