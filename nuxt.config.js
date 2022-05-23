export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 8081,
  },
  head: {
    title: "mvp-games",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: ""},
      {name: "format-detection", content: "telephone=no"},
    ],
    link: [{rel: "icon", type: "image/x-icon", href: "/favicon.svg"}],
    script: [
      {src: "/js/index.js", defer: true},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/font.css", "animate.css/animate.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src: "@/plugins/firebase.js", ssr: false}],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
