<template>
  <section
    id="projects"
    class="projects-showcase relative isolate overflow-hidden py-20 sm:py-28"
  >
    <div class="showcase-orb showcase-orb--one" aria-hidden="true"></div>
    <div class="showcase-orb showcase-orb--two" aria-hidden="true"></div>
    <div class="showcase-grid" aria-hidden="true"></div>

    <div class="relative mx-auto w-[min(100%-2rem,82rem)]">
      <header class="showcase-intro" data-aos="fade-up">
        <div>
          <p class="eyebrow"><span></span> Selected work</p>
          <h2>Built with<br /><em>intention.</em></h2>
        </div>
        <p class="intro-copy">
          A selection of digital products where thoughtful systems meet
          expressive, human-centred interfaces.
        </p>
      </header>

      <div
        class="relative mt-8 sm:mt-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <swiper
          ref="swiperRef"
          effect="coverflow"
          grabCursor
          :centered-slides="true"
          :slides-per-view="'auto'"
          :speed="700"
          :coverflow-effect="{
            rotate: 18,
            stretch: 0,
            depth: 140,
            modifier: 0.8,
            slideShadows: false,
          }"
          :navigation="{
            prevEl: '.projects-prev',
            nextEl: '.projects-next',
          }"
          :pagination="{
            clickable: true,
            el: '.swiper-pagination',
          }"
          :modules="[EffectCoverflow, Navigation, Pagination]"
          class="projects-swiper overflow-visible"
        >
          <swiper-slide
            v-for="(project, index) in projects"
            :key="index"
            class="project-slide"
          >
            <article class="project-feature group">
              <div class="project-media">
                <img :src="project.image" :alt="project.title" />
                <div class="media-wash"></div>
                <span class="project-index">0{{ index + 1 }}</span>
              </div>

              <div class="project-details">
                <p class="project-kicker">
                  Digital product / {{ String(index + 1).padStart(2, "0") }}
                </p>
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <footer class="project-meta">
                  <ul aria-label="Technologies used">
                    <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
                  </ul>
                  <div class="project-actions">
                    <a
                      href=""
                      v-if="project.website"
                      :href="project.website"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="visit-link"
                    >
                      Visit Website
                      <Icon icon="line-md:external-link" />
                    </a>
                  </div>
                </footer>
              </div>
            </article>
          </swiper-slide>
        </swiper>

        <div class="showcase-controls" aria-label="Project carousel controls">
          <button
            class="projects-prev control-button"
            type="button"
            aria-label="Previous project"
          >
            <Icon icon="line-md:arrow-left" aria-hidden="true" />
          </button>
          <span class="control-label">Browse projects</span>
          <button
            class="projects-next control-button"
            type="button"
            aria-label="Next project"
          >
            <Icon icon="line-md:arrow-right" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import project1 from "@/assets/images/Project1.png";
import project2 from "@/assets/images/project2.jpg";
import project3 from "@/assets/images/project3.jpg";
import project4 from "@/assets/images/project4.jpg";
import project5 from "@/assets/images/project5.png";
import project6 from "@/assets/images/project6.png";
import project7 from "@/assets/images/project7.png";

const swiperRef = ref(null);

const projects = ref([
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
      "Developed a full-stack E-Commerce web application using Django, Django REST Framework, and Vue.js with Vite.The platform provides a complete online shopping experience with secure authentication, product management, shopping cart functionality, and order processing.",
    image: project5,
    tags: ["HTML", "CSS", "Javascript"],
    website: "/",
  },
  {
    title: "Church School Management System",
    description:
      "A full-stack web application designed for managing a church school community digitally.The platform helps organize students, teachers, classes, attendance, educational materials, results, exams, and internal activities in one centralized system.",
    image: project6,
    tags: ["HTML", "CSS", "Javascript"],
    website: "/",
  },
]);

onMounted(() => {
  setTimeout(() => {
    swiperRef.value?.swiper?.update();
  }, 300);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap");

.projects-showcase {
  display: flex;
  min-height: 100svh;
  align-items: center;
  padding: clamp(3.5rem, 7vh, 5rem) 0;
  background: #0b1020;
  color: #f5f3ed;
  font-family: "Manrope", sans-serif;
}
.showcase-grid {
  position: absolute;
  inset: 0;
  opacity: 0.22;
  background-image:
    linear-gradient(rgba(174, 196, 240, 0.13) 1px, transparent 1px),
    linear-gradient(90deg, rgba(174, 196, 240, 0.13) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 16%,
    black 85%,
    transparent
  );
}
.showcase-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(15px);
  pointer-events: none;
}
.showcase-orb--one {
  width: 31rem;
  height: 31rem;
  background: rgba(91, 75, 242, 0.22);
  top: 4rem;
  left: -15rem;
}
.showcase-orb--two {
  width: 25rem;
  height: 25rem;
  background: rgba(13, 184, 170, 0.13);
  bottom: 2rem;
  right: -11rem;
}
.showcase-intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 3rem;
}
.eyebrow,
.project-kicker {
  color: #8ef2d1;
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.69rem;
  font-weight: 500;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}
