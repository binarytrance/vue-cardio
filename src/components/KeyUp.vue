<script>
import { sharedCount } from "../composables/countStore.js";

export default {
  setup() {
    return {
      sharedCount,
    };
  },
  data() {
    return {
      keyUppedValue: "",
      showKeyUppedValue: false,
    };
  },
  methods: {
    recordOnKeyUp() {
      this.showKeyUppedValue = true;
    },
  },
};
</script>

<template>
  <div>Shared Count: {{ sharedCount }}</div>
  <label>Record on Enter key</label>
  <input v-model="keyUppedValue" @keyup.enter="recordOnKeyUp" />
  <p v-if="keyUppedValue.length && showKeyUppedValue">{{ keyUppedValue }}</p>
  <p v-else-if="!keyUppedValue.length">
    Enter text in the input field and hit the Enter key to see it recorded here.
  </p>
</template>
