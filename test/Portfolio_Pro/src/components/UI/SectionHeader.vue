<script setup>
defineProps({
  title: { type: String, required: true },
  eyebrow: { type: String, default: '' },
  description: { type: String, default: '' },
  number: { type: String, default: '' },
  align: { type: String, default: 'left' },
});
</script>
<template>
  <header :class="['section-header', { 'is-centered': align === 'center' }]">
    <div class="heading-main">
      <p v-if="eyebrow || number" class="eyebrow"><span v-if="number" class="heading-number">{{ number }}</span>{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
    </div>
    <p v-if="description" class="section-description">{{ description }}</p>
    <slot />
  </header>
</template>
<style scoped>
.section-header { display: flex; justify-content: space-between; align-items: end; gap: 42px; margin-bottom: 42px; }
.eyebrow { margin-bottom: 16px; }
.heading-number { padding-right: 12px; border-right: 1px solid var(--line); }
h2 { font-size: clamp(30px, 3.6vw, 47px); letter-spacing: -.05em; font-weight: 550; }
.section-description { max-width: 340px; font-size: 13px; line-height: 1.85; color: var(--text-secondary); }
.is-centered { align-items: center; text-align: center; flex-direction: column; gap: 20px; }
.is-centered .eyebrow { justify-content: center; }
@media (max-width: 700px) { .section-header { display: block; margin-bottom: 32px; } .section-description { margin-top: 18px; max-width: 470px; } h2 { font-size: 35px; } }
</style>
