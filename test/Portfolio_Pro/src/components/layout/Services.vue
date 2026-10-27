<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue';
import Icon from '@/components/UI/Icon.vue';

const services = [
  {
    id: 1,
    icon: 'code',
    name: 'Full-Stack Web Development',
    description: 'Building complete web applications from scratch, handling both backend logic and frontend interfaces using modern scalable technologies.',
  },
  {
    id: 2,
    icon: 'server',
    name: 'Backend Development & APIs',
    description: 'Developing secure, well-structured backend systems and RESTful APIs that are easy to maintain and integrate with different platforms.',
  },
  {
    id: 3,
    icon: 'layers',
    name: 'Frontend Development',
    description: 'Creating responsive, clean, and interactive user interfaces that focus on usability, performance, and modern design practices.',
  },
  {
    id: 4,
    icon: 'link',
    name: 'API Integration',
    description: 'Integrating third-party services and external APIs to extend application functionality and ensure smooth data communication.',
  },
  {
    id: 5,
    icon: 'database',
    name: 'Database Design & Management',
    description: 'Designing efficient and reliable database structures with a strong focus on data integrity, performance, and scalability.',
  },
  {
    id: 6,
    icon: 'gauge',
    name: 'Web Application Optimization',
    description: 'Optimizing web applications by improving performance, code quality, and overall user experience across different devices.',
  },
];
</script>

<template>
  <section id="services" class="section services-section" aria-labelledby="services-title">
    <div class="container">
      <SectionHeader
        id="services-title"
        number="02"
        eyebrow="What I do"
        title="From idea to execution."
        description="Thoughtful development across every layer, from the first interface to the systems behind it."
      />
      <div class="services-grid">
        <article v-for="service in services" :key="service.id" class="service-item">
          <div class="service-topline">
            <span class="service-icon"><Icon :name="service.icon" aria-hidden="true" /></span>
            <span class="service-index" aria-hidden="true">{{ String(service.id).padStart(2, '0') }}</span>
          </div>
          <h3>{{ service.name }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section { border-top: 1px solid var(--line); }
.services-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); margin-top: 48px; }
.service-item { padding: 32px 30px 36px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); transition: background-color 180ms ease; }
.service-item:hover { background: var(--surface); }
.service-topline { display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; }
.service-icon { color: var(--accent); display: inline-flex; }
.service-icon :deep(svg) { width: 28px; height: 28px; stroke-width: 1.5; }
.service-index { color: var(--muted); font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em; }
.service-item h3 { max-width: 24ch; margin: 0 0 14px; color: var(--text); font-size: 18px; line-height: 1.4; letter-spacing: -.035em; font-weight: 650; }
.service-item p { max-width: 37ch; margin: 0; color: var(--text-secondary); font-size: 13px; line-height: 1.85; }
@media (max-width: 980px) { .services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 600px) {
  .services-grid { grid-template-columns: 1fr; margin-top: 32px; }
  .service-item { padding: 26px; }
  .service-topline { margin-bottom: 24px; }
  .service-item h3 { max-width: none; }
  .service-item p { max-width: none; }
}
@media (prefers-reduced-motion: reduce) { .service-item { transition: none; } }
</style>
