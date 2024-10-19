<template>
  <div class="relative h-screen">
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
      class="absolute inset-0 flex flex-row items-center justify-center text-white text-center"
    >
      <div class="flex flex-col flex-grow">
        <slot />
      </div>

      <!-- Arrow Icons for navigation -->
      <div class="flex flex-col mr-3">
        <button class="btn btn-circle mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button class="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { bg } = defineProps(['bg']);
</script>
