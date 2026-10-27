<script setup>
defineProps({ name: { type: String, default: 'arrow-up-right' }, size: { type: [Number, String], default: 20 } });
const paths = {
  'arrow-up-right': ['M7 17 17 7', 'M7 7h10v10'],
  'external-link': ['M15 3h6v6', 'M10 14 21 3', 'M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5'],
  'arrow-right': ['M4 12h16', 'm13 5 7 7-7 7'],
  'arrow-left': ['M20 12H4', 'm11 5-7 7 7 7'],
  'arrow-up': ['M12 20V4', 'm5 11 7-7 7 7'],
  'chevron-down': ['m6 9 6 6 6-6'],
  'menu': ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  'close': ['m6 6 12 12', 'M6 18 18 6'],
  'sun': ['M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42', 'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0'],
  'moon': ['M20.9 13.5A9 9 0 0 1 10.5 3.1 9 9 0 1 0 20.9 13.5Z'],
  'download': ['M12 3v12', 'm7 10 5 5 5-5', 'M5 15v5h14v-5'],
  'code': ['m8 6-6 6 6 6', 'm16 6 6 6-6 6', 'm14 3-4 18'],
  'server': ['M4 3h16v7H4z', 'M4 14h16v7H4z', 'M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6'],
  'layers': ['m12 3 10 5-10 5L2 8Z', 'm2 12 10 5 10-5', 'm2 16 10 5 10-5'],
  'database': ['M20 6c0 2.2-3.6 4-8 4s-8-1.8-8-4 3.6-4 8-4 8 1.8 8 4Z', 'M4 6v12c0 2.2 3.6 4 8 4s8-1.8 8-4V6', 'M4 12c0 2.2 3.6 4 8 4s8-1.8 8-4'],
  'link': ['M10 13a5 5 0 0 0 7.1 0l3-3A5 5 0 0 0 13 3l-1.7 1.7', 'M14 11a5 5 0 0 0-7.1 0l-3 3A5 5 0 0 0 11 21l1.7-1.7'],
  'gauge': ['M4.9 19.1a10 10 0 1 1 14.2 0', 'm12 12 4-4', 'M12 4v1M4 12h1m14 0h1'],
  'briefcase': ['M3 7h18v14H3z', 'M8 7V3h8v4', 'M3 12c6 4 12 4 18 0', 'M12 12v4'],
  'book': ['M12 5C9 3 5 3 2 4v16c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Z', 'M12 5v16'],
  'map-pin': ['M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z', 'M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0'],
  'mail': ['M3 5h18v14H3Z', 'm3 5 9 8 9-8'],
  'check': ['m5 12 4 4L19 6'],
  'loader': ['M21 12a9 9 0 1 1-9-9'],
  'github': ['M9 19c-4.3 1.3-4.3-2.3-6-2.8M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.9a5.4 5.4 0 0 0-1.5-3.8A5 5 0 0 0 18.7 1S17.5.6 15 2.4a13.4 13.4 0 0 0-6 0C6.5.6 5.3 1 5.3 1a5 5 0 0 0-.1 3.8 5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.2 6.6 6.2 6.9a3.4 3.4 0 0 0-.9 2.6V22'],
  'linkedin': ['M4 9v12M4 3v.01', 'M10 21V9h5v2c3-4 7-2 7 2v8', 'M15 21v-8'],
  'instagram': ['M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z', 'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0', 'M17.5 6.5h.01'],
  'x': ['M4 3h4l12 18h-4Z', 'm4 21 7-8m2-2 7-8'],
};
</script>
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <path v-for="(path, index) in paths[name] || paths['arrow-up-right']" :key="index" :d="path" />
  </svg>
</template>
