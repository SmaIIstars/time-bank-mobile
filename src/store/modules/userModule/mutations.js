import { CHANGE_USERINFO } from "./constants";

const mutations = {
  [CHANGE_USERINFO](state, payload) {
    // console.log(payload.userInfo);
    state.userInfo = payload.userInfo;
    state.userInfo.isLogined = true;
  },
};

export default mutations;
