<script setup>
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div className="flex flex-col gap-y-4 m-4">
    <div class="flex flex-col items-center">
      <p className="text-6xl font-bold wed">Welcome to our Wedding</p>
      <p className="text-xl">Meng</p>
      <p className="text-xl">Da</p>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.9987945805372!2d104.94176913514953!3d11.55418639589777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310956cd6c21950f%3A0xa570b88d1d5d175e!2sBuilding%20J%2C%20Koh%20Pich!5e0!3m2!1sen!2skh!4v1727935865790!5m2!1sen!2skh"
      height="450"
      style="border: 0"
      loading="lazy"
      title="map"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <a
      href="https://maps.app.goo.gl/a2mVUUjDNyWpkbze7"
      class="btn rounded-full"
    >
      Open in Map
    </a>
  </div>
</template>
