<script setup>
import Welcome from './components/Welcome.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

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
      :spaceBetween="30"
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
      <SwiperSlide>
        <Welcome></Welcome>
      </SwiperSlide>

      <SwiperSlide>
        <Date></Date>
      </SwiperSlide>

      <SwiperSlide>
        <Venue></Venue>
      </SwiperSlide>

      <SwiperSlide>
        <Gallery></Gallery>
      </SwiperSlide>

      <SwiperSlide>
        <Thank></Thank>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
