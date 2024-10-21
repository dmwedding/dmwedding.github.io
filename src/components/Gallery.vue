<script setup lang="ts">
import { onMounted } from 'vue';
import Page from '../templates/Page.vue';
import Heart from './Heart.vue';
import HeartStatic from './HeartStatic.vue';

onMounted(() => {
  console.log(1);
});
</script>

<template>
  <Page bg="/img/gallery.jpg">
    <p class="text-5xl italic wed gold">Our Story</p>

    <ul class="timeline timeline-vertical">
      <li>
        <div class="timeline-start timeline-box bg-transparent border-none">
          <span class="gold">2015</span>
          <img src="/img/2015.jpg" alt="2015" class="h-[75px] rounded-lg" />
        </div>
        <div class="timeline-middle">
          <HeartStatic></HeartStatic>
        </div>
        <hr class="bg-primary" />
      </li>

      <li>
        <hr class="bg-primary" />
        <div class="timeline-middle">
          <HeartStatic></HeartStatic>
        </div>
        <div class="timeline-end timeline-box bg-transparent border-none">
          <span class="gold">2016</span>
          <img src="/img/2016.jpg" alt="2016" class="h-[60px] rounded-lg" />
        </div>
        <hr class="bg-primary" />
      </li>

      <li>
        <hr class="bg-primary" />
        <div class="timeline-start timeline-box bg-transparent border-none">
          <span class="gold">2017</span>
          <img src="/img/2017.jpg" alt="2017" class="h-[60px] rounded-lg" />
        </div>
        <div class="timeline-middle">
          <HeartStatic></HeartStatic>
        </div>
        <hr class="bg-primary" />
      </li>

      <li>
        <hr class="bg-primary" />
        <div class="timeline-end timeline-box bg-transparent border-none">
          <span class="gold">2022</span>
          <img src="/img/2022.jpg" alt="2022" class="h-[60px] rounded-lg" />
        </div>
        <div class="timeline-middle">
          <HeartStatic></HeartStatic>
        </div>
        <hr class="bg-primary" />
      </li>

      <li>
        <hr class="bg-primary" />
        <div class="timeline-middle">
          <HeartStatic></HeartStatic>
        </div>
        <div class="timeline-start timeline-box bg-transparent border-none">
          <span class="gold">2023</span>
          <img src="/img/2023.jpg" alt="2023" class="h-[60px] rounded-lg" />
        </div>
        <hr class="bg-primary" />
      </li>

      <li>
        <hr />
        <div class="timeline-end timeline-box bg-transparent border-none">
          <span class="gold">08.12.2024</span>
          <div class="flex justify-center">
            <img
              src="/img/us-min.png"
              alt="us-min"
              class="h-[60px] rounded-lg"
            />
          </div>
        </div>
        <div class="timeline-middle">
          <Heart></Heart>
        </div>
      </li>
    </ul>
  </Page>
</template>
