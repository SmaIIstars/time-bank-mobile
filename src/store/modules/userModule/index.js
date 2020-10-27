import mutations from "./mutations";

const state = {
  userInfo: {
    username: "Smallstars",
    email: "smallstars@qq.com",
    phone: "12345678932",
    birthday: "2020-01-01",
    city: "四川省 成都市",
    avatar:
      "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1603182745&di=384572a47bf8631185dc7f4b93c8a20a&src=http://pic1.win4000.com/wallpaper/2018-05-29/5b0cf1e640f29.jpg",

    integral: 0,
    duration: {
      volunteer: 0,
      personal: 0,
    },
    isLogined: false,

    /**
     * 0 -> 未登录
     * 1 -> 普通
     * 2 -> vip
     * 3 -> 管理员
     */

    authority: 0,
  },
};

const userStore = {
  namespaced: true,
  state,
  mutations,
};

export { userStore };
