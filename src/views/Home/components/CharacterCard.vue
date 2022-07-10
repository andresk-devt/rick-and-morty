<template>
  <div class="character-card" @click="changeView('character', character.id)">
    <div class="character-card__image">
      <img :src="character.image" alt="Imagen" />
    </div>
    <div class="character-card__information">
      <h3 class="character-card__information--name">{{ character.name }}</h3>
      <p class="character-card__information--status">
        <span class="character-status-icon" :class="characterStatus"></span>
        {{ character.status }} - {{ character.species }}
      </p>
      <p class="character-card__information--origin">
        <span>Origin:</span> {{ character.origin.name }}
      </p>
      <p class="character-card__information--first-episode" v-if="firstEpisode">
        <span>First seen in:</span> {{ firstEpisode.name }}
      </p>
      <p class="character-card__information--last-location">
        <span>Last known location:</span> {{ character.location.name }}
      </p>
    </div>
  </div>
</template>

<script>
import changeView from "@/Extend/changeView";

export default {
  name: "CharacterCard",
  mixins: [changeView],
  props: {
    character: Object,
  },
  data() {
    return {
      firstEpisode: null,
    };
  },
  async created() {
    const response = await this.obtainTheFirstSceneIn(this.character.episode);
    this.firstEpisode = await this.$store.dispatch("getEpisode", {
      link: response,
    });
  },
  computed: {
    characterStatus() {
      switch (this.character.status) {
        case "Alive":
          return "alive";
        case "Dead":
          return "dead";
        case "unknown":
          return "unknown";
        default:
          return "";
      }
    },
  },
  methods: {
    obtainTheFirstSceneIn(array) {
      const resultItem = array.pop();
      return resultItem;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

.character-card {
  border-radius: 15px;
  width: 100%;
  min-height: 223px;
  display: flex;
  flex-direction: row;
  background-color: rgb(32, 35, 41);
  cursor: pointer;
  &__image {
    width: 45%;
    min-width: 130px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
    }
  }
  &__information {
    width: 77%;
    text-align: start;
    margin: 15px;
    color: white;
    font-family: "Arial";
    &--name {
      font-size: 1.4rem;
      text-align: start;
      margin: 0px;
    }
    &--status {
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      font-size: 0.89rem;
    }
    &--origin {
      font-size: 0.98rem;
      span {
        text-decoration: underline;
      }
    }
    &--first-episode {
      font-size: 0.98rem;
      span {
        text-decoration: underline;
      }
    }
    &--last-location {
      font-size: 0.98rem;
    }
  }
}
// Responsive card
@media (max-width: 800px) {
  .character-card {
    flex-direction: column;
    &__image {
      width: 100%;
      height: 300px;
      img {
        border-top-right-radius: 15px;
        border-bottom-left-radius: 0;
      }
    }
    &__information {
      &--origin {
        display: none;
      }
      &--status {
        margin: 4px;
      }
      &--first-episode {
        display: none;
      }
      &--last-location {
        display: none;
      }
    }
  }
}
// status character
.character-status-icon {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}
.unknown {
  background: grey;
}
.dead {
  background: rgb(214, 61, 46);
}
.alive {
  background: rgb(85, 204, 68);
}
</style>
