import colors from "vuetify/es5/util/colors";

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/incaravans-vue/"
        }
      }
    : {};

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - In Caravans",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "title",
        name: "title",
        content: "In Caravans - Psychedelic Indie Rock"
      },
      {
        hid: "description",
        name: "description",
        content:
          "In Caravans is an indie/alternative rock band. Love, addiction, loneliness, stress and friendship - those are the themes of In Caravans' music. We are IN CARAVANS."
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "music, psychedelic indie rock, band, In Caravans, alternative"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "In Caravans - Psychedelic Indie Rock"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.incaravans.com/"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Love, addiction, loneliness, stress and friendship - those are the themes of In Caravans' music. Though at times mysterious and hard to decipher, the lyrics often describe the hardest emotions like jealousy and insecurity with a unique clarity."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://www.incaravans.com/ogimage.jpg"
      },
      { hid: "og:type", property: "og:type", content: "website" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, {rel: "stylesheet", href: "https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css"}]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/globalStyle.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify", "@nuxt/typescript-build"],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.green.base,
          secondary: colors.lightGreen.darken4,
          accent: colors.deepOrange.lighten1,
          disabled: colors.grey.base,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    defaultAssets: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  },
  ...routerBase
};
