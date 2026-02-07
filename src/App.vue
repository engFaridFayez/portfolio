<script setup>
import { defineAsyncComponent } from 'vue';

const Navbar = defineAsyncComponent(()=>import('@/components/layout/Navbar.vue'))
const Hero = defineAsyncComponent(()=>import('@/components/layout/HeroSection.vue'))
const Counter = defineAsyncComponent(()=>import('@/components/layout/Counter.vue'))
</script>

<template>
  <div class="bg-[#D4EBF8] dark:bg-[#091023] min-h-screen">
    <Navbar />
    <Hero />
    <Counter />
  </div>
  
</template>

