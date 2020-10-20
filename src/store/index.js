import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import mutations from "./mutations";
import { settingStore } from "./modules/settingModule";

const state = {
  name: "Smallstars",
};
// console.log("settingStore", settingStore);

const store = new Vuex.Store({
  state,
  mutations,
  modules: {
    setting: settingStore,
  },
});
console.log("store", store);

export default store;
