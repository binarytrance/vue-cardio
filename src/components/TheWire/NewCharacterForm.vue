<script>
export default {
  //   props: {
  //     addNewCharacter: {
  //       type: Function,
  //       required: true,
  //     },
  //   },
  data() {
    return {
      formValues: {
        newName: "",
        newRole: "",
      },
    };
  },
  methods: {
    submitForm(e) {
      //   console.log({ e }, "dd");
      //   // e.preventDefault();
      //   this.characters = [
      //     ...this.characters,
      //     {
      //       id: crypto.randomUUID(),
      //       name: this.formValues.newName,
      //       role: this.formValues.newRole,
      //     },
      //   ];
      //   console.log(this.characters);
      // emit event here
      this.$emit("addNewCharacter", e, this.formValues);
      // reset the state
      this.formValues.newName = "";
      this.formValues.newRole = "";
    },
  },
  emits: ["addNewCharacter"],
};
</script>

<template>
  <h2>Add new characters</h2>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name:</label>
      <input id="name" type="text" v-model="formValues.newName" />
    </div>
    <div>
      <label for="role">Role:</label>
      <input id="role" type="text" v-model="formValues.newRole" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>
