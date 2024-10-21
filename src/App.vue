<script setup>
import Welcome from './components/Welcome.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {
  EffectCards,
  EffectCreative,
  Pagination,
  Mousewheel,
} from 'swiper/modules';
import Venue from './components/Venue.vue';
import Date from './components/Date.vue';
import Thank from './components/Thank.vue';
import Gallery from './components/Gallery.vue';

const modules = [EffectCards, EffectCreative, Pagination, Mousewheel];
</script>

<template>
  <div class="h-[100dvh]">
    <Swiper
      :direction="'horizontal'"
      :pagination="true"
      :slides-per-view="1"
      :space-between="0"
      :effect="'creative'"
      :creativeEffect="{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      :modules="modules"
    >
      <SwiperSlide v-slot="{ isVisible, isNext, isPrev }">
        <Welcome v-show="isVisible || isNext || isPrev"></Welcome>
      </SwiperSlide>

      <SwiperSlide v-slot="{ isVisible, isNext, isPrev }">
        <Date v-show="isVisible || isNext || isPrev"></Date>
      </SwiperSlide>

      <SwiperSlide v-slot="{ isVisible, isNext, isPrev }">
        <Venue v-show="isVisible || isNext || isPrev"></Venue>
      </SwiperSlide>

      <SwiperSlide v-slot="{ isVisible, isNext, isPrev }">
        <Gallery v-show="isVisible || isNext || isPrev"></Gallery>
      </SwiperSlide>

      <SwiperSlide v-slot="{ isVisible, isNext, isPrev }">
        <Thank v-show="isVisible || isNext || isPrev"></Thank>
      </SwiperSlide>

      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </Swiper>
  </div>
</template>
