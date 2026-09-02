<template>
  <section class="px-4 sm:px-8 md:px-16 py-12">
    <header class="text-center">
      <h3 class="text-3xl sm:text-4xl font-bold text-primary dark:text-white">
        Experience
      </h3>
    </header>

    <ul class="mt-10 space-y-6">
      <li
        v-for="(item, index) in Experience"
        :key="index"
        class="w-full rounded-xl shadow-lg border bg-gradient-to-t to-[#acac39] from-[#1f1e1c99]"
      >
        <article
          class="flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-xl bg-primary mt-[3px] mx-[3px] p-4 sm:p-6 md:p-8"
        >
          <!-- ICON -->
          <figure class="flex-shrink-0 flex justify-center sm:justify-start">
            <Icon
              icon="material-symbols-light:work"
              class="text-4xl sm:text-5xl md:text-6xl text-secondary"
            />
          </figure>

          <!-- CONTENT -->
          <section class="flex-1">
            <!-- TITLE + DATE -->
            <div
              class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1"
            >
              <h3
                class="text-xl sm:text-2xl md:text-3xl font-bold text-secondary"
              >
                {{ item.Title }}
              </h3>

              <span class="text-xs sm:text-sm text-gray-300">
                {{ item.duration }}
              </span>
            </div>

            <!-- COMPANY + LOCATION -->
            <div
              class="flex flex-wrap items-center gap-2 mt-2 text-sm text-white"
            >
              <span class="font-medium text-xl">{{ item.company }}</span>
              <span class="flex items-center gap-1 text-gray-300">
                <Icon icon="mdi:map-marker" />
                {{ item.location }}
              </span>
            </div>

            <!-- TASKS -->
            <ul
              class="mt-3 space-y-1 text-sm sm:text-base text-gray-200 list-disc list-inside"
            >
              <li v-for="(task, i) in item.tasks" :key="i">
                {{ task }}
              </li>
            </ul>

            <!-- TAGS -->
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="(tag, i) in item.tags"
                :key="i"
                class="px-3 py-1 text-xs sm:text-sm rounded-full bg-secondary/20 text-secondary border border-secondary/30"
              >
                {{ tag }}
              </span>
            </div>
          </section>
        </article>
      </li>
    </ul>
  </section>
</template>
<script setup>
import { ref } from "vue";

const Experience = ref([
  {
    Title: "Full-stack Developer",
    company: "Akhnaton For Construction & Real-Estate Development",
    location: "Heliopolis, Egypt",
    duration: "02/2023 – Present",
    tasks: [
      "Developed and maintained RESTful APIs using Django REST Framework",
      "Built and integrated frontend interfaces using Vue.js and MDB components",
      "Designed and optimized PostgreSQL databases to ensure performance and data integrity",
    ],
    tags: [
      "Django REST framework",
      "PostgreSQL",
      "Vuejs",
      "MDB(Material Design for Bootstrap)",
    ],
  },
  {
    Title: "Backend Developer",
    company: "Freelance Project",
    location: "Remote",
    duration: "10/2025 – Present",
    tasks: [
      "Developed a full-stack web application for community and content management",
      "Built RESTful APIs using Django REST Framework",
      "Designed responsive UI using Vue.js",
    ],
    tags: ["Django REST framework", "PostgreSQL", "Vuejs", "Tailwind CSS"],
  },
  {
    Title: "Backend Developer",
    company: "CIA Micro Systems",
    location: "Cairo, Egypt",
    duration: "05/2022 – 10/2022",
    tasks: [
      "Developed backend modules using .NET Framework following MVC architecture",
      "Implemented server-side business logic and database interactions",
      "Collaborated with frontend developers to integrate APIs and improve application performance",
    ],
    tags: [".Net Framework", "Bootstrap", "JavaScript", "MVC"],
  },
]);
</script>
