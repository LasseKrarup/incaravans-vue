<template>
    <v-app>
        <NavigationDrawer :items="navigationLinks"></NavigationDrawer>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";

export default Vue.extend({
    name: "App",

    components: {
        NavigationDrawer
    },

    data: () => ({
        navigationLinks: [
            {
                name: "Home",
                path: "/",
                icon: "home"
            },
            {
                name: "About",
                path: "/about",
                icon: "information"
            },
            {
                name: "The Music",
                path: "/music",
                icon: "music-note"
            },
            {
                name: "Contact",
                path: "/contact",
                icon: "phone"
            }
        ]
    })
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400|Roboto+Mono:300,400&display=swap");

html {
    font-family: "Montserrat", sans-serif;
}

h1 {
    font-family: "Roboto Mono", monospace;
    font-size: 38pt;
    font-weight: 300;
    letter-spacing: 12pt;
    text-align: center;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}
</style>
