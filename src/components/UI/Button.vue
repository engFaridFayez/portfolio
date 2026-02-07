<template>
  <button @click="onClick" class="relative flex justify-center items-center w-[180px] h-[60px] rounded-full overflow-hidden bg-gray-700 dark:bg-white">
    
    <!-- Halo gradient -->
    <div class="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-r from-[#00c6cc] to-[#785ae4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-rotate"></div>
    
    <!-- Button content -->
    <div class="relative z-10 flex justify-center items-center w-[156px] h-[45px] bg-secondary text-primary font-semibold rounded-full border border-primary">
      {{ label }}
    </div>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    label: { type: String, default: 'Button' },
    onClick: { type: Function, default: ()=>{} }
})
</script>

<style scoped>
@keyframes rotate {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
.animate-rotate {
  animation: rotate 1s linear infinite;
}
</style>
