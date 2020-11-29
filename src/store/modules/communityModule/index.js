import mutations from "./mutations";

const state = {
  communityObject: {},
};

const communityStore = {
  namespaced: true,
  state,
  mutations,
};

export { communityStore };
