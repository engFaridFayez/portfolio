<script setup>
import Icon from '@/components/UI/Icon.vue';
import logo from '@/assets/images/darkLogo.jpeg';

const year = new Date().getFullYear();
function goToTop() {
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <a href="#" class="footer-brand" aria-label="Farid Fayez, back to top" @click.prevent="goToTop">
        <span class="footer-mark"><img :src="logo" alt="Mashro3ak" width="48" height="48" loading="lazy" /></span>
        <span>Farid Fayez<span class="footer-period">.</span></span>
      </a>
      <p class="footer-rights">© {{ year }} Farid Fayez. All rights reserved.</p>
      <a href="#" class="footer-top" @click.prevent="goToTop">Back to top <Icon name="arrow-up-right" aria-hidden="true" /></a>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { background: var(--bg); border-top: 1px solid var(--line); padding: 30px 0; }
.footer-inner { display: flex; justify-content: space-between; align-items: center; gap: 24px; }
.footer-brand { display: inline-flex; align-items: center; gap: 13px; color: var(--text); text-decoration: none; font-size: 14px; font-weight: 650; letter-spacing: -.045em; }
.footer-mark { width: 48px; height: 48px; border-radius: 4px; background: var(--logo-bg, #070707); overflow: hidden; }
.footer-mark img { width: 100%; height: 100%; display: block; object-fit: contain; }
.footer-period { color: var(--accent); }
.footer-rights { margin: 0; font-size: 10px; color: var(--muted); line-height: 1.8; }
.footer-top { display: inline-flex; align-items: center; gap: 10px; color: var(--text-secondary); font-size: 11px; text-decoration: none; }
.footer-top:hover { color: var(--accent); }
.footer-top :deep(svg) { width: 15px; height: 15px; }
@media (max-width: 700px) { .footer-inner { flex-wrap: wrap; gap: 22px; } .footer-rights { width: 100%; order: 3; padding-top: 20px; border-top: 1px solid var(--line); } }
@media (max-width: 400px) { .footer-top { font-size: 10px; gap: 6px; } }
</style>
