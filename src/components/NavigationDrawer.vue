<template>
    <nav>
        <v-app-bar app>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer floating right v-model="drawer" app>
            <v-img src="@/assets/courier-min.jpg"></v-img>
            <v-list>
                <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    router
                    :to="item.path"
                >
                    <v-list-item-icon>
                        <v-icon>mdi-{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content> {{ item.name }} </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "NavigationDrawer",
    props: {
        items: Array
    },
    data: () => ({
        drawer: false
    }),
    methods: {
        test: function(item: any) {
            console.log(item);
        }
    }
});
</script>

<style lang="scss" scoped></style>
