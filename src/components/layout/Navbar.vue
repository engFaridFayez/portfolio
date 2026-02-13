<script setup>
import { Icon } from "@iconify/vue";
import { ref,onMounted  } from "vue";
import darkLogo from "@/assets/images/darkLogo.jpeg";
import lightLogo from "@/assets/images/lightLogo.jpeg";

const isMenuOpen = ref(false);

const menu = ref([
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Why me", href: "#whyme" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]);

const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const isDarkMode = ref(localStorage.getItem("theme") === "dark");

const toggleDarkMode = () => {
  const html = document.documentElement;
  if (isDarkMode.value) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
  isDarkMode.value = !isDarkMode.value;
};

onMounted(() => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    isDarkMode.value = true;
  } else if (theme === "dark") {
    document.documentElement.classList.add("dark");
    isDarkMode.value = true;
  } else {
    document.documentElement.classList.remove("dark");
    isDarkMode.value = false;
  }
});
</script>

<template>
  <header class="relative z-30">
    <div
      class="flex justify-between items-center p-6 lg:p-4 lg:px-12 relative z-30"
    >
      <!-- Logo -->
      <div class="text-3xl font-bold">
        <img
          style="border-radius: 50%;"
          :src="isDarkMode ? darkLogo : lightLogo"
          class="w-[180px] h-[150px] md:w-[150px] md:h-[120px] rounded-4xl"
          alt="Logo"
        />
      </div>

      <!-- Right side container -->
      <div class="flex items-center gap-5 md:gap-8">
        <!-- Mobile: dark toggle + hamburger -->
        <div class="flex items-center gap-4 md:hidden">
          <!-- Dark mode toggle (mobile) -->
          <button @click="toggleDarkMode" class="focus:outline-none">
            <Icon
              v-if="!isDarkMode"
              icon="line-md:moon-filled"
              class="text-4xl text-primary"
            />
            <Icon
              v-else
              icon="line-md:sunny-outline"
              class="text-4xl text-secondary"
            />
          </button>

          <!-- Hamburger / Close button -->
          <button class="focus:outline-none" @click="isMenuOpen = !isMenuOpen">
            <span v-if="isMenuOpen" class="text-5xl text-white dark:text-white">
              <Icon icon="ic:baseline-close" />
            </span>
            <span v-else class="text-5xl text-white dark:text-white">
              <Icon icon="ic:round-menu" />
            </span>
          </button>
        </div>

        <!-- Desktop nav + dark toggle -->
        <nav class="hidden md:flex md:items-center md:gap-8 lg:gap-10">
          <ul class="flex items-center gap-6 lg:gap-8">
            <li v-for="item in menu" :key="item.name">
              <a
                :href="item.href"
                class="block font-bold md:text-lg lg:text-xl text-primary hover:text-secondary dark:text-white dark:hover:text-secondary transition-colors"
                @click="scrollToSection(item.href)"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>

          <!-- Dark mode toggle (desktop) -->
          <button @click="toggleDarkMode" class="focus:outline-none">
            <Icon
              v-if="!isDarkMode"
              icon="line-md:moon-filled"
              class="text-4xl lg:text-5xl text-primary"
            />
            <Icon
              v-else
              icon="line-md:sunny-outline"
              class="text-4xl lg:text-5xl text-secondary"
            />
          </button>
        </nav>
      </div>
    </div>

    <!-- Mobile full-screen menu -->
    <nav
      :class="[
        'fixed inset-0 z-20 flex flex-col items-center justify-center',
        'bg-primary/95 backdrop-blur-md shadow-2xl',
        'transition-opacity duration-300',
        isMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
        'md:hidden',
      ]"
    >
      <ul class="flex flex-col items-center gap-10 text-2xl">
        <li v-for="item in menu" :key="item.name">
          <a
            :href="item.href"
            class="font-bold text-white hover:text-secondary transition-colors"
            @click="scrollToSection(item.href)"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
