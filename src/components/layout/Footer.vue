<script setup lang="ts">
interface FooterLink {
  text: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface ContactItem {
  icon: string
  text: string
  href?: string
}

const quickLinks: FooterSection = {
  title: 'Enlaces rápidos',
  links: [
    { text: 'Inicio', href: '#inicio' },
    { text: 'Quiénes Somos', href: '#quienes-somos' },
    { text: 'Servicios', href: '#servicios' },
    { text: 'Proyectos', href: '#proyectos' },
    { text: 'Bitácora', href: '#bitacora' },
    { text: 'Contacto', href: '#contacto' }
  ]
}

const serviceLinks: FooterSection = {
  title: 'Servicios',
  links: [
    { text: 'Desarrollo de Software', href: '#servicios' },
    { text: 'Integración de Sistemas', href: '#servicios' },
    { text: 'Automatización de Procesos', href: '#servicios' },
    { text: 'Consultoría Tecnológica', href: '#servicios' },
    { text: 'Cloud & DevOps', href: '#servicios' },
    { text: 'Mantenimiento y Soporte', href: '#servicios' }
  ]
}

const contactInfo: ContactItem[] = [
  { icon: 'fa-envelope', text: 'contacto@fennecsoft.cl', href: 'mailto:contacto@fennecsoft.cl' },
  { icon: 'fa-phone', text: '+56 9 1234 5678', href: 'tel:+56912345678' },
  { icon: 'fa-map-marker-alt', text: 'Av. Apoquindo 4700, Of. 1601, Las Condes, Santiago, Chile' }
]

const socialLinks = [
  { icon: 'fa-linkedin-in', href: '#' },
  { icon: 'fa-github', href: '#' },
  { icon: 'fa-twitter', href: '#' },
  { icon: 'fa-instagram', href: '#' }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-fennec-black border-t border-fennec-light-gray/20 pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Logo y descripción -->
        <div>
          <div class="flex items-center space-x-2 mb-6">
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
          </div>
          <p class="text-gray-400 mb-6">
            Transformamos ideas en soluciones digitales inteligentes y sostenibles para empresas que buscan innovar y optimizar sus procesos.
          </p>
          <div class="flex space-x-4">
            <a v-for="link in socialLinks" 
               :key="link.icon"
               :href="link.href" 
               class="text-gray-400 hover:text-fennec-orange transition-colors">
              <i :class="['fab', link.icon]"></i>
            </a>
          </div>
        </div>
        
        <!-- Enlaces rápidos -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6">{{ quickLinks.title }}</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks.links" 
                :key="link.text">
              <a :href="link.href" 
                 class="text-gray-400 hover:text-fennec-orange transition-colors">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Servicios -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6">{{ serviceLinks.title }}</h4>
          <ul class="space-y-3">
            <li v-for="link in serviceLinks.links" 
                :key="link.text">
              <a :href="link.href" 
                 class="text-gray-400 hover:text-fennec-orange transition-colors">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Contacto -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6">Contacto</h4>
          <ul class="space-y-4">
            <li v-for="item in contactInfo" 
                :key="item.text" 
                class="flex items-start">
              <i :class="['fas', item.icon, 'text-fennec-orange mt-1 mr-3']"></i>
              <a v-if="item.href" 
                 :href="item.href" 
                 class="text-gray-400 hover:text-fennec-orange transition-colors">
                {{ item.text }}
              </a>
              <span v-else class="text-gray-400">{{ item.text }}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Copyright y links legales -->
      <div class="border-t border-fennec-light-gray/20 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {{ currentYear }} FennecSoft. Todos los derechos reservados.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-500 hover:text-fennec-orange text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="#" class="text-gray-500 hover:text-fennec-orange text-sm transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
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
