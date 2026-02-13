<template>
  <section class="mt-32" id="contact">
    <SectionHeader title="Contact Me" />
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <form ref="form" @submit.prevent="sendEmail" class="space-y-8">
        <input type="hidden" name="time" :value="currentTime" />
        <div v-for="(item, index) in inputs" :key="index">
          <Input
            :id="item.id"
            :name="item.name"
            :label="item.label"
            :type="item.type"
            :placeholder="item.placeholder"
            :rows="rows"
          />
        </div>
        <div class="flex justify-between">
          <Button label="Send" type="submit"/>
          <div class="mt-2 flex justify-center space-x-3 md:space-x-8">
            <a href="" class="text-gray-600 hover:text-blue-500">
              <Icon icon="fa-brands:twitter" style="font-size: 2rem" />
            </a>
            <a href="" class="text-gray-600 hover:text-blue-700">
              <Icon icon="fa-brands:linkedin" style="font-size: 2rem" />
            </a>
            <a href="" class="text-gray-600 hover:text-gray-800">
              <Icon icon="fa-brands:github" style="font-size: 2rem" />
            </a>
            <a href="" class="text-gray-600 hover:text-pink-500">
              <Icon icon="fa-brands:instagram" style="font-size: 2rem" />
            </a>
          </div>
        </div>
      </form>
    </div>
  </section>
  <!-- Toast -->
<div
  v-if="showToast"
  class="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in"
>
  {{ toastMessage }}
</div>
</template>
<script setup>
import SectionHeader from "@/components/UI/SectionHeader.vue";
import Input from "@/components/UI/Input.vue";
import Button from "@/components/UI/Button.vue";
import { ref } from "vue";
import emailjs from '@emailjs/browser';

const currentTime = new Date().toLocaleString();
const showToast = ref(false);
const toastMessage = ref("");
const form = ref(null);

const inputs = ref([
  {
    id: "name",
    name: "name",
    label: "Your Name",
    type: "text",
    placeholder: "Your full name",
    rows: undefined,
  },
  {
    id: "email",
    name: "user_email",
    label: "Your email",
    type: "email",
    placeholder: "email@example.com",
    rows: undefined,
  },
  {
    id: "message",
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Leave a comment",
    rows: 6,
  },
]);





const sendEmail = () => {
  emailjs.sendForm(
    "service_p7il00g",
    "template_x3yjcwm",
    form.value,
    {
      publicKey: "rglDEBVBBAjYgsEnN",
    }
  ).then(
    () => {
      toastMessage.value = "Message sent successfully 🚀";
      showToast.value = true;

      // ✨ تصفير الفورم
      form.value.reset();

      // ⚡ Toast يختفي بعد 3 ثواني
      setTimeout(() => {
        showToast.value = false;
      }, 3000);
    },
    (error) => {
      toastMessage.value = "Something went wrong ❌";
      showToast.value = true;
      console.error(error);

      setTimeout(() => {
        showToast.value = false;
      }, 3000);
    }
  );
};
</script>

<style scoped>
@keyframes slide-in {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 0.5s ease-out;
}
</style>