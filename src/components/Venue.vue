<script setup lang="ts">
import { onActivated, onMounted, onUnmounted, reactive, ref } from 'vue';
import Page from '../templates/Page.vue';

function calculateTimeDifference(date1, date2) {
  // Get the difference in milliseconds
  let diffInMillis = Math.abs(date2 - date1);

  // Calculate the number of days
  let days = Math.floor(diffInMillis / (1000 * 60 * 60 * 24));
  diffInMillis -= days * (1000 * 60 * 60 * 24);

  // Calculate the number of hours
  let hours = Math.floor(diffInMillis / (1000 * 60 * 60));
  diffInMillis -= hours * (1000 * 60 * 60);

  // Calculate the number of minutes
  let minutes = Math.floor(diffInMillis / (1000 * 60));
  diffInMillis -= minutes * (1000 * 60);

  // Calculate the number of seconds
  let seconds = Math.floor(diffInMillis / 1000);

  return { days, hours, minutes, seconds };
}

const marryDate = new Date('2024-12-08T00:00Z');
const data = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

let interval;
onMounted(() => {
  data.value = calculateTimeDifference(marryDate, new Date());

  interval = setInterval(() => {
    if (data.value.seconds > 0) {
      data.value.seconds--;
    } else {
      data.value.seconds = 59;

      if (data.value.minutes > 0) {
        data.value.minutes--;
      } else {
        data.value.minutes = 59;

        if (data.value.hours > 0) {
          data.value.hours--;
        } else {
          data.value.hours = 23;

          if (data.value.days > 0) {
            data.value.days--;
          }
        }
      }
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <Page bg="/img/venue.jpg">
    <p class="text-4xl font-bold italic gold wed">Venue</p>

    <p class="text-3xl font-bold italic">Koh Pich, Building J</p>
    <hr class="gold w-12" />

    <div class="mockup-browser bg-base-300">
      <div class="mockup-browser-toolbar pr-2">
        <div class="input" style="width: 100%">https://maps.app.goo.gl</div>
      </div>

      <div class="bg-base-200 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.9987945805372!2d104.94176913514953!3d11.55418639589777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310956cd6c21950f%3A0xa570b88d1d5d175e!2sBuilding%20J%2C%20Koh%20Pich!5e0!3m2!1sen!2skh!4v1727935865790!5m2!1sen!2skh"
          height="300"
          width="100%"
          style="border: 0"
          loading="lazy"
          title="map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    <a
      href="https://maps.app.goo.gl/a2mVUUjDNyWpkbze7"
      class="btn"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-6"
      >
        <path
          fill-rule="evenodd"
          d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
          clip-rule="evenodd"
        />
      </svg>

      Map
    </a>
  </Page>
</template>