.eyebrow {
  display: flex;
  gap: 0.65rem;
  align-items: center;
  margin-bottom: 1.2rem;
}
.eyebrow span {
  width: 2.25rem;
  height: 1px;
  background: currentColor;
}
.showcase-intro h2 {
  max-width: 8ch;
  margin: 0;
  color: #f8f7f2;
  font-size: clamp(2.75rem, 5.4vw, 4.75rem);
  font-weight: 700;
  letter-spacing: -0.075em;
  line-height: 0.91;
}
.showcase-intro h2 em {
  color: #b5a8ff;
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 600;
  letter-spacing: -0.08em;
}
.intro-copy {
  width: min(100%, 23rem);
  margin: 0 0 0.5rem;
  color: #b8c0d6;
  font-size: 0.95rem;
  line-height: 1.8;
}
.projects-swiper {
  width: 100%;
  padding: 0;
}
.project-slide {
  width: min(100%, 67rem);
  transition: opacity 0.4s ease;
}
.project-feature {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.82fr);
  min-height: clamp(25rem, 53vh, 29rem);
  overflow: hidden;
  border: 1px solid rgba(203, 212, 255, 0.2);
  background: rgba(19, 27, 50, 0.72);
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.28),
    inset 0 1px rgba(255, 255, 255, 0.045);
  backdrop-filter: blur(18px);
}
.project-media {
  position: relative;
  min-height: 100%;
  overflow: hidden;
}
.project-media img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  transition: transform 0.8s cubic-bezier(0.2, 0.75, 0.25, 1);
}
.group:hover .project-media img {
  transform: scale(1.06);
}
.media-wash {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    125deg,
    rgba(10, 13, 29, 0.13),
    transparent 48%,
    rgba(90, 67, 222, 0.22)
  );
}
.project-index {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  color: #fff;
  font-family: "DM Mono", monospace;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
}
.media-caption {
  position: absolute;
  bottom: 1.45rem;
  left: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: rgba(255, 255, 255, 0.85);
  font-family: "DM Mono", monospace;
  font-size: 0.64rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.media-caption i {
  display: block;
  width: 2rem;
  height: 1px;
  background: currentColor;
}
.project-details {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(2rem, 5vw, 4.4rem) clamp(1.75rem, 4vw, 3.7rem);
}
.project-details::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(transparent, #8ef2d1, transparent);
  content: "";
  opacity: 0.7;
}
.project-kicker {
  margin: 0 0 1.1rem;
  font-family: "DM Mono", monospace;
  color: #8ef2d1;
  font-size: 0.6rem;
  line-height: 1.6;
}
.project-title {
  font-family: "IBM Plex Mono", monospace;
}
.project-details h3 {
  margin: 0;
  color: #fffdf7;
  font-size: clamp(1.85rem, 3.5vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 0.98;
}
.project-description {
  display: -webkit-box;
  margin: 1.25rem 0 1.7rem;
  overflow: hidden;
  color: #aeb8d0;
  font-size: 0.82rem;
  line-height: 1.8;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.project-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.project-meta ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.project-meta li {
  border: 1px solid rgba(180, 196, 243, 0.22);
  border-radius: 999px;
  padding: 0.4rem 0.6rem;
  color: #d9e2ff;
  font-family: "DM Mono", monospace;
  font-size: 0.59rem;
}
.project-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 0 0 auto;
}
.visit-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1rem;
  border: 1px solid rgba(142, 242, 209, 0.45);
  border-radius: 999px;
  color: #8ef2d1;
  font-family: "DM Mono", monospace;
  font-size: 0.64rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}
.visit-link svg {
  width: 0.95em;
  height: 0.95em;
}
.visit-link:hover,
.visit-link:focus-visible {
  background: #8ef2d1;
  color: #0b1020;
  border-color: #8ef2d1;
  transform: translateY(-2px);
}
.visit-link:focus-visible {
  outline: 2px solid #8ef2d1;
  outline-offset: 3px;
}
.view-project,
.control-button {
  display: grid;
  place-items: center;
  border: 1px solid rgba(142, 242, 209, 0.55);
  color: #8ef2d1;
  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;
}
.view-project {
  width: 2.65rem;
  height: 2.65rem;
  flex: 0 0 auto;
  border-radius: 50%;
  font-size: 1.2rem;
}
.group:hover .view-project,
.control-button:hover {
  background: #8ef2d1;
  color: #0b1020;
  transform: translateY(-3px);
}
.showcase-controls {
  position: absolute;
  z-index: 10;
  top: 50%;
  right: -1.45rem;
  left: -1.45rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
  transform: translateY(-50%);
}
.control-button {
  width: 2.9rem;
  height: 2.9rem;
  border-radius: 50%;
  background: rgba(20, 30, 57, 0.65);
  font-size: 1.15rem;
}
.control-button {
  pointer-events: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}
.control-label {
  display: none;
}
.swiper-button-disabled {
  cursor: not-allowed;
  opacity: 0.35;
}

@media (max-width: 720px) {
  .projects-showcase {
    display: block;
    min-height: 0;
    padding: 5.5rem 0;
  }
  .showcase-intro {
    display: block;
  }
  .intro-copy {
    margin-top: 1.8rem;
  }
  /* Keep the active project complete while revealing a deliberate preview of its neighbours. */
  .projects-swiper {
    overflow: visible;
  }
  .project-slide {
    width: calc(100% - 3rem);
    max-width: 29rem;
  }
  .project-feature {
    display: flex;
    min-height: 0;
    flex-direction: column;
  }
  .project-media {
    min-height: 17rem;
  }
  .project-details::before {
    top: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, #8ef2d1, transparent);
  }
  .project-description {
    margin-bottom: 1.7rem;
    -webkit-line-clamp: 4;
  }
  .showcase-controls {
    position: static;
    justify-content: center;
    gap: 0.85rem;
    margin-top: 1.25rem;
    transform: none;
  }
  .control-label {
    display: block;
    margin: 0 0.4rem;
    color: #8e99b6;
    font-family: "DM Mono", monospace;
    font-size: 0.62rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
}

@media (max-width: 420px) {
  .project-media {
    min-height: 14rem;
  }
  .project-details {
    padding: 1.75rem 1.35rem;
  }
  .project-meta {
    align-items: center;
  }
  .control-label {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-media img,
  .view-project,
  .control-button {
    transition: none;
  }
}
</style>
