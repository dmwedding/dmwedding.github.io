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

const addToCalendar = () => {
  const event = {
    title: 'MD Wedding',
    location: 'Koh Pich, Building J',
    description: 'Wedding Event',
    startDate: '20241208T170000',
    endDate: '20241208T210000',
  };

  // Create the ICS file content
  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${event.startDate}
DTEND:${event.endDate}
LOCATION:${event.location}
DESCRIPTION:${event.description}
END:VEVENT
END:VCALENDAR
      `.trim();

  // Create a Blob from the string content
  const blob = new Blob([icsContent], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);

  // Create a link element, trigger download, and remove it
  const link = document.createElement('a');
  link.href = url;
  link.download = 'MD_Wedding.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
</script>

<template>
  <Page bg="/img/date.jpg">
    <p class="text-3xl font-bold italic gold">Date</p>

    <p class="text-3xl font-bold italic">08.12.2024</p>

    <hr class="gold w-12" />

    <div class="flex gap-2">
      <div>
        <span class="countdown text-3xl">
          <span :style="{ '--value': data.days }"></span>
        </span>
        days
      </div>
      <div>
        <span class="countdown text-3xl">
          <span :style="{ '--value': data.hours }"></span>
        </span>
        hours
      </div>
      <div>
        <span class="countdown text-3xl">
          <span :style="{ '--value': data.minutes }"></span>
        </span>
        min
      </div>
      <div>
        <span class="countdown text-3xl">
          <span :style="{ '--value': data.seconds }"></span>
        </span>
        sec
      </div>
    </div>

    <button class="btn" @click="addToCalendar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-6"
      >
        <path
          d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        />
        <path
          fill-rule="evenodd"
          d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
          clip-rule="evenodd"
        />
      </svg>

      Save the Date
    </button>
  </Page>
</template>
