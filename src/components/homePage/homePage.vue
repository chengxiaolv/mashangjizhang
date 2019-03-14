<template>
    <!-- 下面是固定 abroadContent 最外层是固定布局方式 -->
    <div class="abroadContent">  
        <div class="content">
            内容
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return{

            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="scss">
    // .abroadContent{  // 布局方式 一  版心布局
    //     height: calc(100% - 40px);  
    //     .content{
    //         background: #fff;
    //         height: calc(100% - 20px);
    //         overflow: auto;
    //     }
    // }

    .abroadContent{ // 布局方式 二  延申布局
        .content{
            background: #fff;
        }
    }
</style>