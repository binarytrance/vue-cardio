<script>
import BaseCounter from "./components/BaseCounter.vue";
import TheWire from "./components/TheWire/TheWire.vue";
import BaseUsers from "./components/BaseUsers.vue";

export default {
  components: {
    BaseCounter,
    BaseUsers,
    TheWire,
  },
  data() {
    return {
      currentPage: "TheWire",
    };
  },
  methods: {
    showTheWirePage() {
      this.currentPage = "TheWire";
    },
    showCounterPage() {
      this.currentPage = "BaseCounter";
    },
    showUsersPage() {
      this.currentPage = "BaseUsers";
    },
  },
};
</script>

<template>
  <div id="app">
    <header class="header">
      <span class="logo">
        <img src="@/assets/vue-heart.png" width="30" />C'est La Vue
      </span>
      <nav class="nav">
        <a href="#" @click.prevent="showTheWirePage">The Wire</a>
        <a href="#" @click.prevent="showCounterPage">Counter</a>
        <a href="#" @click.prevent="showUsersPage">Users</a>
      </nav>
    </header>
    <!-- build an increment count -->
    <!-- <BaseCounter v-if="currentPage === 'BaseCounter'" />
    <TheWire v-else-if="currentPage === 'TheWire'" />
    <Users v-else /> -->
    <p>commit with email change</p>
    <component :is="currentPage" key="currentPage" />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}

span.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

span.logo img {
  margin-right: 8px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.nav a:last-child {
  padding-right: 0;
}
</style>
