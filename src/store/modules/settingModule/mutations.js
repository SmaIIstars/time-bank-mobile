import { CHANGE_ISITEM, CHANGE_ISSHOW_MAINTABBAR } from "./constants";

const mutations = {
  [CHANGE_ISITEM](state, payload) {
    // console.log(1);
    state.isItem = payload.value;
  },

  [CHANGE_ISSHOW_MAINTABBAR](state, payload) {
    state.isShowMainTabBar = payload.value;
  },
};

export default mutations;
