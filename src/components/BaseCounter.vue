<script>
export default {
  data() {
    return {
      count: 10,
      counterValue: 2,
      counterTitle: "This title is less than 20",
    };
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
</template>
