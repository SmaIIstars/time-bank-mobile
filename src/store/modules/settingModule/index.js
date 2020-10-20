import mutations from "./mutations";

const state = {
  isItem: false,
  isShowMainTabBar: true,
};

const settingStore = {
  namespaced: true,
  state,
  mutations,
};

export { settingStore };
