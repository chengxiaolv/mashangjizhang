<template>
	<div class="preview-img-wrapper">
    <div class="previewBg" @click="closeClick"></div><!-- PDF格式文件预览 -->
    <transition name="el-fade-in-linear">
        <div class="preview_wrapper">
            <i class="el-icon-error" @click="closeClick"></i>
            <embed :src="previewUrl" class="pdfPreview">
        </div>
    </transition>
	</div>
</template>

<script>
    export default {
        data () {
            return {
            maxH: 0,
            maxW: 0,
            }
        },

        props: ['previewUrl'],

        created() {

        },

        methods: {
            closeClick(){
                this.$emit('closeClick');
            },
        }
    }
</script>
<style scoped lang="scss">
    .preview_wrapper{
        position: fixed;
        left: 250px;
        top: 100px;
        width: 70%;
        height:60%;
        .pdfPreview{
            width: 100%;
            height:100%;
        }
        .el-icon-error{
            position: absolute;
            right: -18px;
            top: -18px;
            z-index: 9;
            font-size: 20px;
            color: #EC9999;
            &:hover{
                cursor: pointer;
                color: #6FB5EC;
            }
        }
    }

</style>
