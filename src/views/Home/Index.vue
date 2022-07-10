<template>
  <div class="home">
    <div class="characters-container">
      <div class="title-container">
        <h3 class="title-container__content">Rick and Morty</h3>
      </div>
      <div class="character-container">
        <div
          class="character-container--item"
          v-for="(character, index) in characters"
          :key="index"
        >
          <CharacterCard :character="character" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CharacterCard from "./components/CharacterCard.vue";

export default {
  name: "Home",
  components: {
    CharacterCard,
  },
  data() {
    return {
      page: 0,
    };
  },
  created() {
    this.$store.dispatch("getCharacters", { page: this.page });
  },
  computed: {
    ...mapGetters({ characters: "getCharacters" }),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap");

.home {
  background-color: rgba(32, 35, 41, 0.6);
}
.characters-container {
  width: 80%;
  border-radius: 25px;
  margin: auto;
  text-align: center;
}
.title-container {
  padding: 5px;
  font-family: "Shadows Into Light", cursive;
  font-size: 1.5rem;
  color: white;
  text-decoration: line-through;
}
.character-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  &--item {
    width: 45%;
    padding: 8px;
    @media (max-width: 1305px) {
      width: 60%;
    }
  }
}
</style>
