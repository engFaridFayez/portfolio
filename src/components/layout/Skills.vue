<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue';

const skills = [
  { title: 'Django', percentage: 98 },
  { title: 'Django REST Framework', percentage: 92 },
  { title: 'Vue.js', percentage: 88 },
  { title: 'HTML, CSS, JavaScript', percentage: 92 },
  { title: 'PostgreSQL', percentage: 86 },
  { title: 'Git & GitHub', percentage: 60 },
  { title: 'Deployment & Hosting', percentage: 55 },
  { title: 'RESTful APIs', percentage: 85 },
];
</script>

<template>
  <section id="skills" class="section skills-section" aria-labelledby="skills-title">
    <div class="container skills-layout">
      <div class="skills-intro">
        <SectionHeader
          id="skills-title"
          number="03"
          eyebrow="The toolkit"
          title="Built on a solid foundation."
          description="The technologies I work with to turn complex requirements into clear, maintainable applications."
        />
        <p class="skills-note">Backend precision. Frontend clarity.</p>
      </div>
      <ul class="skills-list" aria-label="Technical skills and proficiency">
        <li v-for="skill in skills" :key="skill.title" class="skill-item">
          <div class="skill-label">
            <h3>{{ skill.title }}</h3>
            <span class="skill-value">{{ skill.percentage }}<span>%</span></span>
          </div>
          <div
            class="skill-track"
            role="meter"
            :aria-label="skill.title"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-valuenow="skill.percentage"
          >
            <span :style="{ width: `${skill.percentage}%` }"></span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.skills-section { background: var(--surface-muted); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.skills-layout { display: grid; grid-template-columns: .9fr 1.5fr; gap: clamp(40px, 7vw, 100px); align-items: start; }
.skills-intro :deep(.section-header) { display: block; }
.skills-note { padding-top: 28px; margin: 24px 0 0; border-top: 1px solid var(--line); color: var(--accent); font-family: var(--font-serif); font-size: 22px; font-style: italic; line-height: 1.5; }
.skills-list { list-style: none; padding: 10px 0 0; margin: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 37px 36px; }
.skill-item { min-width: 0; }
.skill-label { min-height: 46px; display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 13px; }
.skill-label h3 { margin: 0; color: var(--text); font-size: 13px; font-weight: 600; line-height: 1.65; }
.skill-value { color: var(--text); font-family: var(--font-mono); font-size: 15px; line-height: 1.5; white-space: nowrap; }
.skill-value span { color: var(--muted); font-size: 10px; margin-left: 2px; }
.skill-track { height: 3px; background: var(--line); width: 100%; }
.skill-track > span { display: block; height: 100%; background: var(--accent); }
@media (max-width: 1000px) { .skills-layout { grid-template-columns: 1fr; gap: 40px; } .skills-intro { max-width: 600px; } .skills-note { display: none; } }
@media (max-width: 600px) { .skills-list { grid-template-columns: 1fr; gap: 26px; padding-top: 0; } .skill-label { min-height: 0; margin-bottom: 12px; } .skill-label h3 { font-size: 14px; } }
</style>
