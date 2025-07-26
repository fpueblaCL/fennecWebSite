<script setup lang="ts">
import { ref } from 'vue'

const stats = [
  { value: '5+', label: 'Años de experiencia' },
  { value: '50+', label: 'Proyectos completados' },
  { value: '30+', label: 'Clientes satisfechos' },
  { value: '5', label: 'Ingenieros expertos' }
]
</script>

<template>
  <section id="inicio" class="min-h-screen flex items-center justify-center bg-fennec-black relative overflow-hidden pt-16">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#FF8C00" stroke-width="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-16 relative z-10">
      <div class="flex flex-col md:flex-row items-center">
        <div class="w-full md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Transformamos <span class="gradient-text">ideas</span> en soluciones digitales <span class="gradient-text">inteligentes</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-400 mb-8 max-w-lg">
            Desarrollamos software a medida que impulsa la innovación y optimiza procesos para empresas que buscan diferenciarse en la era digital.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contacto" 
               class="px-8 py-3 bg-gradient-to-r from-fennec-orange to-fennec-gold text-white font-medium rounded-md hover:shadow-lg hover:shadow-fennec-orange/20 transition-all">
              Contáctanos
            </a>
            <a href="#servicios" 
               class="px-8 py-3 border border-fennec-orange text-fennec-orange font-medium rounded-md hover:bg-fennec-orange/10 transition-all">
              Nuestros servicios
            </a>
          </div>
        </div>
        
        <div class="w-full md:w-1/2 flex justify-center animate-fadeIn delay-200">
          <div class="relative w-full max-w-md">
            <!-- SVG Hero Image -->
            <img src="@/assets/images/logo2.png" 
                alt="Logo de FennecSoft" 
                class="w-full h-auto"
                />
          </div>
        </div>
      </div>
      
      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fadeIn delay-300">
        <div v-for="(stat, index) in stats" 
             :key="index"
             class="bg-fennec-dark p-6 rounded-lg border border-fennec-light-gray/20">
          <div class="text-3xl font-bold text-fennec-orange mb-2">{{ stat.value }}</div>
          <div class="text-sm text-gray-400">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, #FF8C00, #DAA520);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease forwards;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}
</style>
