// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: '<http://localhost:3000>', // 後端 API 的基本 URL
  },
};
