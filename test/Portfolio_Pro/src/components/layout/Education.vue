<script setup>
import Icon from '@/components/UI/Icon.vue';

const education = {
  title: 'Computer science and artificial intelligence',
  qualification: 'Bachelor degree',
  institution: 'Helwan University',
  duration: '06/2019 – 06/2023',
};
</script>

<template>
  <div class="education" aria-labelledby="education-heading">
    <h3 id="education-heading" class="column-heading"><Icon name="book" aria-hidden="true" /> Education</h3>
    <article class="education-panel">
      <span class="education-symbol" aria-hidden="true"><Icon name="book" /></span>
      <p class="education-date">{{ education.duration }}</p>
      <h4>{{ education.title }}</h4>
      <p class="education-qualification">{{ education.qualification }}</p>
      <p class="education-institution">{{ education.institution }}</p>
    </article>
  </div>
</template>

<style scoped>
.column-heading { display: flex; align-items: center; gap: 12px; margin: 0 0 38px; color: var(--text); font-size: 13px; font-weight: 600; letter-spacing: -.015em; }
.column-heading :deep(svg) { width: 18px; height: 18px; color: var(--accent); }
.education-panel { border: 1px solid var(--line); background: var(--surface); padding: 32px; }
.education-symbol { display: inline-flex; padding: 14px; margin-bottom: 36px; color: var(--accent); background: var(--accent-soft); border-radius: 50%; }
.education-symbol :deep(svg) { width: 25px; height: 25px; stroke-width: 1.4; }
.education-date { color: var(--accent); font-family: var(--font-mono); font-size: 10px; margin: 0 0 15px; letter-spacing: .02em; }
.education-panel h4 { color: var(--text); font-size: 23px; line-height: 1.4; font-weight: 550; letter-spacing: -.045em; margin: 0 0 18px; }
.education-qualification { color: var(--text-secondary); font-size: 12px; margin: 0 0 4px; }
.education-institution { color: var(--text); font-size: 13px; line-height: 1.7; font-weight: 550; margin: 0; }
@media (max-width: 600px) { .column-heading { margin-bottom: 26px; } .education-panel { padding: 26px; } .education-symbol { margin-bottom: 24px; } }
</style>
