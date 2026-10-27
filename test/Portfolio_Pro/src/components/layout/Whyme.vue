<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue';
import Experience from '@/components/layout/Experience.vue';
import Education from '@/components/layout/Education.vue';
</script>

<template>
  <section id="whyme" class="section background-section" aria-labelledby="background-title">
    <div class="container">
      <SectionHeader
        id="background-title"
        number="04"
        eyebrow="Behind the work"
        title="Experience with purpose."
        description="A background in computer science, applied to the everyday challenges of building useful software."
      />
      <div class="background-grid">
        <Experience />
        <Education />
      </div>
    </div>
  </section>
</template>

<style scoped>
.background-grid { display: grid; grid-template-columns: 1.65fr 1fr; gap: clamp(40px, 7.5vw, 110px); margin-top: 52px; align-items: start; }
@media (max-width: 860px) { .background-grid { grid-template-columns: 1fr; gap: 48px; } }
@media (max-width: 600px) { .background-grid { margin-top: 36px; } }
</style>
