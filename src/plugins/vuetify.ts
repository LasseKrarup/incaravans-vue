import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: colors.cyan.lighten2,
                secondary: colors.yellow.base,
                accent: colors.deepOrange.lighten1
            }
        },
        dark: true
    }
});
