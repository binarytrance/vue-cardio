<script>
import BaseCounter from "./components/BaseCounter.vue";
import KeyUp from "./components/KeyUp.vue";
import TheWire from "./components/TheWire/TheWire.vue";

export default {
  components: {
    BaseCounter,
    KeyUp,
    TheWire,
  },
  data() {
    return {
      // message: "The Wire Characters!",
      // characters: [
      //   {
      //     id: "04e32d2b-7fbb-4133-81e1-bf698ba20840",
      //     name: "McNulty",
      //     role: "Police",
      //   },
      //   {
      //     id: "f036fd2b-162e-4101-a777-b2080936408d",
      //     name: "Stringer Bell",
      //     role: "Gang",
      //   },
      //   {
      //     id: "4da7f8fb-b94e-4cc0-9561-dd02ee2aedba",
      //     name: "Carcetti",
      //     role: "Politician",
      //   },
      //   {
      //     id: "750a51fd-f07e-40cc-826a-0e8d6abb4bc0",
      //     name: "Omar",
      //     role: "Individual",
      //   },
      // ],
      // likedCharacters: [],
      // count: 10,
      // counterValue: 2,
      // counterTitle: "This title is less than 20",
      // formValues: {
      //   newName: "",
      //   newRole: "",
      // },
      // keyUppedValue: "",
      // showKeyUppedValue: false,
    };
  },
  methods: {
    // incrementCount(cv) {
    //   if (Number(cv)) {
    //     this.count = this.count + Number(cv);
    //   } else {
    //     this.count = this.count + 1;
    //   }
    // },
    // decrementCount(cv) {
    //   if (this.count < Number(cv)) return; // prevent negative numbers
    //   if (Number(cv)) {
    //     this.count = this.count - Number(cv);
    //   } else {
    //     this.count--;
    //   }
    // },
    // updateCounterValue(e) {
    //   this.counterValue = e.target.value;
    // },
    // addToLikedCharacters(likedId) {
    //   console.log("liked characters", likedId);
    //   this.likedCharacters = [
    //     ...this.likedCharacters,
    //     ...this.characters.filter((character) => character.id === likedId),
    //   ];
    // },
    // addNewCharacter(e) {
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
    //   // reset the state
    //   this.formValues.newName = "";
    //   this.formValues.newRole = "";
    // },
    // recordOnKeyUp() {
    //   this.showKeyUppedValue = true;
    // },
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
  watch: {
    count(newValue) {
      if (newValue > 20) {
        this.counterTitle = "This title is greater than 20";
      }
    },
  },
};
</script>

<template>
  <div id="app">
    <!-- build an increment count -->
    <BaseCounter />
    <TheWire />
    <!-- increments/decrements by 1, and by a user input counter -->

    <!-- v-if will remove the html node and recreate new ones (the whole DOM?) -->
    <!-- v-show use css to show/hide elements -->

    <!-- List all characters -->
    <!-- <p v-if="characters.length === 0">All are dead!</p>
    <ul v-else>
      <li v-for="character in characters" :key="character.id">
        <span>{{ character.name }}</span>
        <button
          type="button"
          v-on:click="() => addToLikedCharacters(character.id)"
        >
          Like
        </button>
      </li>
    </ul> -->

    <!-- KeyUP -->
    <KeyUp />
  </div>
</template>
