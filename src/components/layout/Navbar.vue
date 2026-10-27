<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue';
import Icon from '@/components/UI/Icon.vue';
import logo from '@/assets/images/darkLogo.jpeg';

const menu = [
  { name: 'Work', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#whyme' },
  { name: 'Contact', href: '#contact' },
];
const isMenuOpen = ref(false);
const menuButton = ref(null);
const isDarkMode = ref(typeof document !== 'undefined' && document.documentElement.classList.contains('dark'));
let desktopQuery;

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) themeMeta.content = isDarkMode.value ? '#191D1B' : '#F6F3ED';
  try { localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light'); } catch { /* The theme still works when browser storage is unavailable. */ }
}

async function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    await nextTick();
    document.querySelector('#mobile-navigation a')?.focus();
  }
}

function closeMenu() { isMenuOpen.value = false; }
function handleEscape(event) {
  if (event.key === 'Escape' && isMenuOpen.value) {
    event.preventDefault();
    closeMenu();
    menuButton.value?.focus();
  }
}
function handleDesktop(event) { if (event.matches) closeMenu(); }
function goToTop() {
  closeMenu();
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
  desktopQuery = window.matchMedia('(min-width: 901px)');
  desktopQuery.addEventListener('change', handleDesktop);
});
onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
  desktopQuery?.removeEventListener('change', handleDesktop);
});
</script>

<template>
  <header class="site-header">
    <div class="container nav-inner">
      <a href="#" class="brand" aria-label="Farid Fayez, back to top" @click.prevent="goToTop">
        <span class="brand-mark"><img :src="logo" alt="Mashro3ak" width="62" height="62" /></span>
        <span class="brand-copy"><span class="brand-name">Farid Fayez<span class="brand-period">.</span></span><span class="brand-role">Full-stack developer</span></span>
      </a>
      <div class="nav-right">
        <nav class="desktop-navigation" aria-label="Main navigation">
          <ul>
            <li v-for="item in menu" :key="item.href"><a :href="item.href">{{ item.name }}</a></li>
          </ul>
        </nav>
        <span class="nav-divider" aria-hidden="true"></span>
        <button
          class="icon-button theme-toggle"
          type="button"
          :aria-label="isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'"
          :title="isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'"
          :aria-pressed="isDarkMode"
          @click="toggleTheme"
        ><Icon :name="isDarkMode ? 'sun' : 'moon'" aria-hidden="true" /></button>
        <button
          ref="menuButton"
          class="icon-button menu-toggle"
          type="button"
          :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          aria-controls="mobile-navigation"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        ><Icon :name="isMenuOpen ? 'close' : 'menu'" aria-hidden="true" /></button>
      </div>
    </div>
    <nav v-if="isMenuOpen" id="mobile-navigation" class="mobile-navigation" aria-label="Mobile navigation">
      <div class="container">
        <ul>
          <li v-for="(item, index) in menu" :key="item.href">
            <a :href="item.href" @click="closeMenu"><span class="menu-number" aria-hidden="true">0{{ index + 1 }}</span><span>{{ item.name }}</span><Icon name="arrow-up-right" aria-hidden="true" /></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header { position: sticky; top: 0; z-index: 100; background: var(--nav-bg); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border-bottom: 1px solid var(--line); }
.nav-inner { min-height: 96px; display: flex; align-items: center; justify-content: space-between; gap: 28px; }
.brand { display: inline-flex; align-items: center; gap: 14px; text-decoration: none; color: var(--text); flex: 0 0 auto; }
.brand-mark { display: block; width: 62px; height: 62px; background: var(--logo-bg, #070707); border-radius: 5px; overflow: hidden; }
.brand-mark img { display: block; width: 100%; height: 100%; object-fit: contain; }
.brand-copy { display: flex; flex-direction: column; gap: 5px; }
.brand-name { font-size: 15px; font-weight: 700; letter-spacing: -.055em; line-height: 1.1; }
.brand-period { color: var(--accent); }
.brand-role { font-family: var(--font-mono); color: var(--muted); text-transform: uppercase; font-size: 7px; letter-spacing: .115em; line-height: 1.5; }
.nav-right { display: flex; align-items: center; gap: 26px; }
.desktop-navigation ul { list-style: none; display: flex; align-items: center; gap: 29px; padding: 0; margin: 0; }
.desktop-navigation a { display: block; padding: 14px 0; color: var(--text-secondary); font-size: 11px; font-weight: 550; text-decoration: none; transition: color 150ms ease; }
.desktop-navigation a:hover { color: var(--accent); }
.nav-divider { height: 20px; width: 1px; background: var(--line); }
.theme-toggle :deep(svg), .menu-toggle :deep(svg) { width: 17px; height: 17px; }
.menu-toggle { display: none; }
.mobile-navigation { padding: 10px 0 25px; border-top: 1px solid var(--line); background: var(--bg); max-height: calc(100svh - 80px); overflow-y: auto; }
.mobile-navigation ul { margin: 0; padding: 0; list-style: none; }
.mobile-navigation a { display: flex; gap: 18px; align-items: center; padding: 19px 0; border-bottom: 1px solid var(--line); font-size: 20px; letter-spacing: -.025em; color: var(--text); text-decoration: none; }
.mobile-navigation a:hover { color: var(--accent); }
.menu-number { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0; color: var(--accent); }
.mobile-navigation a :deep(svg) { width: 18px; height: 18px; margin-left: auto; color: var(--accent); }
@media (max-width: 900px) {
  .nav-inner { min-height: 84px; }
  .desktop-navigation, .nav-divider { display: none; }
  .menu-toggle { display: inline-flex; }
  .nav-right { gap: 9px; }
  .brand-mark { width: 58px; height: 58px; }
}
@media (max-width: 420px) {
  .brand { gap: 10px; }
  .brand-mark { width: 48px; height: 48px; }
  .brand-name { font-size: 14px; }
  .brand-role { font-size: 6px; letter-spacing: .06em; }
  .nav-inner { gap: 14px; min-height: 76px; }
  .nav-right { gap: 4px; }
}
@media (min-width: 901px) { .mobile-navigation { display: none; } }
</style>
