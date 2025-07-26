<script setup lang="ts">
interface Technology {
  name: string
}

interface Project {
  title: string
  shortDescription: string
  longDescription: string
  technologies: Technology[]
  stats: string
}

const projects: Project[] = [
  {
    title: 'Sistema de Gestión Logística',
    shortDescription: 'Reducción del 30% en tiempos de entrega y optimización de rutas para una empresa de distribución nacional.',
    longDescription: 'Plataforma integral para optimizar operaciones logísticas de una empresa de distribución nacional.',
    technologies: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'PostgreSQL' },
      { name: 'AWS' }
    ],
    stats: 'Reducción del 30% en tiempos de entrega y optimización de rutas'
  },
  {
    title: 'Plataforma de Análisis Financiero',
    shortDescription: 'Implementación de modelos predictivos que mejoraron en un 25% la precisión en la evaluación de riesgos.',
    longDescription: 'Sistema de análisis predictivo para una institución financiera con visualización avanzada de datos.',
    technologies: [
      { name: 'Vue.js' },
      { name: 'Python' },
      { name: 'TensorFlow' },
      { name: 'GCP' }
    ],
    stats: 'Mejora del 25% en precisión de evaluación de riesgos'
  },
  {
    title: 'App de Telemedicina',
    shortDescription: 'Solución que permitió atender a más de 10,000 pacientes mensualmente durante la pandemia.',
    longDescription: 'Aplicación móvil para consultas médicas remotas con integración de expedientes clínicos digitales.',
    technologies: [
      { name: 'React Native' },
      { name: 'Firebase' },
      { name: 'WebRTC' },
      { name: 'MongoDB' }
    ],
    stats: '10,000+ pacientes atendidos mensualmente'
  },
  {
    title: 'Sistema de Automatización Industrial',
    shortDescription: 'Incremento del 40% en eficiencia productiva y reducción del 25% en costos operativos.',
    longDescription: 'Plataforma IoT para monitoreo y control de procesos industriales en tiempo real.',
    technologies: [
      { name: 'Angular' },
      { name: '.NET Core' },
      { name: 'MQTT' },
      { name: 'Azure IoT' }
    ],
    stats: '40% incremento en eficiencia productiva'
  },
  {
    title: 'Plataforma de Streaming Educativo',
    shortDescription: 'Solución escalable que soporta más de 50,000 usuarios concurrentes con baja latencia.',
    longDescription: 'Sistema de distribución de contenido educativo con funcionalidades avanzadas de interacción.',
    technologies: [
      { name: 'Next.js' },
      { name: 'GraphQL' },
      { name: 'AWS Media' },
      { name: 'Redis' }
    ],
    stats: '50,000+ usuarios concurrentes'
  },
  {
    title: 'Sistema de Gestión Hospitalaria',
    shortDescription: 'Mejora del 35% en la eficiencia administrativa y reducción de errores médicos en un 45%.',
    longDescription: 'Plataforma integral para administración de recursos, pacientes y procesos clínicos.',
    technologies: [
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'Oracle' },
      { name: 'React' }
    ],
    stats: '45% reducción en errores médicos'
  }
]
</script>

<template>
  <section id="proyectos" class="py-20 bg-fennec-dark">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">Proyectos Destacados</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-fennec-orange to-fennec-gold mx-auto mb-6"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Conoce algunos de nuestros proyectos más relevantes y cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos de negocio a través de soluciones tecnológicas innovadoras.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" 
             :key="project.title" 
             class="project-card bg-fennec-gray rounded-lg overflow-hidden">
          <div class="relative h-64">
            <!-- Diseño gráfico abstracto del proyecto -->
            <ProjectVisual />
            <div class="project-info absolute inset-0 bg-fennec-black/80 flex items-center justify-center p-6">
              <div>
                <h4 class="text-lg font-semibold text-white mb-2">{{ project.title }}</h4>
                <p class="text-sm text-gray-300 mb-4">{{ project.longDescription }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span v-for="tech in project.technologies" 
                        :key="tech.name"
                        class="text-xs bg-fennec-orange/20 text-fennec-orange px-2 py-1 rounded">
                    {{ tech.name }}
                  </span>
                </div>
                <a href="#" class="text-fennec-orange hover:text-fennec-gold transition-colors text-sm font-medium">
                  Ver detalles <i class="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
            <p class="text-gray-400 text-sm">{{ project.shortDescription }}</p>
          </div>
        </div>
      </div>
      
      <div class="mt-16 text-center">
        <a href="#" class="inline-block px-8 py-3 border border-fennec-orange text-fennec-orange font-medium rounded-md hover:bg-fennec-orange/10 transition-all">
          Ver todos los proyectos
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// Componente para el diseño visual de cada proyecto
const ProjectVisual = {
  template: `
    <svg class="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#2D2D2D"/>
      <rect x="50" y="50" width="300" height="200" fill="#3D3D3D" rx="5"/>
      <rect x="70" y="70" width="260" height="30" fill="#1E1E1E" rx="3"/>
      <rect x="70" y="110" width="80" height="100" fill="#1E1E1E" rx="3"/>
      <rect x="160" y="110" width="80" height="100" fill="#1E1E1E" rx="3"/>
      <rect x="250" y="110" width="80" height="100" fill="#1E1E1E" rx="3"/>
      <circle cx="110" cy="180" r="20" fill="#FF8C00"/>
      <circle cx="200" cy="180" r="20" fill="#D2B48C"/>
      <circle cx="290" cy="180" r="20" fill="#FF8C00"/>
      <rect x="90" y="85" width="40" height="10" fill="#FF8C00" rx="2"/>
      <rect x="140" y="85" width="160" height="10" fill="#D2B48C" rx="2"/>
    </svg>
  `
}
</script>

<style scoped>
.project-card {
  overflow: hidden;
}

.project-card img {
  transition: transform 0.5s ease;
}

.project-card:hover img {
  transform: scale(1.05);
}

.project-card .project-info {
  transition: all 0.3s ease;
  opacity: 0;
}

.project-card:hover .project-info {
  opacity: 1;
}
</style>
