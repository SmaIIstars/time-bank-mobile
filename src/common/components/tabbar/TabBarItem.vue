<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 10:31:03
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-18 13:05:48
-->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="item-icon">
      <slot name="item-icon"></slot>
    </div>

    <div v-else :style="activeStyle" class="item-icon">
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle" class="item-text">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  created() {},

  props: {
    path: {
      type: String,
      default: "",
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },

  data() {
    return {};
  },

  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      // console.log(this.activeColor);
      return this.isActive ? { color: this.activeColor } : {};
    },
  },

  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;
}

.item-text {
  margin-top: 3px;
}
</style>