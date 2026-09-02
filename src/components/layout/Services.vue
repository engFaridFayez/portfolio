<template>
  <section id="services" class="relative text-white mt-32">
    <SectionHeader title="My Services" />
    <div
      class="mt-20 py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
    >
      <article
        class="px-[12px] mb-[24px]"
        v-for="item in services"
        :key="item.id"
      >
        <div
          class="mt-[30px] relative flex flex-col justify-center text-center rounded-[30px] border border-secondary dark:bg-[#ffffff29] bg-primary"
          data-aos="fade-up"
          :data-aos-delay="item.id * 100"
        >
          <div class="mt-[-30px] flex justify-center relative">
            <div
              class="w-[70px] h-[70px] flex items-center justify-center bg-primary border-2 border-secondary rounded-full relative"
            >
              <img :src="item.icon" alt="services" class="w-[32px] h-[32px]" />
            </div>
          </div>
          <div class="p-[30px]">
            <h3 class="uppercase font-semibold text-secondary text-base">
              {{ item.name }}
            </h3>
            <p class="text-[14px] leading-[20px] text-white tracking-[0.03rem]">
              {{ item.description }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import SectionHeader from "@/components/UI/SectionHeader.vue";

const services = ref([
  {
    id: 1,
    icon: "https://img.icons8.com/ios-filled/100/daed1a/google-code.png",
    name: "Full-Stack Web Development",
    description:
      "Building complete web applications from scratch, handling both backend logic and frontend interfaces using modern scalable technologies.",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/external-vectorslab-glyph-vectorslab/100/daed1a/external-Technical-Writing-mobile-app-development-vectorslab-glyph-vectorslab.png",
    name: "Backend Development & APIs",
    description:
      "Developing secure, well-structured backend systems and RESTful APIs that are easy to maintain and integrate with different platforms.",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/?size=100&id=8191&format=png&color=DAED1A",
    name: "Frontend Development",
    description:
      "Creating responsive, clean, and interactive user interfaces that focus on usability, performance, and modern design practices.",
  },
  {
    id: 4,
    icon: "https://img.icons8.com/?size=100&id=fncdgSAvOcfI&format=png&color=DAED1A",
    name: "API Integration",
    description:
      "Integrating third-party services and external APIs to extend application functionality and ensure smooth data communication.",
  },
  {
    id: 5,
    icon: "https://img.icons8.com/?size=100&id=8305&format=png&color=DAED1A",
    name: "Database Design & Management",
    description:
      "Designing efficient and reliable database structures with a strong focus on data integrity, performance, and scalability.",
  },
  {
    id: 6,
    icon: "https://img.icons8.com/?size=100&id=xCjyelnIlED8&format=png&color=DAED1A",
    name: "Web Application Optimization",
    description:
      "Optimizing web applications by improving performance, code quality, and overall user experience across different devices.",
  },
]);
</script>
