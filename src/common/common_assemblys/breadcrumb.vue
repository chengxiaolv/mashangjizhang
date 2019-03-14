<template>
	<div class="breadcrumb-wrapper">
        <span class="breadcrumbItem" @click="firstGo">{{firstBread}}</span>
        <span class="symbol" v-if="secondBread">></span><span class="breadcrumbItem" v-if="secondBread" @click="secondGo">{{secondBread}}</span>
        <span class="symbol" v-if="thirdBread">></span><span class="breadcrumbItem" v-if="thirdBread">{{thirdBread}}</span>
        <span class="symbol" v-if="fourthBread">></span><span class="breadcrumbItem" v-if="fourthBread">{{fourthBread}}</span>
        <span class="symbol" v-if="fifthBread">></span><span class="breadcrumbItem" v-if="fifthBread">{{fifthBread}}</span>
	</div>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },

        props: ['firstBread', 'secondBread', 'thirdBread', 'fourthBread', 'fifthBread', 'firstUrl', 'secondUrl', 'firstStatusMark','secondStatusMark'],

        components: {

        },

        methods: {
            // 跳转的时候  可以携带些字段过去，记录跳转页面状态。
            firstGo() {
                this.$router.push({name: this.firstUrl, params: {statusMark: this.firstStatusMark}})  // console.log(this.$route.params)
                this.$emit('firstGo');
            },
            secondGo() {
                this.$router.push({name: this.secondUrl,params: {statusMark: this.secondStatusMark}}); // console.log(this.$route.params)
                this.$emit('secondGo');
            }
        },

    }
</script>

<style lang="scss" scoped>
    @import "../../../static/main.css";

    .breadcrumb-wrapper{
        color: #7B868D;
        width: 96%;
        margin-left: 2%;
        margin-bottom: 20px;
        font-size: 14px;
        .symbol {
            margin-left: 3px;
            margin-right: 3px;
            cursor: default;
        }
        .breadcrumbItem {
            margin-left: 3px;
            cursor: pointer;
        }
        .breadcrumbItem:first-child {
            margin-left: 0px;
            cursor: pointer !important;
        }
        .breadcrumbItem:last-child {
            cursor: default;
        }
        .breadcrumbItem:hover {
            color: #3BA4EC;
        }
        .breadcrumbItem:first-child:hover {
            color: #3BA4EC !important;
        }
        .breadcrumbItem:last-child:hover {
            color: #7B868D;
        }
    }
</style>