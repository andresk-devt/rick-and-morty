import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    character: {},
  },
  getters: {
    getCharacters(state) {
      return state.characters;
    },
    getCharacter(state) {
      return state.character;
    },
    getEpisode(state) {
      return state.episode;
    }
  },
  mutations: {
    getCharactersData(state, data) {
      state.characters = data;
    },
    getCharacterByIdData(state, data) {
      state.character = data;
    },
  },
  actions: {
    async getCharacters({ commit }, payload) {
      const result = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
          page: payload.page
        }
      });
      commit('getCharactersData', result.data.results);
    },
    async getCharacterById({ commit }, payload) {
      const result = await axios.get(`https://rickandmortyapi.com/api/character/${payload.link}`, );
      commit('getCharacterByIdData', result.data);
      return result.data;
    },
    async getEpisode({ commit }, payload) {
      const result = await axios.get(payload.link);
      return result.data;
    }
  },
  modules: {
  }
})
