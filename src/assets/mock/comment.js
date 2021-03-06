import Mock from "mockjs";

Mock.mock("/api/comment", {
  "comments|5-30": [
    {
      id: "@id",
      name: "@name(true)",
      comment: "@paragraph(1, 3)",
      commentTime: Mock.Random.date("T"),
      "avatar|1": [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603287914987&di=5fb7bbdabb6c53885ba3f84b1227c9a7&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-05-29%2F5b0cf1e640f29.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603288504773&di=43e8248498f6f611f72e2632743a8203&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F13%2F20170813173846_sB5cv.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603288750753&di=fb7a1162ccc1994daf6c2e935ab5c01d&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F143b402a0d048f0c5c113eaef249a653e52f40a8.jpg",
      ],

      "userIntegral|1-1000": 1000,
    },
  ],
});
