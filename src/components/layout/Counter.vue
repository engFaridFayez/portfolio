<template>
  <section>
    <!-- Background effects -->
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"
    ></header>
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
    ></header>

    <ul
      ref="statsSection"
      class="relative z-10 p-6 mx-auto w-11/12 rounded-3xl border dark:bg-[#fffcfc26] bg-primary shadow-lg md:divide-x grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 border-secondary"
    >
      <!-- removed lg:mx-0 -->
      <li class="text-center" v-for="item in numbers" :key="item.id">
        <h2
          class="font-semibold flex justify-center text-xl sm:text-2xl md:text-4xl w-full text-white dark:text-secondary"
        >
          +
          <Countup
            v-if="hasIntersected"
            :end-val="item.number"
            :delay="5"
            :duration="20"
          />
        </h2>
        <p class="mt-2 text-white dark:text-secondary">{{ item.title }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Countup from "vue-countup-v3";

const numbers = ref([
  { id: 1, number: 12, title: "Created Projects" },
  { id: 2, number: 200, title: "Projects" },
  { id: 3, number: 120, title: "Happy Clients" },
  { id: 4, number: 3, title: "Years" },
]);

const statsSection = ref(null);
const hasIntersected = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        hasIntersected.value = true;
        observer.disconnect(); // لازم هنا ()
      }
    },
    { threshold: 0.5 },
  );

  if (statsSection.value) {
    observer.observe(statsSection.value);
  }
});
</script>
