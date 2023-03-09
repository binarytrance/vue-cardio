<script>
import TheWireCharactersList from "./TheWireCharactersList.vue";
import NewCharacterForm from "./NewCharacterForm.vue";
import LikedCharacters from "./LikedCharacters.vue";

export default {
  components: {
    NewCharacterForm,
    LikedCharacters,
    TheWireCharactersList,
  },
  data: () => ({
    message: "The Wire Characters!",
    characters: [
      {
        id: "04e32d2b-7fbb-4133-81e1-bf698ba20840",
        name: "McNulty",
        role: "Police",
      },
      {
        id: "f036fd2b-162e-4101-a777-b2080936408d",
        name: "Stringer Bell",
        role: "Gang",
      },
      {
        id: "4da7f8fb-b94e-4cc0-9561-dd02ee2aedba",
        name: "Carcetti",
        role: "Politician",
      },
      {
        id: "750a51fd-f07e-40cc-826a-0e8d6abb4bc0",
        name: "Omar",
        role: "Individual",
      },
    ],
    likedCharacters: [],
  }),
  methods: {
    addToLikedCharacters(likedId) {
      console.log("liked characters", likedId);
      this.likedCharacters = [
        ...this.likedCharacters,
        ...this.characters.filter((character) => character.id === likedId),
      ];
    },
    addNewCharacter(e, formValues) {
      console.log({ e }, "dd");
      // e.preventDefault();
      this.characters = [
        ...this.characters,
        {
          id: crypto.randomUUID(),
          name: formValues.newName,
          role: formValues.newRole,
        },
      ];
      console.log(this.characters);
    },
  },
};
</script>

<template>
  <div>{{ message }}</div>
  <TheWireCharactersList
    :characters="characters"
    @addToLikedCharacters="addToLikedCharacters"
  />

  <!-- add new character form -->
  <NewCharacterForm @addNewCharacter="addNewCharacter" />

  <!-- Liked characters -->
  <LikedCharacters :likedCharacters="likedCharacters" />
</template>
