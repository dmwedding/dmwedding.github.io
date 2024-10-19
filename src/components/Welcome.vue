<script setup lang="ts">
import Page from '../templates/Page.vue';
</script>

<template>
  <Page bg="/img/welcome.jpg">
    <!-- Wedding Title -->
    <h1 class="text-4xl font-bold">Meng & Da</h1>
    <p class="text-xl italic">Wedding</p>

    <!-- Decorative Icon -->
    <div class="my-6">
      <div class="w-16 h-16 mx-auto">
        <!-- Your decorative SVG or image here -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="w-full h-full stroke-current"
        >
          <path
            d="M12 2a9.99 9.99 0 0 0-10 10c0 5.5 4.5 10 10 10s10-4.5 10-10c0-5.5-4.5-10-10-10z"
          ></path>
        </svg>
      </div>
    </div>

    <!-- Wedding Text -->
    <p class="text-2xl font-light">You make me</p>
    <p class="text-4xl font-bold">Happy</p>
    <p class="text-xl italic mt-2">XOXO</p>
  </Page>
</template>
