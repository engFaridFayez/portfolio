<script setup>
import Navbar from '@/components/layout/Navbar.vue';
import Hero from '@/components/layout/HeroSection.vue';
import Services from '@/components/layout/Services.vue';
import Skills from '@/components/layout/Skills.vue';
import Whyme from '@/components/layout/Whyme.vue';
import Projects from '@/components/layout/Projects.vue';
import Contact from '@/components/layout/Contact.vue';
import Footer from '@/components/layout/Footer.vue';
import BackToTop from '@/components/layout/BackToTop.vue';
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <Navbar />
  <main id="main-content">
    <Hero />
    <Projects />
    <Services />
    <Skills />
    <Whyme />
    <Contact />
  </main>
  <Footer />
  <BackToTop />
</template>
