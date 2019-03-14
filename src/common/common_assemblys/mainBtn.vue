<template>
    <div>
        <!-- 绿色 -->
        <span class="mainBtn" :style="mainBtnSet" :class="{invalidColor: mainBtnSet.disabled,small:mainBtnSet.size}" @click.stop="btnClick">{{mainBtnSet.text}}</span> 
    </div>
</template>
<script>
    export default {
        data () {
            return{

            }
        },
        methods: {
            btnClick(){
                if(this.mainBtnSet.disabled){
                    return;
                }
                this.$emit('btnClick');
            },
        },
        props: ['mainBtnSet']
    }
</script>

<style scoped lang="scss">
    .mainBtn{
        display: inline-block;
        height: 36px;
        width: 100px;
        line-height: 36px;
        text-align: center;
        border-radius: 3px; 
        background-color: #6FB5EC;
        color:#fff;
        font-size: 14px;
        &:hover{
            cursor: pointer;
            background-color: #54A7E8;
        }
    }
    .invalidColor{  // 失效状态颜色值
        color: #fff !important;
        background-color: #D8D8D8 !important;
        &:hover{
            cursor: not-allowed !important;
            color:#fff;
            background-color: #D8D8D8 !important;
        } 
    }
    .small{  //设置小按键
        width: 80px;
        height: 30px;
        line-height: 30px;
    }
</style>