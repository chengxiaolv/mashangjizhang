<template>
    <div class="content">
        <el-upload class="d-ib" :action='uploadFileSet.action' multiple :on-success="handleSuccessBanner" :show-file-list="false" :before-upload="beforeAvatarUpload" v-show="isShowUploadBtn">
            <button size="medium" class="green" :style="uploadFileSet.btnSet">{{uploadFileSetCope.btnInformation}}</button>
        </el-upload>

        <div class='fileList'>
            <my-upload :model="file.originalName" :key="file.index" v-for="file in stampAnnexArray" @click="preview(file)" @handleClose="deleteFile(file)"></my-upload>
        </div>

        <!-- 图片预览 -->
        <viewer @inited="inited" ref="viewer"> 
            <img :src="previewUrl" style="display: none;">
        </viewer>

        <preview-img :previewUrl="previewUrl" v-show="previewShow" @closeClick="previewShow = false"></preview-img>
        <!-- PDF预览组件 -->
    </div>
</template>

<script>
    export default {
        data() {
        return {
            stampAnnexArray: [], // 上传文件集合
            previewUrl: '', // 阅览图片的地址
            previewShow: '',
            isShowUploadBtn: true,
            uploadFileSetCope: {
            btnInformation: '上传文件',
            uploadFileNum: 10,  //限制上传文件的个数
            uploadFormat: false, //限制上传的格式 是否为 jpg、jpeg、png、pdf   true设置jpg、jpeg、png、pdf  false设置为可以上传一切格式
            uploadMore: 'more',  //上传文件中 控制是上传单文件还是多文件 (more:多文件，one：单文件)
            }
        }
        },
        props:['uploadFileSet'],
        created(){
        this.uploadFileSet.btnInformation ? this.uploadFileSetCope.btnInformation = this.uploadFileSet.btnInformation : '';
        this.uploadFileSet.uploadFileNum ? this.uploadFileSetCope.uploadFileNum = this.uploadFileSet.uploadFileNum : '';
        this.uploadFileSet.uploadFormat ? this.uploadFileSetCope.uploadFormat = this.uploadFileSet.uploadFormat : '';
        this.uploadFileSet.uploadMore ? this.uploadFileSetCope.uploadMore = this.uploadFileSet.uploadMore : '';
        },
        methods: {
            beforeAvatarUpload(file) {// 上传文件检测
                const format = (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'application/pdf');
                const length = this.stampAnnexArray.length < this.uploadFileSetCope.uploadFileNum;
                if(this.uploadFileSetCope.uploadFormat){
                if (!format) {
                    this.$message({message: '请上传jpg、jpeg、png、pdf格式文件', type: 'info', center: true});
                    return false;
                }
                }
                if (!length) {
                    this.$message({message: `最多只可上传 ${this.uploadFileSetCope.uploadFileNum} 份文件`, type: 'info', center: true});
                    return false;
                }
                return;
            },
            handleSuccessBanner (files) {
                this.stampAnnexArray.push({
                annexType: "stamp",
                originalName: files.data.name,
                annexName: files.data.fileName,
                annexUrl: files.data.annexUrl,
                downAnnexUrl: files.data.downAnnexUrl
                });
                this.errorMsg11 = '';
                this.$emit('getFileList',this.stampAnnexArray)
                if(this.uploadFileSetCope.uploadMore == 'one'){
                    if(this.stampAnnexArray.length >= 1){
                        this.isShowUploadBtn = false;
                    }else{
                        this.isShowUploadBtn = true;
                    }
                }
            },
            preview(file) {
                this.previewUrl = '';
                this.previewUrl = file.annexUrl;
                let fileType = file.annexName.split('.');
                if ( fileType[fileType.length-1] == 'pdf') {// 如果文件格式为pdf，则使用embed显示
                    this.previewShow = true;
                }else {// 否则使用viewer显示
                    this.$viewer.show();
                }
            },
            deleteFile(file) {
                this.stampAnnexArray.splice(this.stampAnnexArray.indexOf(file), 1);
                this.$emit('getFileList',this.stampAnnexArray)
                if(this.uploadFileSetCope.uploadMore == 'one'){
                    if(this.stampAnnexArray.length >= 1){
                        this.isShowUploadBtn = false;
                    }else{
                        this.isShowUploadBtn = true;
                    }
                }
            },
            inited(viewer) {
                this.$viewer = viewer;
            },
        }
    }
</script>

<style scoped lang="scss">
    .content{
        display: flex;
        .d-ib{
            flex:0 0 110px;
            .green{
                border: solid 1px #C2E7CD;
                color: #5AC37A;
                display: inline-block;
                height: 30px;
                line-height: 30px;
                text-align: center;
                padding: 0px 20px;
                border-radius: 3px; 
                background-color: #fff;
                outline:none;
                &:hover{
                    color:#5AC37A;
                    background-color: #F1FBE7;
                    border: solid 1px #C2E7CD;
                    cursor: pointer;
                }
            }
        }
        .fileList{
        margin-left: 15px;
        }
    }
</style>