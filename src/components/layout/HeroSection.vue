<template>
  <section data-aos="zoom-in"
    class="flex justify-center items-center min-h-screen mt-20 lg:mt-0 dark:text-white"
  >
    <!-- Background effects -->
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"
    ></header>

    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
    ></header>

    <!-- CONTENT -->
    <main
      class="relative grid grid-cols-1 lg:grid-cols-2 items-center p-4 lg:p-8 z-10"
    >
      <header class="text-center lg:text-right mr-11">
        <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-left">
          👋Hi, I'm
          <span
            class="text-secondary stroke-text text-stroke-primary dark:text-stroke-secondary"
          >
            Farid
          </span>
        </h1>
        <div class="flex flex-col items-start max-w-xl">
          <p class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            dolorum quae temporibus voluptates ex, dolor provident facere
            distinctio minus recusandae consequuntur explicabo eum, laudantium
            quasi. Dolor incidunt corporis natus nihil.
          </p>
          <div class="mt-6 flex justify-center lg:justify-start">
            <Button label="Hire Me" />
            <a
              href=""
              class="font-semibold text-lg w-[10rem] h-[55px] dark:text-secondary rounded-full ml-2 border-2 dark:border-secondary hover:scale-105 transition-transform duration-300 bg-white dark:bg-transparent flex justify-center items-center text-primary border-primary"
            >
              <Icon icon="line-md:download-loop" class="text-3xl" />
              <span class="ml-1">Resume</span>
            </a>
          </div>
        </div>
      </header>
      <aside
        class="container flex justify-center lg:justify-end mt-20 lg:mt-0 items-center"
      >
        <figure
          class="relative m-[30px] w-[280px] h-[350px] md:w-[420px] md:h-[420px] glass-frame"
        >
          <img
            src="@/assets/images/image.png"
            alt="Hero Picture"
            class="w-full h-full object-cover block"
            loading="lazy"
          />
        </figure>
      </aside>
    </main>
  </section>
</template>

<script setup>
import Button from "@/components/UI/Button.vue";
</script>
<style scoped>
.glass-frame {
  position: relative;
  border-radius: 24px;
  overflow: hidden;

  /* البوردر */
  border: 7px solid transparent;
  background:
    linear-gradient(#0f172a, #0f172a) padding-box,
    linear-gradient(
      135deg,
      #192942,
      #FEF5C3,
      #192942
    ) border-box;

  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.35);

  transition: transform 0.4s ease;
}

/* Image */
.glass-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  transition: transform 0.6s ease;
}

.glass-frame:hover img {
  transform: scale(1.05);
}

</style>
