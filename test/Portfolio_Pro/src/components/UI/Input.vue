<script setup>
defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  autocomplete: { type: String, default: undefined },
  rows: { type: Number, default: 5 },
  maxlength: { type: Number, default: undefined },
  required: { type: Boolean, default: true },
  readonly: { type: Boolean, default: false },
});
</script>

<template>
  <div class="form-field">
    <label class="field-label" :for="id">{{ label }}</label>
    <textarea
      v-if="type === 'textarea'"
      :id="id"
      :name="name"
      :rows="rows"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :required="required"
      :readonly="readonly"
      class="field-control field-message"
    ></textarea>
    <input
      v-else
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :maxlength="maxlength"
      :required="required"
      :readonly="readonly"
      class="field-control"
    />
  </div>
</template>

<style scoped>
.form-field { min-width: 0; }
.field-label {
  display: block;
  margin-bottom: 0.65rem;
  color: var(--text);
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.5;
}
.field-control {
  display: block;
  width: 100%;
  min-height: 3.25rem;
  border: 1px solid var(--input-border);
  border-radius: 7px;
  padding: 0.9rem 1rem;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.5;
  transition: border-color 180ms ease, box-shadow 180ms ease;
}
.field-control::placeholder { color: var(--muted); opacity: 1; }
.field-control:hover:not(:read-only) { border-color: var(--text-secondary); }
.field-control:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-color: var(--accent);
}
.field-control:read-only { cursor: wait; }
.field-message { min-height: 10rem; resize: vertical; }
@media (prefers-reduced-motion: reduce) {
  .field-control { transition: none; }
}
</style>
