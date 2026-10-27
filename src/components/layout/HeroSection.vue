<script setup>
import portrait from '@/assets/images/image.jpeg';
import portrait2 from '@/assets/images/image2.jpeg';
import Icon from '@/components/UI/Icon.vue';
import { portfolioConfig } from '@/config';
</script>

<template>
  <section id="home" class="hero" aria-labelledby="hero-title">
    <div class="container hero-main">
      <div class="hero-copy">
        <p class="eyebrow hero-eyebrow"><span class="eyebrow-line"></span>Full-stack developer</p>
        <h1 id="hero-title">Hi, I’m<br /><em>Farid.</em></h1>
        <p class="hero-statement">Thoughtful code.<br />Meaningful experiences.</p>
        <p class="hero-description">
          A full-stack developer specializing in <strong>Django</strong> and
          <strong>Vue.js</strong>, focused on building scalable, high-performance
          web applications with clean, maintainable code.
        </p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">Explore my work<Icon name="arrow-up-right" :size="18" /></a>
          <a v-if="portfolioConfig.resumeUrl" :href="portfolioConfig.resumeUrl" class="btn btn-secondary" download>Download résumé<Icon name="download" :size="17" /></a>
          <a v-else href="#contact" class="hero-contact">Let’s talk<Icon name="arrow-right" :size="17" /></a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="portrait-index" aria-hidden="true"><span>F / F</span><span>DEVELOPER PORTFOLIO</span></div>
        <figure class="portrait-frame">
          <img :src="portrait" width="896" height="1000" alt="Farid Fayez" fetchpriority="high" />
          <figcaption>
            <span>Farid Fayez</span>
            <span>Developer &amp; problem solver</span>
          </figcaption>
        </figure>
        <div class="portrait-note">
          <span class="note-icon"><Icon name="code" :size="23" /></span>
          <p>From the first idea<br /><strong>to the final detail.</strong></p>
          <span class="note-line" aria-hidden="true"></span>
        </div>
      </div>
    </div>

    <div class="container hero-bottom">
      <div class="stack-list" aria-label="Core technologies">
        <span class="stack-label">Core stack</span>
        <span>Django</span><i aria-hidden="true">/</i>
        <span>Vue.js</span><i aria-hidden="true">/</i>
        <span>PostgreSQL</span><i aria-hidden="true">/</i>
        <span>REST APIs</span>
      </div>
      <a href="#projects" class="scroll-link">Scroll to explore<Icon name="chevron-down" :size="14" /></a>
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; overflow: hidden; }
.hero-main { display: grid; grid-template-columns: 1.2fr 1fr; align-items: center; gap: clamp(60px, 8vw, 124px); padding-top: 70px; padding-bottom: 76px; }
.hero-copy { padding-top: 6px; }
.hero-eyebrow { margin-bottom: 28px; }
.eyebrow-line { width: 24px; height: 1px; background: var(--accent); }
h1 { font-size: clamp(74px, 7.6vw, 108px); font-weight: 500; letter-spacing: -.065em; line-height: .99; }
h1 em { font-family: var(--font-serif); font-size: 1.23em; letter-spacing: -.035em; font-weight: 400; color: var(--accent); line-height: 1.03; }
.hero-statement { margin-top: 25px; font-size: clamp(20px, 2.05vw, 27px); font-weight: 500; letter-spacing: -.035em; line-height: 1.4; }
.hero-description { color: var(--text-secondary); max-width: 440px; font-size: 13px; line-height: 1.95; margin-top: 18px; }
.hero-description strong { color: var(--text); font-weight: 650; }
.hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 28px; margin-top: 31px; }
.hero-contact { display: flex; align-items: center; gap: 15px; font-size: 12px; font-weight: 650; padding-block: 12px; }
.hero-contact:hover { color: var(--accent); }
.hero-visual { position: relative; padding-top: 32px; padding-bottom: 30px; }
.portrait-index { display: flex; justify-content: space-between; align-items: center; position: absolute; top: 0; left: 0; right: 0; font-family: var(--font-mono); font-size: 9px; letter-spacing: .14em; color: var(--muted); }
.portrait-index span:first-child { color: var(--accent); }
.portrait-frame { position: relative; border-radius: 7px; background: var(--surface-muted); border: 1px solid var(--line); overflow: hidden; }
.portrait-frame img { width: 100%; height: clamp(390px, 35vw, 468px); object-fit: cover; object-position: center 33%; }
.portrait-frame figcaption { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 16px 19px; background: var(--surface); }
.portrait-frame figcaption span:first-child { font-size: 12px; font-weight: 650; }
.portrait-frame figcaption span:last-child { color: var(--muted); font-family: var(--font-mono); font-size: 9px; }
.portrait-note { position: relative; display: flex; align-items: center; gap: 15px; margin-top: 21px; }
.note-icon { color: var(--accent); }
.portrait-note p { font-family: var(--font-mono); font-size: 10px; line-height: 1.75; color: var(--muted); }
.portrait-note strong { color: var(--text-secondary); font-weight: 400; }
.note-line { height: 1px; background: var(--line); flex: 1; margin-left: 14px; }
.hero-bottom { min-height: 81px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; gap: 25px; }
.stack-list { display: flex; align-items: center; flex-wrap: wrap; gap: 18px; color: var(--text-secondary); font-size: 11px; font-weight: 550; }
.stack-label { margin-right: 12px; color: var(--muted); font-family: var(--font-mono); text-transform: uppercase; font-size: 9px; font-weight: 400; letter-spacing: .1em; }
.stack-list i { color: var(--line); font-style: normal; }
.scroll-link { display: flex; align-items: center; gap: 12px; font-family: var(--font-mono); text-transform: uppercase; font-size: 9px; letter-spacing: .08em; color: var(--muted); white-space: nowrap; }
.scroll-link:hover { color: var(--accent); }
@media (min-width: 1500px) { .hero-main { padding-block: 90px; } }
@media (max-width: 1050px) { .hero-main { gap: 55px; } .portrait-frame figcaption { flex-direction: column; align-items: start; gap: 3px; } .hero-bottom { gap: 16px; } .stack-list { gap: 12px; } .stack-label { margin-right: 4px; } }
@media (max-width: 760px) {
  .hero-main { grid-template-columns: 1fr; gap: 38px; padding-top: 42px; padding-bottom: 42px; }
  h1 { font-size: clamp(76px, 13vw, 104px); }
  h1 br { display: none; }
  h1 em { margin-left: 6px; }
  .hero-statement { margin-top: 22px; font-size: 23px; }
  .hero-description { max-width: 540px; }
  .hero-visual { max-width: 480px; width: 100%; padding-bottom: 0; }
  .portrait-frame img { height: 400px; }
  .portrait-frame figcaption { flex-direction: row; align-items: center; }
  .hero-bottom { min-height: 100px; padding-block: 20px; }
  .scroll-link { display: none; }
  .stack-label { flex-basis: 100%; }
  .stack-list { gap: 8px 17px; }
}
@media (max-width: 420px) {
  h1 { font-size: 64px; }
  .hero-eyebrow { margin-bottom: 20px; }
  .hero-actions { gap: 22px; }
  .hero-actions .btn { padding-inline: 17px; }
  .portrait-frame img { height: 350px; }
  .portrait-frame figcaption { padding: 14px; }
  .portrait-frame figcaption span:last-child { font-size: 8px; }
  .stack-list { gap: 8px 10px; }
}
</style>
