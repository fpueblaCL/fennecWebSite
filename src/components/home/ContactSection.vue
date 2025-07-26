<script setup lang="ts">
import { ref } from 'vue'

interface ContactForm {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Aquí iría la lógica real de envío del formulario
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  showSuccess.value = true
  isSubmitting.value = false
  
  // Reset del formulario después de 3 segundos
  setTimeout(() => {
    form.value = {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    }
    showSuccess.value = false
  }, 3000)
}

const subjects = [
  { value: 'proyecto', label: 'Consulta sobre un proyecto' },
  { value: 'servicio', label: 'Información sobre servicios' },
  { value: 'colaboracion', label: 'Propuesta de colaboración' },
  { value: 'otro', label: 'Otro' }
]

const contactInfo = [
  {
    icon: 'fa-envelope',
    label: 'Email',
    value: 'contacto@fennecsoft.cl',
    link: 'mailto:contacto@fennecsoft.cl'
  },
  {
    icon: 'fa-phone',
    label: 'Teléfono',
    value: '+56 9 1234 5678',
    link: 'tel:+56912345678'
  },
  {
    icon: 'fa-map-marker-alt',
    label: 'Dirección',
    value: 'Av. Apoquindo 4700, Of. 1601, Las Condes, Santiago, Chile'
  }
]

const socialLinks = [
  { icon: 'fa-linkedin-in', url: '#' },
  { icon: 'fa-github', url: '#' },
  { icon: 'fa-twitter', url: '#' },
  { icon: 'fa-instagram', url: '#' }
]

const schedule = [
  { days: 'Lunes - Viernes', hours: '9:00 - 18:00' },
  { days: 'Sábado', hours: '10:00 - 14:00' },
  { days: 'Domingo', hours: 'Cerrado' }
]
</script>

<template>
  <section id="contacto" class="py-20 bg-fennec-dark">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">Contáctanos</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-fennec-orange to-fennec-gold mx-auto mb-6"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente o necesitas asesoría tecnológica? Estamos aquí para ayudarte. 
          Completa el formulario y nos pondremos en contacto contigo a la brevedad.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Formulario -->
        <div class="bg-fennec-black rounded-lg p-8 border border-fennec-light-gray/20">
          <h3 class="text-2xl font-display font-semibold mb-6">Envíanos un mensaje</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-400 mb-2">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  class="w-full px-4 py-3 bg-fennec-gray border border-fennec-light-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fennec-orange/50 text-white" 
                  required
                >
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-400 mb-2">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  class="w-full px-4 py-3 bg-fennec-gray border border-fennec-light-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fennec-orange/50 text-white" 
                  required
                >
              </div>
            </div>
            
            <div>
              <label for="company" class="block text-sm font-medium text-gray-400 mb-2">Empresa (opcional)</label>
              <input 
                type="text" 
                id="company" 
                v-model="form.company"
                class="w-full px-4 py-3 bg-fennec-gray border border-fennec-light-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fennec-orange/50 text-white"
              >
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-400 mb-2">Asunto</label>
              <select 
                id="subject" 
                v-model="form.subject"
                class="w-full px-4 py-3 bg-fennec-gray border border-fennec-light-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fennec-orange/50 text-white" 
                required
              >
                <option value="">Selecciona una opción</option>
                <option 
                  v-for="option in subjects" 
                  :key="option.value" 
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
              <textarea 
                id="message" 
                v-model="form.message"
                rows="5" 
                class="w-full px-4 py-3 bg-fennec-gray border border-fennec-light-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fennec-orange/50 text-white" 
                required
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full px-6 py-3 bg-gradient-to-r from-fennec-orange to-fennec-gold text-white font-medium rounded-md hover:shadow-lg hover:shadow-fennec-orange/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting && !showSuccess">Enviar mensaje</span>
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <i class="fas fa-spinner fa-spin mr-2"></i> Enviando...
                </span>
                <span v-if="!isSubmitting && showSuccess" class="flex items-center justify-center">
                  <i class="fas fa-check mr-2"></i> ¡Mensaje enviado!
                </span>
              </button>
            </div>
          </form>
        </div>
        
        <!-- Información de contacto -->
        <div>
          <!-- Info de contacto -->
          <div class="bg-fennec-black rounded-lg p-8 border border-fennec-light-gray/20 mb-8">
            <h3 class="text-2xl font-display font-semibold mb-6">Información de contacto</h3>
            
            <div class="space-y-6">
              <div v-for="item in contactInfo" 
                   :key="item.label" 
                   class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-fennec-orange/20 flex items-center justify-center text-fennec-orange">
                  <i :class="['fas', item.icon]"></i>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-400">{{ item.label }}</p>
                  <a v-if="item.link" 
                     :href="item.link" 
                     class="text-white hover:text-fennec-orange transition-colors">
                    {{ item.value }}
                  </a>
                  <p v-else class="text-white">{{ item.value }}</p>
                </div>
              </div>
            </div>
            
            <!-- Redes sociales -->
            <div class="mt-8">
              <h4 class="text-lg font-semibold mb-4">Síguenos</h4>
              <div class="flex space-x-4">
                <a v-for="social in socialLinks"
                   :key="social.icon" 
                   :href="social.url" 
                   class="h-10 w-10 rounded-full bg-fennec-gray flex items-center justify-center text-white hover:bg-fennec-orange transition-colors">
                  <i :class="['fab', social.icon]"></i>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Horario -->
          <div class="bg-fennec-black rounded-lg p-8 border border-fennec-light-gray/20">
            <h3 class="text-2xl font-display font-semibold mb-6">Horario de atención</h3>
            
            <div class="space-y-3">
              <div v-for="(time, index) in schedule" 
                   :key="index" 
                   class="flex justify-between">
                <span class="text-gray-400">{{ time.days }}</span>
                <span class="text-white">{{ time.hours }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animación para el spinner */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.fa-spin {
  animation: spin 1s linear infinite;
}

/* Transiciones suaves */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Focus ring personalizado */
input:focus, textarea:focus, select:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 140, 0, 0.2);
}
</style>
