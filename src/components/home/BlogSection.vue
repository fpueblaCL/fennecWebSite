<script setup lang="ts">
interface BlogPost {
  title: string
  description: string
  category: string
  date: string
  visual: 'architecture' | 'development' | 'ai'
}

const blogPosts: BlogPost[] = [
  {
    title: 'Microservicios vs. Monolitos: Eligiendo la arquitectura correcta',
    description: 'Un análisis detallado sobre cuándo y por qué elegir cada enfoque arquitectónico según las necesidades del proyecto.',
    category: 'Arquitectura',
    date: '15 de Junio, 2023',
    visual: 'architecture'
  },
  {
    title: 'Clean Code: Prácticas para un código mantenible y escalable',
    description: 'Principios y técnicas para escribir código limpio que facilite el mantenimiento y la colaboración en equipos.',
    category: 'Desarrollo',
    date: '28 de Mayo, 2023',
    visual: 'development'
  },
  {
    title: 'Implementando IA en aplicaciones empresariales: Casos prácticos',
    description: 'Cómo integrar modelos de inteligencia artificial para resolver problemas reales de negocio de forma efectiva.',
    category: 'Inteligencia Artificial',
    date: '10 de Mayo, 2023',
    visual: 'ai'
  }
]

const getVisualComponent = (type: BlogPost['visual']) => {
  const visuals = {
    architecture: `
      <svg class="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#2D2D2D"/>
        <circle cx="200" cy="100" r="60" fill="#3D3D3D"/>
        <path d="M170 70 L230 70 L200 40 Z" fill="#FF8C00"/>
        <path d="M170 130 L230 130 L200 160 Z" fill="#FF8C00"/>
        <rect x="190" y="70" width="20" height="60" fill="#FF8C00"/>
        <circle cx="200" cy="100" r="15" fill="#2D2D2D"/>
      </svg>
    `,
    development: `
      <svg class="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#2D2D2D"/>
        <rect x="100" y="50" width="200" height="100" fill="#3D3D3D" rx="5"/>
        <rect x="120" y="70" width="160" height="15" fill="#FF8C00" rx="2"/>
        <rect x="120" y="95" width="160" height="10" fill="#D2B48C" rx="2"/>
        <rect x="120" y="115" width="160" height="10" fill="#D2B48C" rx="2"/>
        <rect x="120" y="135" width="100" height="10" fill="#D2B48C" rx="2"/>
      </svg>
    `,
    ai: `
      <svg class="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#2D2D2D"/>
        <path d="M150 50 L250 50 L300 100 L250 150 L150 150 L100 100 Z" fill="#3D3D3D"/>
        <circle cx="200" cy="100" r="30" fill="#FF8C00"/>
        <path d="M185 85 L215 85 L215 115 L185 115 Z" fill="#2D2D2D"/>
      </svg>
    `
  }
  return { template: visuals[type] }
}
</script>

<template>
  <section id="bitacora" class="py-20 bg-fennec-black">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">Bitácora Fennec</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-fennec-orange to-fennec-gold mx-auto mb-6"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Compartimos conocimiento, experiencias y reflexiones sobre desarrollo de software, arquitectura y tendencias tecnológicas.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="post in blogPosts" 
                 :key="post.title" 
                 class="fennec-card bg-fennec-dark rounded-lg overflow-hidden border border-fennec-light-gray/20">
          <div class="h-48 bg-fennec-gray relative">
            <component :is="getVisualComponent(post.visual)" />
            <div class="absolute top-4 left-4 bg-fennec-orange text-white text-xs px-2 py-1 rounded">
              {{ post.category }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-3">{{ post.title }}</h3>
            <p class="text-gray-400 text-sm mb-4">{{ post.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500">{{ post.date }}</span>
              <a href="#" class="text-fennec-orange hover:text-fennec-gold transition-colors text-sm">
                Leer más <i class="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
        </article>
      </div>
      
      <div class="mt-16 text-center">
        <a href="#" 
           class="inline-block px-8 py-3 border border-fennec-orange text-fennec-orange font-medium rounded-md hover:bg-fennec-orange/10 transition-all">
          Ver todos los artículos
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fennec-card {
  transition: all 0.3s ease;
}

.fennec-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(255, 140, 0, 0.1);
}

/* Asegura que el SVG se ajuste correctamente */
svg {
  display: block;
  height: 100%;
  width: 100%;
}
</style>
