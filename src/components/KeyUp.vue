<script>
import { sharedCount, useCount } from "../composables/countStore.js";

export default {
  setup() {
    const countStore = useCount();
    return {
      sharedCount,
      countStore,
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
  <br />
  <div>Shared Count: {{ sharedCount }}</div>
  <br />
  <p>Global Count: {{ countStore.globalCount }}</p>
  <button @click="countStore.incrementGlobalCount">
    Increment Global Count by 10
  </button>
  <p>Local Count: {{ countStore.localCount }}</p>
  <button @click="countStore.incrementLocalCount">
    Increment Local Count by 100
  </button>
  <hr />
  <br />
  <label>Record on Enter key</label>
  <input v-model="keyUppedValue" @keyup.enter="recordOnKeyUp" />
  <p v-if="keyUppedValue.length && showKeyUppedValue">{{ keyUppedValue }}</p>
  <p v-else-if="!keyUppedValue.length">
    Enter text in the input field and hit the Enter key to see it recorded here.
  </p>
</template>
