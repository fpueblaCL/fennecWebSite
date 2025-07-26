<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const navLinks = [
  { text: 'Inicio', href: '#inicio' },
  { text: 'Quiénes Somos', href: '#quienes-somos' },
  { text: 'Servicios', href: '#servicios' },
  { text: 'Proyectos', href: '#proyectos' },
  { text: 'Bitácora', href: '#bitacora' },
  { text: 'Contacto', href: '#contacto' }
]
</script>

<template>
  <nav class="fixed top-0 w-full bg-fennec-black/90 backdrop-blur-md z-50 border-b border-fennec-light-gray/20">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <a href="#inicio" class="flex items-center space-x-2">
        <div class="fennec-logo w-10 h-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 85C70 85 85 70 85 50C85 30 70 15 50 15C30 15 15 30 15 50C15 70 30 85 50 85Z" fill="#2D2D2D" stroke="#FF8C00" stroke-width="2"/>
            <path class="fennec-ear" d="M30 35C25 25 20 15 25 10C30 5 35 15 38 30" fill="#2D2D2D" stroke="#FF8C00" stroke-width="2"/>
            <path class="fennec-ear" d="M70 35C75 25 80 15 75 10C70 5 65 15 62 30" fill="#2D2D2D" stroke="#FF8C00" stroke-width="2"/>
            <circle cx="35" cy="45" r="5" fill="#FF8C00"/>
            <circle cx="65" cy="45" r="5" fill="#FF8C00"/>
            <path d="M40 60C45 65 55 65 60 60" stroke="#FF8C00" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div>
          <span class="font-display font-bold text-xl text-white">Fennec<span class="text-fennec-orange">Soft</span></span>
        </div>
      </a>
      
      <!-- Navegación Desktop -->
      <div class="hidden md:flex space-x-8">
        <a v-for="link in navLinks" 
           :key="link.href" 
           :href="link.href" 
           class="nav-link py-2 font-medium hover:text-fennec-orange transition-colors">
          {{ link.text }}
        </a>
      </div>
      
      <!-- Botón móvil -->
      <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    
    <!-- Menú móvil -->
    <div v-show="isMenuOpen" class="md:hidden bg-fennec-dark border-t border-fennec-light-gray/20">
      <div class="container mx-auto px-4 py-2 flex flex-col space-y-3">
        <a v-for="link in navLinks"
           :key="link.href"
           :href="link.href"
           class="mobile-nav-link py-2 font-medium hover:text-fennec-orange transition-colors"
           @click="isMenuOpen = false">
          {{ link.text }}
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link.active {
  color: #FF8C00;
  border-bottom: 2px solid #FF8C00;
}

.fennec-logo {
  transition: all 0.5s ease;
}

.fennec-logo:hover {
  filter: drop-shadow(0 0 8px rgba(255, 140, 0, 0.6));
}

.fennec-logo:hover .fennec-ear {
  transform-origin: bottom center;
  animation: earWiggle 1s ease-in-out;
}

@keyframes earWiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}
</style>
