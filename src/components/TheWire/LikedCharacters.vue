<script>
export default {
  props: {
    likedCharacters: {
      type: Array,
      required: true,
    },
  },
  //   methods: {},
};
</script>

<template>
  <h2 v-if="likedCharacters.length">Liked Characters</h2>
  <ul v-if="likedCharacters.length">
    <li v-for="likedCharacter in likedCharacters" :key="likedCharacter.id">
      {{ likedCharacter.name }}
    </li>
  </ul>
</template>
