<template>
    <div class="my-upload-wrapper">
        <!-- 除图片以外的文件 -->
        <div class="c-d-q" v-if="fileType != 'jpg' && fileType != 'JPG' && fileType != 'png' && fileType != 'PNG' 
        && fileType != 'jpeg' && fileType != 'JPEG' && fileType != 'pdf' && fileType != 'PDF'" :title="fileName">{{fileName}}</div>
        <!-- 图片文件 -->
        <div class="c-p" v-show="!popup" @click="click" v-if="fileType === 'jpg' || fileType === 'JPG' || fileType === 'png' || fileType === 'PNG' 
        || fileType === 'jpeg' || fileType === 'JPEG' || fileType === 'pdf' || fileType === 'PDF'" :title="fileName">{{fileName}}</div>
        <!-- 图片文件并且组件处于弹窗中（预览效果变为打开新页面预览） -->
        <a class="c-p" v-show="popup" v-if="fileType === 'jpg' || fileType === 'JPG' || fileType === 'png' || fileType === 'PNG' 
        || fileType === 'jpeg' || fileType === 'JPEG' || fileType === 'pdf' || fileType === 'PDF'" :href="popup" target="_blank">{{fileName}}</a>
        <span class="fs-10 c-d">.{{fileType}}</span>
        <sup><i class="el-icon-error" :style="{color: iconColor}" @click="isShowDeleteTips = true" v-show="!deleteB"></i></sup>

        <deletePopup :deleteTips="deleteTips" @cancelBtn="cancelBtn" @deleteBtn="handleClose" v-if="isShowDeleteTips"></deletePopup>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                iconColor: '#EC9999',
                fileName: '',
                fileType: '',
                deleteTips: '删除后将无法恢复，请问是否确认删除？',  // 删除内容的提示文字
                isShowDeleteTips: false
            }
        },

        props: ['model', 'deleteB', 'popup'],
        created(){
            let list = this.model.split(".");
            list.forEach((item,index)=>{
                if(index !== list.length-1){
                    if(index == list.length-2){
                        this.fileName += item;
                    }else{
                        this.fileName += item + '.'
                    }
                }
            })
            this.fileType = list[list.length-1];
        },
        methods: {
            click(){
                this.$emit('click', this.model);
            },
            handleClose(){
                this.$emit('handleClose', this.model);
                this.isShowDeleteTips = false;
            },
            cancelBtn(){ //删除弹窗的取消事件
                this.isShowDeleteTips = false;
            },
        },
    }
</script>

<style lang="scss" scoped>

    .my-upload-wrapper {
        display: inline-block;
        margin-right: 20px;
        height: 26px;
        line-height: 26px;
        .el-icon-error {
            cursor: pointer;
            font-size: 12px;
            float: left;
            margin-top: 2px;
        }
        .el-icon-error:hover {
            color: #6FB5EC !important;
        }
        .fs-10 {
            font-size: 10px;
            float: left;
            margin-top: 2px;
            color: #4374C4;
        }
        .c-p {
            cursor: pointer;
            float: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #4374C4;
            text-decoration: none;
        }
        .c-d {
            cursor: default;
            float: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #4374C4;
            height: 26px;
            line-height: 23px;
            font-size: 13px;
        }
        .c-d-q{
            cursor: default;
            float: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #4374C4;
            height: 26px;
        }
        .f-l {
            float: left;
        }
        .al-c {
            text-align: center;
        }
    }
</style>