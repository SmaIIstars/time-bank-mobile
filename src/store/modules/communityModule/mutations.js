import { CHANGE_COMMUNITYINFO } from "./constants";

const mutations = {
  [CHANGE_COMMUNITYINFO](state, payload) {
    state.communityObject = payload;
  },
};

export default mutations;
