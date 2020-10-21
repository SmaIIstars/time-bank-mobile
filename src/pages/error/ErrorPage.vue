<!--
 * @Autor: Smallstars
 * @Date: 2020-10-21 11:11:09
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-21 11:36:38
 * @Description: 
-->
<template>
  <div>ErrorPage</div>
</template>

<script>
import { mapMutations } from "vuex";
import { CHANGE_ISSHOW_MAINTABBAR } from "store/modules/settingModule/constants";

export default {
  name: "ErrorPage",
  created() {
    this.initValue();
  },

  data() {
    return {};
  },

  methods: {
    ...mapMutations("setting", {
      changeIsShowMainTabBar: CHANGE_ISSHOW_MAINTABBAR,
    }),
    initValue() {
      this.changeIsShowMainTabBar({ value: false });
    },
  },
};
</script>

<style scoped>
</style>