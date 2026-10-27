<script setup>
defineProps({
  label: { type: String, default: '' },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
  variant: { type: String, default: 'primary' },
});
</script>
<template>
  <button :type="type" :disabled="disabled" :class="['btn', `btn-${variant}`]">
    <slot>{{ label }}</slot>
  </button>
</template>
