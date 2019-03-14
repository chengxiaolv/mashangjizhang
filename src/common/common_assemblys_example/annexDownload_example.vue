<template>
    <div>
        <annexDownload  v-for="file in annexArray" :key="file.index"  @buttonClick="TicketOpeningBtn(file)" :buttonWord="file.originalName" @previewClick="previewClick(file)"></annexDownload>

        <viewer @inited="inited" ref="viewer">
            <img :src="previewUrl" style="display: none;">
        </viewer>

        <previewImg :previewUrl="previewUrl" v-show="previewShow" @closeClick="previewShow = false"></previewImg><!-- PDF预览组件 -->

        <form action="http://v4.tzucpa.cn/downFile" id="reimbursementParticulars" name="reimbursementParticulars" method="post">
            <input type="text" name="originalName" :value="fileOriginalName" style="display:none">
            <input type="text" name="annexUrl" :value="fileDownAnnexUrl" style="display:none">
        </form>
    </div>
</template>

<script>
    export default {  
        data () {
            return{
                previewUrl: '',
                fileOriginalName: '',
                fileDownAnnexUrl: '',
                previewShow: false,
                annexArray: [
                    { 
                    originalName: '1548141691371.pdf',
                    annexUrl:'http://v4.tzucpa.cn/file/biddingAnnex/1548386199474.pdf'
                    },
                    { 
                    originalName: '1548141691371.png',
                    annexUrl: "http://v4.tzucpa.cn/file/accountManage/1548819084033.jpg"
                    },
                    { 
                    originalName: '1548141691371.docx',
                    annexUrl: 'http://v4.tzucpa.cn/file/biddingAnnex/1544079529900.docx'
                    }
                ],
            }
        },
        methods: {
            inited (viewer) {
                this.$viewer = viewer;
            },
            TicketOpeningBtn(item){ //下载发票图片
                this.fileOriginalName = item.annexName;
                this.fileDownAnnexUrl = item.annexUrl;
                setTimeout(() => {
                    this.submitClick();
                }, 10);
            },
            previewClick (item) {
                this.previewUrl = item.annexUrl;
                let fileType = item.originalName.split('.');
                if ( fileType[fileType.length-1] == 'pdf') {// 如果文件格式为pdf，则使用embed显示
                    this.previewShow = true;
                }else {// 否则使用viewer显示
                    this.$viewer.show();
                }
            },
            submitClick() {
                document.reimbursementParticulars.submit();
            },
        }
    }
</script>

<style scoped>
  
</style>