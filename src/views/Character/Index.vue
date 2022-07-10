<template>
  <div class="character">
    <div class="go-back-button">
      <button @click="changeView('home')">Go back </button>
    </div>
    <div class="character__title">
      <h3 class="character__title--text">{{ character.name }}</h3>
    </div>
    <div class="character-information__container">
      <img :src="character.image" :alt="character.name">
    </div>
  </div>
</template>

<script>
import changeView from "@/Extend/changeView";

export default {
  name: "Character",
  mixins: [changeView],
  data() {
    return {
      character: {},
    };
  },
  async created() {
    this.character = await this.$store.dispatch("getCharacterById", {
      link: this.$route.params.id,
    });
  },
};
</script>

<style lang="scss">
.character {
  color: white;
}
</style>
