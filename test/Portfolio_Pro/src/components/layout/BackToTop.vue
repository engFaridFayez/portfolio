<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Icon from '@/components/UI/Icon.vue';

const isVisible = ref(false);
function handleScroll() { isVisible.value = window.scrollY > 700; }
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}
onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});
onUnmounted(() => { window.removeEventListener('scroll', handleScroll); });
</script>

<template>
  <button v-if="isVisible" class="back-to-top" type="button" aria-label="Back to top" title="Back to top" @click="scrollToTop"><Icon name="arrow-up" aria-hidden="true" /></button>
</template>

<style scoped>
.back-to-top { position: fixed; right: 24px; bottom: 24px; z-index: 40; width: 44px; height: 44px; border: 1px solid var(--line); border-radius: 50%; display: flex; justify-content: center; align-items: center; background: var(--surface); color: var(--text); cursor: pointer; transition: background-color 160ms ease, color 160ms ease, transform 160ms ease; }
.back-to-top:hover { background: var(--accent); color: var(--on-accent); border-color: var(--accent); transform: translateY(-3px); }
.back-to-top :deep(svg) { width: 18px; height: 18px; }
@media (max-width: 600px) { .back-to-top { right: 16px; bottom: 16px; } }
@media (prefers-reduced-motion: reduce) { .back-to-top { transition: none; } .back-to-top:hover { transform: none; } }
</style>
