<script setup lang="ts">
import NavBar from './components/layout/NavBar.vue'
import Footer from './components/layout/Footer.vue'
import HeroSection from './components/home/HeroSection.vue'
import AboutSection from './components/home/AboutSection.vue'
import ServicesSection from './components/home/ServicesSection.vue'
import ProjectsSection from './components/home/ProjectsSection.vue'
import BlogSection from './components/home/BlogSection.vue'
import ContactSection from './components/home/ContactSection.vue'
</script>

<template>
  <div class="min-h-screen bg-fennec-black text-gray-200">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #121212;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1E1E1E;
}

::-webkit-scrollbar-thumb {
  background: #3D3D3D;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #FF8C00;
}
</style>
