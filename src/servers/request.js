import axios from "axios";

export default function request(config) {
  const instance = axios.create({
    baseURL: "/api",
    timeout: 5000,
  });

  // axios拦截器
  instance.interceptors.request.use(
    (config) => {
      // 更改为使用本地mock数据
      config.baseURL = "/api";
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  // 响应拦截
  instance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );

  return instance(config);
}
