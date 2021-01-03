import Vue from "vue";
import Vuex from "vuex";

// モジュール
import textData from "@/store/modules/textData.js";
import imageData from "@/store/modules/imageData.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scene: 1,
    sceneStart: true,
    sceneEnd: false,
    textDelay: 40
  },
  getters: {
    scene(state) {
      return state.scene;
    },
    sceneStart(state) {
      return state.sceneStart;
    },
    sceneEnd(state) {
      return state.sceneEnd;
    },
    textDelay(state) {
      return state.textDelay;
    }
  },
  mutations: {
    sceneNext(state) {
      if (state.sceneEnd) {
        state.textDelay = 40;
        state.sceneEnd = false;
        state.sceneStart = false;
        state.scene++;
        setTimeout(() => {
          state.sceneStart = true;
        }, 100);
      } else {
        state.textDelay = 0;
      }
    },
    endScene(state) {
      state.sceneEnd = true;
    }
  },
  actions: {
    sceneNext({ commit }) {
      commit("sceneNext");
    },
    endScene({ commit }) {
      commit("endScene");
    }
  },
  modules: {
    textData,
    imageData
  }
});
