<template>
    <div>
        <mainBtn :mainBtnSet="{text:'删除弹窗'}" @btnClick="showDeleteTips" ></mainBtn>

        
        <deletePopup :deleteTips="deleteTips" @cancelBtn="cancelBtn" @deleteBtn="deleteBtn" v-if="isShowDeleteTips"></deletePopup>
    </div>
</template>

<script>
    export default {
        data () {
            return{
                deleteTips: '删除后无法返回，是否确定删除暂存项目',  // 删除内容的提示文字
                isShowDeleteTips: true
            }
        },
        methods: {
            showDeleteTips(){  //展现删除弹窗
                this.isShowDeleteTips = true;
            },
            cancelBtn(){ //删除弹窗的取消事件
                this.isShowDeleteTips = false;
            },
            deleteBtn(){ //删除弹窗的确认事件
                this.isShowDeleteTips = true;
            }
        }
    }
</script>

<style scoped>
  
</style>