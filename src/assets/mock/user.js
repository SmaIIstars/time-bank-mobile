import Mock from "mockjs";

const phonePrefixs = ["135"];

Mock.Random.extend({
  phone: function() {
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/);
  },
});

// Mock.mock("/api/user", "post", (data) => ({
//   username: "@name",
// }));

Mock.mock("/api/user", {
  username: "@cname",
  email: "@email",
  phone: "@phone",
  birthday: "@date",
  city: "@city(true)",
  avatar:
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/quality,q_1/resize,m_mfit,h_60,w_60",

  "integral|1-1000": 1000,
  duration: {
    "volunteer|1-1000": 500,
    "personal|1-1000": 500,
  },
  isLogined: true,
  authority: 1,
});
