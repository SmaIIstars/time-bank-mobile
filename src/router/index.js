import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 多路由捕捉报错
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

const Login = () => import("pages/login/Login.vue");
const Register = () => import("pages/register/Register.vue");
const Find = () => import("pages/find/Find.vue");

const Task = () => import("pages/task/Task.vue");

const Community = () => import("pages/community/Community.vue");

const Profile = () => import("pages/profile/Profile.vue");

const Personal = () => import("pages/profile/cpns/personal/Personal.vue");
const Service = () => import("pages/profile/cpns/service/Service.vue");
const Settings = () => import("pages/profile/cpns/settings/Settings.vue");

const routes = [
  {
    path: "",
    redirect: "/find",
  },

  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },

  {
    path: "/find",
    component: Find,
  },
  {
    path: "/task",
    component: Task,
  },
  {
    path: "/community",
    component: Community,
  },
  {
    path: "/profile",
    component: Profile,
    children: [
      {
        path: "personal",
        component: Personal,
      },
      {
        path: "service",
        component: Service,
      },
      {
        path: "settings",
        component: Settings,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
