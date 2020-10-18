import Mock from "mockjs";

Mock.Random.extend({
  phone: function() {
    var phonePrefixs = ["132", "135", "189"]; // 自己写前缀哈
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/); //Number()
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
});
