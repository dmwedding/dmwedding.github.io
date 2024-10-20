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
      class="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
    >
      <div class="flex flex-col flex-grow items-center justify-center gap-2">
        <slot />
      </div>

      <!-- Arrow Icons for navigation -->
      <!-- <div class="flex flex-row pr-1">
        <button class="btn btn-circle mb-2 btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button class="btn btn-circle btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const { bg } = defineProps(['bg']);
</script>
