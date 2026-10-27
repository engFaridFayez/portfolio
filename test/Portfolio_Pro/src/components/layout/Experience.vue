<script setup>
import Icon from '@/components/UI/Icon.vue';

const experience = [
  {
    title: 'Full-stack Developer',
    company: 'Akhnaton For Construction & Real-Estate Development',
    location: 'Heliopolis, Egypt',
    duration: '02/2023 – Present',
    tasks: [
      'Developed and maintained RESTful APIs using Django REST Framework',
      'Built and integrated frontend interfaces using Vue.js and MDB components',
      'Designed and optimized PostgreSQL databases to ensure performance and data integrity',
    ],
    tags: ['Django REST framework', 'PostgreSQL', 'Vuejs', 'MDB(Material Design for Bootstrap)'],
  },
  {
    title: 'Backend Developer',
    company: 'Freelance Project',
    location: 'Remote',
    duration: '10/2025 – Present',
    tasks: [
      'Developed a full-stack web application for community and content management',
      'Built RESTful APIs using Django REST Framework',
      'Designed responsive UI using Vue.js',
    ],
    tags: ['Django REST framework', 'PostgreSQL', 'Vuejs', 'Tailwind CSS'],
  },
  {
    title: 'Backend Developer',
    company: 'CIA Micro Systems',
    location: 'Cairo, Egypt',
    duration: '05/2022 – 10/2022',
    tasks: [
      'Developed backend modules using .NET Framework following MVC architecture',
      'Implemented server-side business logic and database interactions',
      'Collaborated with frontend developers to integrate APIs and improve application performance',
    ],
    tags: ['.Net Framework', 'Bootstrap', 'JavaScript', 'MVC'],
  },
];
</script>

<template>
  <div class="experience" aria-labelledby="experience-heading">
    <h3 id="experience-heading" class="column-heading"><Icon name="briefcase" aria-hidden="true" /> Experience</h3>
    <ol class="experience-list">
      <li v-for="(item, index) in experience" :key="item.company" class="experience-item">
        <span class="timeline-dot" :class="{ 'is-current': index === 0 }" aria-hidden="true"></span>
        <article>
          <div class="role-topline">
            <p class="role-date">{{ item.duration }}</p>
            <span class="role-location"><Icon name="map-pin" aria-hidden="true" /> {{ item.location }}</span>
          </div>
          <h4>{{ item.title }}</h4>
          <p class="company-name">{{ item.company }}</p>
          <ul class="role-tasks">
            <li v-for="task in item.tasks" :key="task">{{ task }}</li>
          </ul>
          <ul class="role-tags" aria-label="Technologies used">
            <li v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</li>
          </ul>
        </article>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.column-heading { display: flex; align-items: center; gap: 12px; margin: 0 0 38px; color: var(--text); font-size: 13px; font-weight: 600; letter-spacing: -.015em; }
.column-heading :deep(svg) { width: 18px; height: 18px; color: var(--accent); }
.experience-list { margin: 0; padding: 0; list-style: none; }
.experience-item { position: relative; padding: 0 0 42px 29px; border-left: 1px solid var(--line); margin-left: 5px; }
.experience-item:last-child { padding-bottom: 0; border-left-color: transparent; }
.timeline-dot { position: absolute; width: 9px; height: 9px; left: -5px; top: 5px; border-radius: 50%; border: 1px solid var(--accent); background: var(--bg); }
.timeline-dot.is-current { background: var(--accent); }
.role-topline { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 14px; }
.role-date { margin: 0; color: var(--accent); font-family: var(--font-mono); font-size: 10px; letter-spacing: .02em; }
.role-location { color: var(--muted); display: inline-flex; align-items: center; gap: 5px; font-size: 11px; }
.role-location :deep(svg) { width: 12px; height: 12px; }
.experience-item h4 { margin: 0 0 6px; font-size: clamp(20px, 2.1vw, 25px); font-weight: 600; line-height: 1.35; letter-spacing: -.045em; color: var(--text); }
.company-name { margin: 0; color: var(--text-secondary); font-size: 13px; line-height: 1.7; font-weight: 500; }
.role-tasks { margin: 21px 0 20px; padding: 0 0 0 15px; color: var(--text-secondary); font-size: 12px; line-height: 1.9; }
.role-tasks li { padding-left: 3px; margin-bottom: 5px; }
.role-tasks li::marker { color: var(--accent); font-size: 8px; }
.role-tags { display: flex; flex-wrap: wrap; gap: 6px; padding: 0; margin: 0; list-style: none; }
.role-tags .tag { font-size: 9px; line-height: 1.6; }
@media (max-width: 600px) {
  .column-heading { margin-bottom: 30px; }
  .experience-item { padding-left: 22px; padding-bottom: 36px; }
  .role-topline { gap: 9px; }
  .role-tasks { font-size: 13px; }
  .role-tags .tag { font-size: 10px; }
}
</style>
