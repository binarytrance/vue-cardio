<script>
import { sharedCount, useCount } from "../composables/countStore.js";
import { watch } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const countStore = useCount();
    const router = useRouter();
    let warningMessage = "";
    let timeoutID = null;
    watch(countStore.localCount, (newValue) => {
      if (timeoutID) {
        return;
      }
      console.log(
        { newValue },
        "watcher watching local count only inside keyup component"
      );
      if (newValue > 500) {
        warningMessage =
          "You got your local count inside KeyUp to go beyond 500. Redirecting you in 5 seconds";
        console.log({ warningMessage });

        timeoutID = setTimeout(() => {
          console.log("settimeout fired");
          // navigate the user to GameOver
          router.push(`/game-over?from=KeyUp`);
        }, 5000);
      }
    });
    return {
      sharedCount,
      countStore,
      warningMessage,
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
  war: {{ warningMessage }}
  <div v-if="warningMessage">
    <h2>{{ warningMessage }}</h2>
  </div>
  <div v-else>
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
      Enter text in the input field and hit the Enter key to see it recorded
      here.
    </p>
  </div>
</template>
