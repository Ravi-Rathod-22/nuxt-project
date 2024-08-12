<template>
  <!-- <Alert />
  <Profile /> -->
  <div>
    <h1>Hello Nuxt 3</h1>
    <ContentDoc />
    <IconsBell />
    <img src="/garden.jpg" />
  </div>
</template>

<script setup>
const { sayHello } = useUtils();
sayHello();
const { $sayHello } = useNuxtApp();
$sayHello(`This my first plugin`);
</script>
