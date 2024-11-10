import { defineStore } from 'pinia'
import type { Product } from '@/types'

interface CartItem extends Product {
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
    isOpen: false
  }),
  
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalAmount: (state) => state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
  },
  
  actions: {
    addItem(product: Product) {
      const existingItem = this.items.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
      this.isOpen = true
    },
    
    removeItem(productId: number) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    },
    
    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    },
    
    toggleCart() {
      this.isOpen = !this.isOpen
    }
  }
})