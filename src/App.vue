<script>
import BaseCounter from "./components/BaseCounter.vue";
import KeyUp from "./components/KeyUp.vue";
import TheWire from "./components/TheWire/TheWire.vue";

export default {
  components: {
    BaseCounter,
    KeyUp,
    TheWire,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div id="app">
    <!-- build an increment count -->
    <BaseCounter />
    <TheWire />

    <!-- KeyUP -->
    <KeyUp />
  </div>
</template>
