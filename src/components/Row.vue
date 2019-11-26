<template>
    <v-container>
        <v-row justify="space-between" align-content="center" cols="12">
            <slot></slot>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Row"
});
</script>
