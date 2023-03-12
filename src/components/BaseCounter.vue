<script>
import KeyUp from "./KeyUp.vue";

export default {
  data() {
    return {
      count: 10,
      counterValue: 2,
      counterTitle: "This title is less than 20",
    };
  },
  watch: {
    count(newValue) {
      if (newValue > 20) {
        this.counterTitle = "This title is greater than 20";
      }
    },
  },
  computed: {
    displayCounterValueMetaData() {
      if (this.counterValue > 20) {
        return "Counter Value is greater than 20";
      } else {
        return "Counter Value is lesser than 20";
      }
    },
  },
  methods: {
    incrementCount(cv) {
      if (Number(cv)) {
        this.count = this.count + Number(cv);
      } else {
        this.count = this.count + 1;
      }
    },
    decrementCount(cv) {
      if (this.count < Number(cv)) return; // prevent negative numbers
      if (Number(cv)) {
        this.count = this.count - Number(cv);
      } else {
        this.count--;
      }
    },
    updateCounterValue(e) {
      this.counterValue = e.target.value;
    },
  },
  components: { KeyUp },
};
</script>

<template>
  <h2>Counter</h2>
  <h3>{{ counterTitle }}</h3>
  <div>
    <button v-on:click="incrementCount">+</button>&nbsp; <span>{{ count }}</span
    >&nbsp;
    <button v-on:click="decrementCount">-</button>
    <div>
      <label>Counter value</label>
      <button v-on:click="() => incrementCount(counterValue)">
        Increment by {{ counterValue }}
      </button>
      <input type="number" v-model="counterValue" />
      <button v-on:click="() => decrementCount(counterValue)">
        Decrement by {{ counterValue }}
      </button>
    </div>
    <h3>{{ displayCounterValueMetaData }}</h3>
  </div>

  <KeyUp />
</template>
