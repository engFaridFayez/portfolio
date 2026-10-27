<template>
  <div class="loading-state" role="status" aria-live="polite"><span class="loading-ring" aria-hidden="true"></span><span>Loading portfolio…</span></div>
</template>

<style scoped>
.loading-state { min-height: 60vh; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 20px; color: var(--text-secondary); font-size: 12px; }
.loading-ring { width: 32px; height: 32px; border: 2px solid var(--line); border-top-color: var(--accent); border-radius: 50%; animation: turn 850ms linear infinite; }
@keyframes turn { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .loading-ring { animation: none; } }
</style>
