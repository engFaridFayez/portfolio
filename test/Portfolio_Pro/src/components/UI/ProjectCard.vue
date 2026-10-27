<script setup>
import Icon from '@/components/UI/Icon.vue';

defineProps({
  title: { type: String, required: true, default: 'Project Title' },
  description: { type: String, required: true, default: 'Brief description of the project' },
  image: { type: String, required: true, default: '/' },
  tags: { type: Array, default: () => ['Vue.js', 'Tailwind css'] },
  liveLink: { type: String, default: null },
  codeLink: { type: String, default: null },
});
</script>

<template>
  <article class="project-card">
    <figure class="project-card-media"><img :src="image" :alt="title" loading="lazy" /></figure>
    <div class="project-card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <ul class="project-card-tags" aria-label="Technologies used"><li v-for="tag in tags" :key="tag" class="tag">{{ tag }}</li></ul>
      <div v-if="(liveLink && liveLink !== '/') || (codeLink && codeLink !== '/')" class="project-card-links">
        <a v-if="liveLink && liveLink !== '/'" :href="liveLink" target="_blank" rel="noopener noreferrer">Live demo <Icon name="arrow-up-right" aria-hidden="true" /></a>
        <a v-if="codeLink && codeLink !== '/'" :href="codeLink" target="_blank" rel="noopener noreferrer">View code <Icon name="arrow-up-right" aria-hidden="true" /></a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card { overflow: hidden; background: var(--surface); border: 1px solid var(--line); }
.project-card-media { margin: 0; aspect-ratio: 16 / 10; background: var(--surface-muted); padding: 20px; border-bottom: 1px solid var(--line); }
.project-card-media img { display: block; width: 100%; height: 100%; object-fit: contain; }
.project-card-content { padding: 25px; }
.project-card-content h3 { color: var(--text); font-size: 21px; line-height: 1.4; letter-spacing: -.04em; font-weight: 600; margin: 0 0 12px; }
.project-card-content > p { color: var(--text-secondary); font-size: 12px; line-height: 1.8; margin: 0 0 22px; }
.project-card-tags { list-style: none; display: flex; flex-wrap: wrap; gap: 6px; margin: 0; padding: 0; }
.project-card-tags .tag { font-size: 10px; }
.project-card-links { display: flex; flex-wrap: wrap; gap: 20px; border-top: 1px solid var(--line); padding-top: 20px; margin-top: 23px; }
.project-card-links a { color: var(--accent); display: inline-flex; align-items: center; gap: 7px; font-size: 11px; font-weight: 550; text-decoration: none; }
.project-card-links a:hover { text-decoration: underline; text-underline-offset: 4px; }
.project-card-links :deep(svg) { width: 14px; height: 14px; }
</style>
