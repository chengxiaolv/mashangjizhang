<template>
    <div>
        <span @click.stop="btnClick" :style="auxiliaryBtnSet" :class="classObject">{{auxiliaryBtnSet.text}}</span> 
    </div>
</template>
<script>
    export default {
        data () {
            return{
                classObject:{
                invalidColor: this.auxiliaryBtnSet.disabled,
                [this.auxiliaryBtnSet.colorFlag]: this.auxiliaryBtnSet.colorFlag
                }
            }
        },
        methods: {
            btnClick(){
                if(this.auxiliaryBtnSet.disabled){
                    return;
                }
                this.$emit('btnClick');
            },
        },
        props: ['auxiliaryBtnSet']
    }
</script>

<style scoped lang="scss">
    span{
        display: inline-block;
        height: 36px;
        line-height: 36px;
        text-align: center;
        width: 100px;
        border-radius: 3px; 
        font-size: 13px;
        color:#fff;
        &:hover{
            cursor: pointer;
        }
    }
    .red{
        background-color: #EC9999;
        &:hover{
            background-color: #EB8686;
        }
    }
    .orange{
        background-color: #ECBE6B;
        &:hover{
            background-color: #EDAD38;
        }
    }
    .cyan{
        background-color: #77CAE2;
        &:hover{
            background-color: #5ABDD9;
        }
    }
    .roseRed{
        background-color: #ED8DAA;
        &:hover{
            background-color: #DD7192;
        }
    }
    .darkBlue{
        background-color: #8EBEEE;
        &:hover{
            background-color: #68A8E9;
        }
    }
    .grassGreen{
        background-color: #7DDAA8;
        &:hover{
            background-color: #5DC48D;
        }
    }
    .bluishGreen{
        background-color: #6CCAD5;
        &:hover{
            background-color: #54C2CF;
        }
    }
    .invalidColor{  // 单独设置深红失效状态
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