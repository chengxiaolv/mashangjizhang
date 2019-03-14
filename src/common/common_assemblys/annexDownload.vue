<template>
	<div class="annex-download-wrapper">
        <el-button type="text" :disabled="disabled" v-if="fileType != 'jpg' && fileType != 'JPG' && fileType != 'png' && fileType != 'PNG' 
        && fileType != 'jpeg' && fileType != 'JPEG' && fileType != 'pdf' && fileType != 'PDF'" @click="buttonClick">
            <span :title="fileName" class="fileNameWid">{{fileName}}</span><span class="fs-10">.{{fileType}}</span>
            <i class="el-icon-download ml-5 fs-12"></i>
        </el-button>
        <el-button type="text" @click="previewClick" :disabled="disabled" v-if="fileType === 'jpg' || fileType === 'JPG' || fileType === 'png' || fileType === 'PNG' 
        || fileType === 'jpeg' || fileType === 'JPEG' | fileType === 'pdf' || fileType === 'PDF'">
            <span :title="fileName" class="fileNameWid">{{fileName}}</span><span class="fs-10">.{{fileType}}</span>
        </el-button>
        <el-button type="text" :disabled="disabled" v-if="fileType === 'jpg' || fileType === 'JPG' || fileType === 'png' || fileType === 'PNG' 
        || fileType === 'jpeg' || fileType === 'JPEG' || fileType === 'pdf' || fileType === 'PDF'" @click="buttonClick">
            <i class="el-icon-download fs-12"></i>
        </el-button>
	</div>
</template>

<script>
    export default {
        data () {
            return {
                fileName: '',
                fileType: ''
            }
        },

        watch:{
            buttonWord(newVal){
                if (newVal) {
                    this.fileName = newVal.split('.')[0];
                    this.fileType = newVal.split('.')[1];
                }
            }
        },

        created() {
            if (this.buttonWord) {
                this.fileName = this.buttonWord.split('.')[0];
                this.fileType = this.buttonWord.split('.')[1];
            }
        },
        watch:{
            buttonWord(newVal){
                this.fileName = newVal.split('.')[0];
                this.fileType = newVal.split('.')[1];
            }
        },
        methods:{
            buttonClick(){
                this.$emit('buttonClick', this.buttonWord)
            },
            previewClick(){
                this.$emit('previewClick', this.buttonWord)
            },
        },
        props: ['buttonWord', 'disabled']
    }
</script>

<style lang="scss" scoped>
    @import "../../../static/main.css";
    .annex-download-wrapper{
        display: inline-block;
        margin-right: 30px;
        .el-button{
            color: #6F9AE0;
            font-size: 14px;
            padding: 0;
            display: inline-block;
        }
        .el-button:hover{
            color: #4374C4;
        }
        .el-button.is-disabled {
            color: #D8D8D8;
        }
        .el-button+.el-button {
            margin-left: 0px;
        }
        .fileNameWid{
            margin-top: 7px;
            max-width: 175px;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .el-icon-download{
            font-size: 16px;
        }
    }

</style>