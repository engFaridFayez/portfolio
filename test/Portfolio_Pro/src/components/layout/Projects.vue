<script setup>
import { onBeforeUnmount, onMounted, ref, shallowRef } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import Icon from "@/components/UI/Icon.vue";

import project1 from "@/assets/images/Project1.png";
import project5 from "@/assets/images/project5.png";
import project6 from "@/assets/images/project6.png";
import project7 from "@/assets/images/project7.png";

// Keep the original placeholder URLs in the data, but only show a live-site
// action when an actual external destination is available.
const projects = [
  {
    title: "Akhnaton Website",
    description:
      "Developed a full-stack internal system to manage company operations, integrating Django-based APIs with a Vue.js frontend to handle data management, user roles, and responsive dashboards for daily business workflows.",
    image: project1,
    tags: ["Django", "VueJs", "MDB"],
    website: "/",
  },
  {
    title: "Eripsaleen Choir Platform",
    description:
      "Full-featured website, event booking system, and administration dashboard for managing choir performances and reservations.",
    image: project7,
    tags: ["Django", "VueJs", "TailwindCss"],
    website: "https://eripsaleenchoir.com/",
  },
  {
    title: "Full Stack E-Commerce Platform",
    description:
      "Developed a full-stack E-Commerce web application using Django, Django REST Framework, and Vue.js with Vite. The platform provides a complete online shopping experience with secure authentication, product management, shopping cart functionality, and order processing.",
    image: project5,
    tags: ["HTML", "CSS", "Javascript"],
    website: "/",
  },
  {
    title: "Church School Management System",
    description:
      "A full-stack web application designed for managing a church school community digitally. The platform helps organize students, teachers, classes, attendance, educational materials, results, exams, and internal activities in one centralized system.",
    image: project6,
    tags: ["HTML", "CSS", "Javascript"],
    website: "/",
  },
];

const carousel = shallowRef(null);
const activeIndex = ref(0);
const reducedMotion = ref(false);
let motionQuery;

const updateMotionPreference = () => {
  reducedMotion.value = motionQuery?.matches ?? false;
};
const selectProject = (index) => carousel.value?.slideTo(index);
const syncActiveProject = (instance) => { activeIndex.value = instance.activeIndex; };
const isExternalProject = (website) => /^https?:\/\//.test(website);
const projectNumber = (index) => String(index + 1).padStart(2, "0");

onMounted(() => {
  motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  updateMotionPreference();
  motionQuery.addEventListener("change", updateMotionPreference);
});
onBeforeUnmount(() => motionQuery?.removeEventListener("change", updateMotionPreference));
</script>

