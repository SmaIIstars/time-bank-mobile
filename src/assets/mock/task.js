import Mock from "mockjs";

Mock.mock("/api/user", {
  taskname: "@cname",
  taskid: "@cname",
  city: "@city(true)",
  imgUrl: [
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/quality,q_1/resize,m_mfit,h_60,w_60",
  ],

  "integral|1-1000": 1000,
  duration: {
    "volunteer|1-1000": 500,
    "personal|1-1000": 500,
  },
  authority: 1,
});
