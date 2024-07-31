<script setup>
import stillDev from './components/stillDev.vue'
import Button from 'primevue/button'
</script>

<template>
  <section class="flex my-20 mx-20 text-black space-x-10">
    <div class="text-lg flex items-center bg-white rounded-full p-2 w-1/2">
      <img width="60" src="./assets/logo.png">
      <p>Enroll in the early beta tester program.</p>
    </div>
  </section>
  <section class="grid grid-cols-2 my-20 mx-20 text-black justify-between gap-10">

    <div class="bg-white rounded-xl flex flex-col justify-between h-[30rem]">
      <div class="">
        <div class="flex w-full justify-center">
          <img width="500" src="./assets/patreonLogo.png" alt="Patreon Logo">
        </div>
        <h2 class="text-4xl font-bold p-8 pt-0">Support us on Patreon</h2>
      </div>
      <div class="bg-[#F0F0F0] p-5 rounded-b-xl">
        <Button outlined as="a" label="Patreon" href="https://patreon.com/" target="_blank" rel="noopener" />
      </div>
    </div>

    <div class="bg-white rounded-xl flex flex-col justify-between h-[30rem]">
      <div class="p-8">
        <img src="./assets/PR.svg" alt="">
        <h2 class="text-4xl font-bold mt-16">Support us on Patreon</h2>
        <p class="text-lg my-4">Get the latest updates from the Odysen Team, where we transform everyday tasks into a
          spectacular circus of creativity and chaos!</p>
      </div>
      <div class="bg-[#F0F0F0] p-5 rounded-b-xl">
        <Button outlined as="a" label="Patreon" href="https://patreon.com/" target="_blank" rel="noopener" />
      </div>
    </div>

    <div class="bg-odysen-accent rounded-xl flex flex-col justify-between h-[30rem]">
      <div class="p-8">
        <img src="./assets/CDLogo.svg" alt="">
        <h2 class="text-4xl font-bold mt-16">Wiki</h2>
        <p class="text-lg my-4">Everything you need to know about Odysen, including documentation and the inner workings of the code base!</p>
      </div>
      <div class="bg-odysen-bg border border-odysen-accent p-5 rounded-b-xl">
        <Button outlined as="a" label="Patreon" href="https://patreon.com/" target="_blank" rel="noopener" />
      </div>
    </div>
  </section>
  <!-- <Button>hi i got primevue to work</Button> -->
</template>