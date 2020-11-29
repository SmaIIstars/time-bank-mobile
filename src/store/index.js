import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { settingStore } from "./modules/settingModule";
import { userStore } from "./modules/userModule";
import { taskStore } from "./modules/taskModule";
import { communityStore } from "./modules/communityModule";

const store = new Vuex.Store({
  modules: {
    setting: settingStore,
    user: userStore,
    task: taskStore,
    community: communityStore,
  },
});
// console.log("store", store);

export default store;
