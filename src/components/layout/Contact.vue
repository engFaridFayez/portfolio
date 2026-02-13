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
            <a href="https://x.com/faridfayez123" target="blank" class="text-gray-600 hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><g fill="currentColor"><path d="M1 2h2.5l15 20h-2.5ZM5.5 2h2.5l15 20h-2.5Z"><animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5l0 0h-2.5ZM5.5 2h2.5l-0.8 0h-2.5Z;M1 2h2.5l15 20h-2.5ZM5.5 2h2.5l15 20h-2.5Z"/></path><path d="M3 2h5v0h-5ZM16 22h5v0h-5Z"><animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" to="M3 2h5v2h-5ZM16 22h5v-2h-5Z"/></path><path d="M18.5 2h3.5l0 0h-3.5Z"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" to="M18.5 2h3.5l-17 20h-3.5Z"/></path></g></svg>
            </a>
            <a href="https://www.linkedin.com/in/farid-faiz-9b92a9354/" target="blank" class="text-gray-600 hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 1536 1536"><path fill="currentColor" d="M237 1286h231V592H237zm246-908q-1-52-36-86t-93-34t-94.5 34t-36.5 86q0 51 35.5 85.5T351 498h1q59 0 95-34.5t36-85.5m585 908h231V888q0-154-73-233t-193-79q-136 0-209 117h2V592H595q3 66 0 694h231V898q0-38 7-56q15-35 45-59.5t74-24.5q116 0 116 157zm468-998v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"/></svg>
            </a>
            <a href="https://github.com/engFaridFayez" target="blank" class="text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
            </a>
            <a href="https://www.instagram.com/farid.faiz/" target="blank" class="text-gray-600 hover:text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-width="2" d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"/><circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/></g></svg>
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