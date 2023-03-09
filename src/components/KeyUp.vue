<script>
export default {
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
  <label>Record on Enter key</label>
  <input v-model="keyUppedValue" @keyup.enter="recordOnKeyUp" />
  <p v-if="keyUppedValue.length && showKeyUppedValue">{{ keyUppedValue }}</p>
  <p v-else-if="!keyUppedValue.length">
    Enter text in the input field and hit the Enter key to see it recorded here.
  </p>
</template>
