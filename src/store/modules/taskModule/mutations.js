import { CHANGE_TASK_LIST } from "./constants";

const mutations = {
  [CHANGE_TASK_LIST](state, payload) {
    state.taskList = payload.tasks;
  },
};

export default mutations;
