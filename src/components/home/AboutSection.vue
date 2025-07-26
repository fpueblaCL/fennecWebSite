<script setup lang="ts">
interface TeamMember {
  name: string
  role: string
  description: string
  socialLinks: {
    linkedin?: string
    github?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: 'Gonzalo Hevia',
    role: 'CEO & Arquitecto de Software',
    description: 'Ingeniero con 10+ años de experiencia en arquitectura de sistemas distribuidos y liderazgo técnico.',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Francisco Puebla',
    role: 'CTO & Desarrollador Backend',
    description: 'Especialista en sistemas distribuidos, microservicios y bases de datos de alto rendimiento.',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Jaime Vidal',
    role: 'Líder de Desarrollo Frontend',
    description: 'Experto en interfaces de usuario, experiencia de usuario y desarrollo frontend moderno.',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Daniel Madariaga',
    role: 'DevOps & Cloud Architect',
    description: 'Especialista en infraestructura cloud, CI/CD y automatización de procesos de desarrollo.',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Christian Silva',
    role: 'Data Scientist & ML Engineer',
    description: 'Experto en análisis de datos, machine learning e integración de IA en aplicaciones empresariales.',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  }
]
</script>

<template>
  <section id="quienes-somos" class="py-20 bg-fennec-dark">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">Quiénes Somos</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-fennec-orange to-fennec-gold mx-auto mb-6"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Somos un equipo de ingenieros informáticos chilenos apasionados por crear soluciones tecnológicas que marcan la diferencia. 
          Nuestra combinación de experiencia técnica y visión estratégica nos permite desarrollar software que realmente impulsa el crecimiento de nuestros clientes.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        <div v-for="member in teamMembers" 
             :key="member.name"
             class="team-card bg-fennec-gray rounded-lg overflow-hidden">
          <div class="relative h-64">
            <div class="absolute inset-0 bg-gradient-to-b from-fennec-orange/20 to-fennec-black/80 z-10"></div>
            <svg class="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" fill="#2D2D2D"/>
              <circle cx="100" cy="70" r="40" fill="#3D3D3D"/>
              <rect x="60" y="110" width="80" height="90" fill="#3D3D3D"/>
              <path d="M100 70 Q 120 80 120 100 Q 120 120 100 130 Q 80 120 80 100 Q 80 80 100 70" fill="#D2B48C"/>
              <circle cx="85" cy="65" r="5" fill="#1E1E1E"/>
              <circle cx="115" cy="65" r="5" fill="#1E1E1E"/>
              <path d="M90 85 Q 100 95 110 85" stroke="#1E1E1E" stroke-width="2" fill="none"/>
            </svg>
            <div class="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 class="text-lg font-semibold text-white">{{ member.name }}</h3>
              <p class="text-sm text-fennec-orange">{{ member.role }}</p>
            </div>
            <div class="overlay absolute inset-0 bg-fennec-orange/80 flex items-center justify-center z-30 p-4">
              <div class="text-center">
                <p class="text-sm text-white">{{ member.description }}</p>
                <div class="flex justify-center mt-4 space-x-3">
                  <a v-if="member.socialLinks.linkedin" 
                     :href="member.socialLinks.linkedin" 
                     class="text-white hover:text-fennec-black transition-colors">
                    <i class="fab fa-linkedin text-lg"></i>
                  </a>
                  <a v-if="member.socialLinks.github" 
                     :href="member.socialLinks.github" 
                     class="text-white hover:text-fennec-black transition-colors">
                    <i class="fab fa-github text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16 bg-fennec-gray rounded-lg p-8 border border-fennec-light-gray/20">
        <h3 class="text-2xl font-display font-semibold mb-4">Nuestra Misión</h3>
        <p class="text-gray-300">
          Desarrollar soluciones tecnológicas que transformen la manera en que las empresas operan, 
          permitiéndoles alcanzar nuevos niveles de eficiencia, innovación y competitividad en un entorno digital en constante evolución.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-card {
  overflow: hidden;
}

.team-card .overlay {
  transition: all 0.3s ease;
  opacity: 0;
}

.team-card:hover .overlay {
  opacity: 1;
}
</style>
