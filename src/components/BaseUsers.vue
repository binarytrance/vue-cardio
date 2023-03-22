<script setup>
import { reactive, defineProps, defineEmits, ref, computed } from "vue";

// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

// const pokemon = ref([]);

defineProps({
  title: {
    type: String,
    default: "Setup",
  },
});

defineEmits(["fav-user"]);

const state = reactive({
  composableUsers: [],
});

const fetchUsers = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
};
state.composableUsers = await fetchUsers();
console.log("pp", state.composableUsers);
</script>

<template>
  <!-- asdf -->
  <!-- <div>
    <h2>created</h2>
    <ul>
      <li v-for="user in users" :key="`user${user.id}`">{{ user.name }}</li>
    </ul>
  </div> -->
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="user in state.composableUsers" :key="`user${user.id}`">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
