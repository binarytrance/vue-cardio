<script>
import { reactive } from "vue";

export default {
  async setup() {
    console.log("setup");
    const state = reactive({
      composableUsers: [],
    });

    const fetchUsers = async () => {
      return await fetch("https://jsonplaceholder.typicode.com/users").then(
        (res) => res.json()
      );
    };
    state.composableUsers = await fetchUsers();
    console.log("pp", state.composableUsers);
    return {
      composableUsers: state?.composableUsers || [],
    };
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      this.users = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<template>
  asdf
  <div>
    <h2>created</h2>
    <ul>
      <li v-for="user in users" :key="`user${user.id}`">{{ user.name }}</li>
    </ul>
  </div>
  <div>
    <h2>setup</h2>
    <ul>
      <li v-for="user in composableUsers" :key="`user${user.id}`">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
