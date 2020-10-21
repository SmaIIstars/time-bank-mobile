import mutations from "./mutations";

const state = {
  taskList: [],
};

const taskStore = {
  namespaced: true,
  state,
  mutations,
};

export { taskStore };
