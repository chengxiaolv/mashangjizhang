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
        height: 100%;
        overflow: hidden;
    }
    .containers{
        margin: 60px 0px 0px 200px;
        padding: 20px 2% 20px;
        height: calc(100% -200px);
        background-color: #f2f2f2;
    }

</style>