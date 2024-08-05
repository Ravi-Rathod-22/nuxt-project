<template>
  <div>Event ID:{{ $route.params.id }}</div>
</template>

<script setup>
const route = useRoute();
console.log(route.params.id);
</script>
