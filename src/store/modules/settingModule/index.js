import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import mutations from "./mutations";

const state = {
  isItem: false,
};

const settingStore = {
  namespaced: true,
  state,
  mutations,
};

export { settingStore };
