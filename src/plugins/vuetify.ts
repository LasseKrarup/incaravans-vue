import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: colors.green.base,
                secondary: colors.lightGreen.darken4,
                accent: colors.deepOrange.lighten1,
                disabled: colors.grey.base
            }
        },
        dark: true
    }
});
