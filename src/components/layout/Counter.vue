<script setup>
// Original values retained. This optional component is not mounted in App.vue.
const numbers = [
  { id: 1, number: 12, title: 'Created Projects' },
  { id: 2, number: 200, title: 'Projects' },
  { id: 3, number: 120, title: 'Happy Clients' },
  { id: 4, number: 3, title: 'Years' },
];
</script>

<template>
  <div class="counter-band">
    <ul class="container counter-list">
      <li v-for="item in numbers" :key="item.id"><span class="counter-value">{{ item.number }}<span>+</span></span><span class="counter-label">{{ item.title }}</span></li>
    </ul>
  </div>
</template>

<style scoped>
.counter-band { background: var(--surface-muted); border-block: 1px solid var(--line); padding: 32px 0; }
.counter-list { list-style: none; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); padding-block: 0; }
.counter-list li { display: flex; flex-direction: column; gap: 10px; align-items: center; padding: 16px 20px; border-right: 1px solid var(--line); }
.counter-list li:last-child { border: 0; }
.counter-value { color: var(--text); font-size: 40px; font-weight: 550; letter-spacing: -.06em; }
.counter-value > span { color: var(--accent); font-size: 24px; margin-left: 3px; }
.counter-label { color: var(--text-secondary); font-size: 11px; }
@media (max-width: 700px) { .counter-list { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px 0; } .counter-list li:nth-child(even) { border: 0; } }
@media (max-width: 400px) { .counter-value { font-size: 32px; } .counter-list li { padding-inline: 10px; } }
</style>
