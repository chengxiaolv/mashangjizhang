<template>
<div id="apps">
    <side-bar class="navMenu"></side-bar>
    <v-head class="v_head"></v-head>
    <router-view class="containers" />
</div>
</template>

<script>
import vHead from "./head.vue";
import sideBar from "./sidebar.vue";
export default {
    data() {
        return {

        };
    },
    components: {
        vHead,
        sideBar,
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
}
</script>
 
<style lang="scss" scoped>
    #apps {
        padding-top: 60px;
        height: calc(100% - 60px);
        background-color: #f2f2f2;
    }
    .containers{
        margin: 0px 0px 0px 200px;
    }

</style>