<template>
  <section id="projects" class="section projects-section" aria-labelledby="projects-heading">
    <div class="container">
      <header class="projects-heading">
        <div>
          <p class="eyebrow"><span class="section-number">01</span> Selected work</p>
          <h2 id="projects-heading">Built with <em>intention.</em></h2>
        </div>
        <p class="projects-intro">
          A selection of digital products where thoughtful systems meet
          expressive, human-centred interfaces.
        </p>
      </header>

      <Swiper
        class="projects-carousel"
        :modules="[A11y, Keyboard]"
        :slides-per-view="1"
        :space-between="24"
        :speed="reducedMotion ? 0 : 450"
        :auto-height="true"
        :grab-cursor="true"
        :keyboard="{ enabled: true, onlyInViewport: true }"
        :a11y="{
          containerMessage: 'Selected portfolio projects',
          itemRoleDescriptionMessage: 'project',
          slideLabelMessage: 'Project {{index}} of {{slidesLength}}',
        }"
        @swiper="(instance) => { carousel = instance; }"
        @slide-change="syncActiveProject"
      >
        <SwiperSlide v-for="(project, index) in projects" :key="project.title">
          <article class="project-feature" :inert="activeIndex !== index">
            <figure class="project-media">
              <div class="project-image-frame">
                <div class="project-window-bar" aria-hidden="true">
                  <span class="window-dots"><i></i><i></i><i></i></span>
                  <span>PROJECT PREVIEW</span>
                  <Icon name="arrow-up-right" />
                </div>
                <img
                  :src="project.image"
                  :alt="`${project.title} website screenshot`"
                  :loading="index === 0 ? 'eager' : 'lazy'"
                  decoding="async"
                  width="1440"
                  height="675"
                />
              </div>
              <figcaption>
                <span>Selected project</span>
                <span>{{ projectNumber(index) }} / {{ String(projects.length).padStart(2, "0") }}</span>
              </figcaption>
            </figure>

            <div class="project-copy">
              <p class="project-kicker">Digital product <span aria-hidden="true">/</span> {{ projectNumber(index) }}</p>
              <h3>{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <ul class="project-tags" aria-label="Technologies used">
                <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
              </ul>
              <a
                v-if="isExternalProject(project.website)"
                :href="project.website"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
                :aria-label="`Visit ${project.title} website, opens in a new tab`"
              >
                Visit website <Icon name="arrow-up-right" />
              </a>
              <a v-else href="#contact" class="project-link">
                Discuss a similar project <Icon name="arrow-up-right" />
              </a>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>

      <div class="project-navigation" role="group" aria-label="Choose a project">
        <div class="project-pagination">
          <button
            v-for="(project, index) in projects"
            :key="project.title"
            type="button"
            :class="['pagination-number', { 'is-active': activeIndex === index }]"
            :aria-label="`Show project ${index + 1}: ${project.title}`"
            :aria-pressed="activeIndex === index"
            @click="selectProject(index)"
          >
            {{ projectNumber(index) }}
          </button>
        </div>
        <div class="project-arrows">
          <span class="browse-label">Explore the work</span>
          <button
            type="button"
            class="carousel-arrow"
            aria-label="Previous project"
            :disabled="activeIndex === 0"
            @click="carousel?.slidePrev()"
          >
            <Icon name="arrow-left" />
          </button>
          <button
            type="button"
            class="carousel-arrow"
            aria-label="Next project"
            :disabled="activeIndex === projects.length - 1"
            @click="carousel?.slideNext()"
          >
            <Icon name="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background: var(--surface);
  border-block: 1px solid var(--line);
}
.projects-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2.5rem;
  margin-bottom: 3rem;
}
.projects-heading .eyebrow {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.15rem;
}
.section-number {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.7rem;
}
.projects-heading h2 {
  margin: 0;
  color: var(--text);
  font-family: var(--font-sans);
  font-size: clamp(2.35rem, 4vw, 3.5rem);
  font-weight: 600;
  letter-spacing: -0.055em;
  line-height: 1.12;
}
.projects-heading h2 em {
  color: var(--accent);
  font-family: var(--font-serif);
  font-weight: 400;
  letter-spacing: -0.035em;
}
.projects-intro {
  max-width: 23rem;
  margin: 0 0 0.2rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.8;
}
.projects-carousel {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 4px;
}
.project-feature {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  background: var(--bg);
}
.project-media {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  min-width: 0;
  margin: 0;
  padding: clamp(1.5rem, 3vw, 3rem);
  border-right: 1px solid var(--line);
  background: var(--surface-muted);
}
.project-image-frame {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: var(--surface);
}
.project-window-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  padding-inline: 0.7rem;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.5rem;
  letter-spacing: 0.12em;
}
.window-dots { display: flex; gap: 0.25rem; }
.window-dots i {
  width: 0.3rem;
  height: 0.3rem;
  border: 1px solid var(--muted);
  border-radius: 50%;
}
.project-window-bar svg { width: 0.85rem; height: 0.85rem; }
.project-media img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1440 / 675;
  object-fit: contain;
  background: var(--surface);
}
.project-media figcaption {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.project-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 0;
  padding: clamp(1.5rem, 3.3vw, 3.5rem);
}
.project-kicker {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 1.1rem;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}
.project-kicker span { color: var(--muted); }
.project-copy h3 {
  margin: 0;
  color: var(--text);
  font-size: clamp(1.55rem, 2.8vw, 2.3rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 1.2;
}
.project-description {
  margin: 1.15rem 0 1.35rem;
  color: var(--text-secondary);
  font-size: 0.87rem;
  line-height: 1.85;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.project-tags li {
  padding: 0.35rem 0.65rem;
  border: 1px solid var(--line);
  border-radius: 3px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: 0.64rem;
  line-height: 1.4;
}
.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-top: 1.75rem;
  padding-block: 0.45rem;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
}
.project-link svg { width: 1.1rem; height: 1.1rem; transition: transform 180ms ease; }
.project-link:hover {
  color: var(--accent-hover);
  text-decoration: underline;
  text-underline-offset: 0.3em;
}
.project-link:hover svg { transform: translate(2px, -2px); }
.project-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
}
.project-pagination, .project-arrows { display: flex; align-items: center; gap: 0.4rem; }
.pagination-number {
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 0;
  border-bottom: 2px solid transparent;
  border-radius: 0;
  background: transparent;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  cursor: pointer;
  transition: color 180ms ease, border-color 180ms ease;
}
.pagination-number:hover, .pagination-number.is-active { color: var(--accent); }
.pagination-number.is-active { border-bottom-color: var(--accent); }
.browse-label { margin-right: 1rem; color: var(--text-secondary); font-size: 0.75rem; }
.carousel-arrow {
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  transition: background 180ms ease, color 180ms ease, border-color 180ms ease;
}
.carousel-arrow svg { width: 1.15rem; height: 1.15rem; }
.carousel-arrow:hover:not(:disabled) {
  border-color: var(--accent);
  background: var(--accent);
  color: var(--on-accent);
}
.carousel-arrow:disabled { opacity: 0.35; cursor: default; }
.pagination-number:focus-visible, .carousel-arrow:focus-visible, .project-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}
@media (max-width: 900px) {
  .projects-heading { align-items: flex-start; gap: 1.5rem; }
  .projects-heading h2 { max-width: 8ch; }
  .projects-intro { max-width: 20rem; }
  .project-feature { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
  .project-media { padding: 1.35rem; }
}
@media (max-width: 680px) {
  .projects-heading { display: block; margin-bottom: 2rem; }
  .projects-heading h2 { max-width: none; }
  .projects-intro { max-width: 29rem; margin-top: 1.25rem; }
  .project-feature { grid-template-columns: minmax(0, 1fr); }
  .project-media { gap: 1rem; padding: 1.5rem; border-right: 0; border-bottom: 1px solid var(--line); }
  .project-copy { padding: 1.75rem 1.5rem; }
  .project-copy h3 { max-width: 21ch; font-size: 1.8rem; }
  .project-description { font-size: 0.87rem; }
  .browse-label { display: none; }
}
@media (max-width: 380px) {
  .project-media, .project-copy { padding: 1.2rem; }
  .project-pagination, .project-arrows { gap: 0.1rem; }
  .pagination-number { width: 2.3rem; }
  .project-media figcaption { font-size: 0.57rem; }
}
@media (prefers-reduced-motion: reduce) {
  .project-link svg, .pagination-number, .carousel-arrow { transition: none; }
  :deep(.swiper-wrapper) { transition-duration: 0ms !important; }
}
</style>
