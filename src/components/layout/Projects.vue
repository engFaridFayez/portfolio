<template>
  <section
    id="projects"
    class="relative w-11/12 px-4 sm:px-8 md:px-16 mx-auto py-12"
  >
    <SectionHeader title="My Projects" />

    <!-- Custom Navigation Buttons -->
    <button
      class="swiper-prev absolute top-1/2 left-2 md:left-6 -translate-y-1/2 z-20
      bg-black/40 dark:bg-white/10 backdrop-blur
      text-white p-2 md:p-3 rounded-full
      hover:bg-black/60 transition"
    >
      <Icon
        icon="line-md:arrow-left"
        class="text-xl md:text-2xl text-white"
      />
    </button>
    <button
      class="swiper-next absolute top-1/2 right-2 md:right-6 -translate-y-1/2 z-20
      bg-black/40 dark:bg-white/10 backdrop-blur
      text-white p-2 md:p-3 rounded-full
      hover:bg-black/60 transition"
    >
      <Icon
        icon="line-md:arrow-right"
        class="text-xl md:text-2xl text-white"
      />
    </button>

    <swiper
    
      ref="swiperRef"
      effect="coverflow"
      grabCursor
      :centered-slides="true"
      :slides-per-view="'auto'"
      :speed="700"
      :coverflow-effect="{
        rotate: 50,
        stretch: 0,
        depth: 80,
        modifier: 1,
        slideShadows: false,
      }"
      :navigation="{
        prevEl: '.swiper-prev',
        nextEl: '.swiper-next',
      }"
      :pagination="{
        clickable: true,
        el: '.swiper-pagination',
      }"
      :modules="[EffectCoverflow, Navigation, Pagination]"
      class="max-w-full mt-12 md:mt-16 pb-8"
    >
      <swiper-slide
        v-for="(project, index) in projects"
        :key="index"
        class="max-w-[240px] sm:max-w-[260px] md:max-w-[300px]"
      >
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :tags="project.tags"
          :liveLink="project.liveLink"
          :codeLink="project.codeLink"
        />
      </swiper-slide>

      <!-- Optional: Pagination dots (uncomment if you want them) -->
      <!-- <div class="swiper-pagination mt-8"></div> -->
    </swiper>
  </section>
</template>

<script setup>
import { ref, onMounted,computed  } from "vue";
import SectionHeader from "@/components/UI/SectionHeader.vue";
import ProjectCard from "@/components/UI/ProjectCard.vue";

// Swiper imports
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Import your project images (Vite alias @ → src/)
import project1 from "@/assets/images/project1.jpg";
import project2 from "@/assets/images/project2.jpg";
import project3 from "@/assets/images/project3.jpg";
import project4 from "@/assets/images/project4.jpg";


const loopProjects = computed(() => {
  if (projects.value.length < 6) {
    return [...projects.value, ...projects.value];
  }
  return projects.value;
});



const swiperRef = ref(null);

const projects = ref([
  {
    title: "Portfolio Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quaerat neque porro dolorem ex adipisci laborum, dolorum ratione ullam explicabo aut ut eum accusamus cupiditate in illo magni odit ipsam!",
    image: project1,
    tags: ["HTML", "CSS", "Javascript"],
    liveLink: "/",
    codeLink: "/",
  },
  {
    title: "Portfolio Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quaerat neque porro dolorem ex adipisci laborum, dolorum ratione ullam explicabo aut ut eum accusamus cupiditate in illo magni odit ipsam!",
    image: project2,
    tags: ["HTML", "CSS", "Javascript"],
    liveLink: "/",
    codeLink: "/",
  },
  {
    title: "Portfolio Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quaerat neque porro dolorem ex adipisci laborum, dolorum ratione ullam explicabo aut ut eum accusamus cupiditate in illo magni odit ipsam!",
    image: project3,
    tags: ["HTML", "CSS", "Javascript"],
    liveLink: "/",
    codeLink: "/",
  },
  {
    title: "Portfolio Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quaerat neque porro dolorem ex adipisci laborum, dolorum ratione ullam explicabo aut ut eum accusamus cupiditate in illo magni odit ipsam!",
    image: project4,
    tags: ["HTML", "CSS", "Javascript"],
    liveLink: "/",
    codeLink: "/",
  },
]);

onMounted(() => {
  // Small delay helps coverflow + loop + auto initialize correctly
  setTimeout(() => {
    if (swiperRef.value?.swiper) {
      swiperRef.value.swiper.update();
      // Optional: force start from first real slide
      // swiperRef.value.swiper.slideToLoop(0, 0)
    }
  }, 300);
});
</script>

<style scoped>
/* Make sure slides are properly centered and visible */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease;
}

/* Optional: improve arrow visibility on small screens */
@media (max-width: 640px) {
  .swiper-prev,
  .swiper-next {
    padding: 0.75rem;
  }
  .swiper-prev {
    left: 1rem;
  }
  .swiper-next {
    right: 1rem;
  }
}
</style>
