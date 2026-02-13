<template>
  <footer class="z-10 text-white border-t-2 border-t-white bg-primary mt-20">
    <div class="p-8 flex justify-between items-center">
      <div class="text-3xl font-bold overflow-hidden rounded-full">
        <img
          :src="isDarkMode ? darkLogo : lightLogo"
          class="w-[100px] h-[100px] md:w-[90px] md:h-[90px] object-cover"
          alt="Logo"
        />
      </div>
      <div class="flex justify-end mr-[50px]">All rights reserved</div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import darkLogo from "@/assets/images/darkLogo.jpeg";
import lightLogo from "@/assets/images/lightLogo.jpeg";

const isDarkMode = ref(localStorage.getItem("theme") === "dark");

// عند الضغط على زر الـ Dark Mode (لو موجود) هيتغير مباشرة
const toggleDarkMode = () => {
  const html = document.documentElement;
  if (isDarkMode.value) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    isDarkMode.value = false;
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    isDarkMode.value = true;
  }
};

// عند تحميل الصفحة
onMounted(() => {
  const theme = localStorage.getItem("theme");
  if (!theme || theme === "dark") {
    document.documentElement.classList.add("dark");
    isDarkMode.value = true;
  } else {
    document.documentElement.classList.remove("dark");
    isDarkMode.value = false;
  }
});
</script>
