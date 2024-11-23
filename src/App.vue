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
import { ref } from 'vue';

const modules = [EffectCards, EffectCreative, Pagination, Mousewheel];

const song = ref();

window.addEventListener(
  'mouseclick',
  () => {
    if (!song.value.paused) {
      return;
    }

    song.value.play();
  },
  { once: true }
);

const onSlideChange = () => {
  if (!song.value.paused) {
    return;
  }

  song.value.play();
};

document.addEventListener('visibilitychange', function (ev) {
  if (ev.target.hidden) {
    song.value?.pause();
  } else {
    song.value?.play();
  }
});
</script>

<template>
  <audio ref="song" loop>
    <source src="/songs/beautiful_in_white.mp3" type="audio/mp3" />
    Your browser does not support the audio element.
  </audio>

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
      @slideChange="onSlideChange"
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
