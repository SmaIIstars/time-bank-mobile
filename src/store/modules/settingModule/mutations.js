import { SETTING_CHANGE_ISITEM } from "./constants";

const mutations = {
  [SETTING_CHANGE_ISITEM](state, payload) {
    console.log(1);
    state.isItem = payload.value;
  },
};

export default mutations;
