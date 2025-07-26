<script setup lang="ts">
interface Service {
  icon: string
  title: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    icon: 'fa-code',
    title: 'Desarrollo de Software a Medida',
    description: 'Creamos soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de su negocio, garantizando máxima eficiencia y escalabilidad.',
    features: [
      'Aplicaciones web y móviles empresariales',
      'Sistemas de gestión internos',
      'Plataformas e-commerce avanzadas'
    ]
  },
  {
    icon: 'fa-network-wired',
    title: 'Integración de Sistemas',
    description: 'Conectamos sus aplicaciones y plataformas existentes para crear un ecosistema digital coherente que optimiza el flujo de información y procesos.',
    features: [
      'Desarrollo de APIs y microservicios',
      'Integración con sistemas ERP y CRM',
      'Soluciones de interoperabilidad'
    ]
  },
  {
    icon: 'fa-robot',
    title: 'Automatización de Procesos',
    description: 'Implementamos soluciones que automatizan tareas repetitivas, reducen errores y liberan el potencial de su equipo para enfocarse en actividades de mayor valor.',
    features: [
      'Flujos de trabajo automatizados',
      'RPA (Robotic Process Automation)',
      'Procesamiento inteligente de documentos'
    ]
  },
  {
    icon: 'fa-lightbulb',
    title: 'Consultoría Tecnológica',
    description: 'Asesoramos en la definición de estrategias digitales y selección de tecnologías que mejor se adapten a sus objetivos de negocio y desafíos específicos.',
    features: [
      'Auditoría y optimización de sistemas',
      'Planificación de arquitectura tecnológica',
      'Estrategias de transformación digital'
    ]
  },
  {
    icon: 'fa-cloud',
    title: 'Cloud & DevOps',
    description: 'Diseñamos e implementamos infraestructuras cloud robustas y procesos DevOps que garantizan alta disponibilidad, seguridad y agilidad en el desarrollo.',
    features: [
      'Migración a la nube',
      'Implementación de CI/CD',
      'Arquitecturas serverless y contenedores'
    ]
  },
  {
    icon: 'fa-tools',
    title: 'Mantenimiento y Soporte',
    description: 'Ofrecemos servicios continuos de mantenimiento, monitoreo y soporte para garantizar que sus sistemas funcionen de manera óptima y evolucionen con su negocio.',
    features: [
      'Soporte técnico especializado',
      'Monitoreo proactivo',
      'Actualizaciones y mejoras continuas'
    ]
  }
]
</script>

<template>
  <section id="servicios" class="py-20 bg-fennec-black">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">Nuestros Servicios</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-fennec-orange to-fennec-gold mx-auto mb-6"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Ofrecemos soluciones tecnológicas integrales diseñadas para impulsar la transformación digital de su empresa y optimizar sus procesos de negocio.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" 
             :key="service.title"
             class="fennec-card bg-fennec-dark rounded-lg p-8 border border-fennec-light-gray/20 h-full">
          <div class="service-icon text-4xl text-fennec-sand mb-6">
            <i :class="['fas', service.icon]"></i>
          </div>
          <h3 class="text-xl font-display font-semibold mb-4">{{ service.title }}</h3>
          <p class="text-gray-400 mb-6">{{ service.description }}</p>
          <ul class="text-gray-400 space-y-2 mb-6">
            <li v-for="feature in service.features" 
                :key="feature"
                class="flex items-start">
              <i class="fas fa-check text-fennec-orange mt-1 mr-2"></i>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-16 text-center">
        <a href="#contacto" 
           class="inline-block px-8 py-3 bg-gradient-to-r from-fennec-orange to-fennec-gold text-white font-medium rounded-md hover:shadow-lg hover:shadow-fennec-orange/20 transition-all">
          Solicitar una consulta
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

.service-icon {
  transition: all 0.3s ease;
}

.fennec-card:hover .service-icon {
  color: #FF8C00;
}
</style>
