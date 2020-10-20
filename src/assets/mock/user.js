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
});
