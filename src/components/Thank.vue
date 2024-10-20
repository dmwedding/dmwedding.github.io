<script setup lang="ts">
import Page from '../templates/Page.vue';
import Heart from './Heart.vue';
</script>

<template>
  <Page bg="/img/thank.jpg">
    <p class="text-3xl italic wed gold">We are expecting you!</p>

    <h1 class="text-7xl font-bold flex wed">
      <span>M</span>

      <Heart></Heart>

      <span>D</span>
    </h1>

    <img src="/img/us-min.png" class="w-[150px] h-[200px] shadow-lg" />

    <p class="text-3xl italic wed">
      Thank for being a part of our special day!
    </p>
  </Page>
</template>
