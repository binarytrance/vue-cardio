<script>
import KeyUp from "./KeyUp.vue";
import { sharedCount } from "../composables/countStore.js";

export default {
  setup() {
    return {
      sharedCount,
    };
  },
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
        this.sharedCount = this.sharedCount + Number(cv);
      } else {
        this.count = this.count + 1;
        this.sharedCount = this.sharedCount + 1;
      }
    },
    decrementCount(cv) {
      if (this.count < Number(cv)) return; // prevent negative numbers
      if (Number(cv)) {
        this.count = this.count - Number(cv);
        this.sharedCount = this.sharedCount - Number(cv);
      } else {
        this.count--;
        this.sharedCount--;
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
  <div>Shared Count: {{ sharedCount }}</div>
  <div>
    <button v-on:click="decrementCount">-</button> &nbsp;<span>{{ count }}</span
    >&nbsp;<button v-on:click="incrementCount">+</button>

    <div>
      <label>Counter value</label>
      <button v-on:click="() => decrementCount(counterValue)">
        Decrement by {{ counterValue }}
      </button>
      <input type="number" v-model="counterValue" />
      <button v-on:click="() => incrementCount(counterValue)">
        Increment by {{ counterValue }}
      </button>
    </div>
    <h3>{{ displayCounterValueMetaData }}</h3>
  </div>

  <KeyUp />
</template>
