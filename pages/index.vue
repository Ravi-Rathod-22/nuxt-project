<template>
  <!-- <Alert />
  <Profile /> -->
  <div>
    <h1>Hello Nuxt 3</h1>
    <ContentDoc />
    <IconsBell />
    <img src="/garden.jpg" />
    <div>
      Counter:{{ counter }} <button @click="counter++">+</button
      ><button @click="counter--">-</button>
    </div>
    <Counter />
    <p>Current color: {{ color }}</p>
  </div>
</template>

<script setup>
const { sayHello } = useUtils();
sayHello();
const { $sayHello } = useNuxtApp();
$sayHello(`This my first plugin`);

// Create a reactive state and set default value
const counter = useCounter();

// ---cut-end---
const color = useColor(); // Same as useState('color')

const response = await $fetch("/api/hello");
console.log("response", response);
</script>
