<template>
  <p>Sheeeeeeeeeeeeeeet! You dead! {{ query }}</p>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const query = route?.query.from;

console.log({ query, route });
</script>
