<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
  emits: ["addToLikedCharacters"],
};
</script>

<template>
  <p v-if="characters.length === 0">All are dead!</p>
  <ul v-else>
    <li v-for="character in characters" :key="character.id">
      <span>{{ character.name }}</span>
      <button
        type="button"
        @click="$emit('addToLikedCharacters', character.id)"
      >
        Like
      </button>
    </li>
  </ul>
</template>
