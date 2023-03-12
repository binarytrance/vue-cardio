<template>
  <div>
    <ul>
      <li v-for="user in users" :key="`user${user.id}`">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
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
  //   computed: {
  //     renderUsers() {
  //       console.log(this.users);
  //       const userList = this.users.map(
  //         (user) => `<li id="${user.id}">${user.name}</li>`
  //       );
  //       return userList;
  //     },
  //   },
};
</script>
