module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        pages: "@/pages",
        router: "@/router",
        servers: "@/servers",
        store: "@/store",
        utils: "@/utils",
      },
    },
  },
  productionSourceMap: false,
};
