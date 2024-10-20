<template>
  <div class="relative h-dvh">
    <!-- Background with filter -->
    <div
      class="absolute inset-0 bg-cover bg-center filter"
      :style="{
        'background-image': 'url(' + bg + ')',
      }"
      style="background-position: center; filter: brightness(0.8) blur(2px)"
    ></div>

    <!-- Content on top of the background -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center text-white text-center overflow-auto"
    >
      <div class="flex flex-col flex-grow items-center justify-center gap-2">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const { bg } = defineProps(['bg']);
</script>
