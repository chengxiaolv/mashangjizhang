<template>
    <div class="common_assemblys_example clearfix">
        <div class="sidebar">
            <ul>
                <li v-for="(item,index) in lis" :key="index" @click="liChoose(item,index)" :class="{active: item.show}">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="content">
        <div class="title">
            <span>组件实列</span>
        </div>
            <div class="show_assembly">
                <tabBarList_example v-if="show_assembly == 'tabBarList_example'"></tabBarList_example>
                <tabBar_example v-if="show_assembly == 'tabBar_example'"></tabBar_example>
                <breadcrumb_example v-if="show_assembly == 'breadcrumb_example'"></breadcrumb_example>
                <listSelect_example v-if="show_assembly == 'listSelect_example'"></listSelect_example>
                <secondaryBtn_example v-if="show_assembly == 'secondaryBtn_example'"></secondaryBtn_example>
                <auxiliaryBtn_example v-if="show_assembly == 'auxiliaryBtn_example'"></auxiliaryBtn_example>
                <mainBtn_example v-if="show_assembly == 'mainBtn_example'"></mainBtn_example>
                <deletePopup_example v-if="show_assembly == 'deletePopup_example'"></deletePopup_example>
                <uploadFile_example v-if="show_assembly == 'uploadFile_example'"></uploadFile_example>
                <annexDownload_example v-if="show_assembly == 'annexDownload_example'"></annexDownload_example>
            </div>
        </div>
    </div>
</template>

<script>
    import tabBarList_example from './tabBarList_example.vue';
    import tabBar_example from './tabBar_example.vue';
    import breadcrumb_example from './breadcrumb_example.vue';
    import listSelect_example from './listSelect_example.vue';
    import secondaryBtn_example from './secondaryBtn_example.vue';
    import auxiliaryBtn_example from './auxiliaryBtn_example.vue';
    import mainBtn_example from './mainBtn_example.vue';
    import deletePopup_example from './deletePopup_example.vue';
    import uploadFile_example from './uploadFile_example.vue';
    import annexDownload_example from './annexDownload_example.vue';
    export default {
        data() {
            return {
                lis: [{
                    name: "状态列表",
                    show: true,
                    val: 'tabBarList_example'
                },{
                    name: "标签页按钮",
                    show: false,
                    val: 'tabBar_example'
                },{
                    name: "面包屑",
                    show: false,
                    val: 'breadcrumb_example'
                },{
                    name: "列表查询搜索框",
                    show: false,
                    val: 'listSelect_example'
                },{
                    name: "次级辅色按钮",
                    show: false,
                    val: 'secondaryBtn_example'
                },{
                    name: "辅色按钮",
                    show: false,
                    val: 'auxiliaryBtn_example'
                },{
                    name: "主色按键",
                    show: false,
                    val: 'mainBtn_example'
                },{
                    name: "删除弹窗",
                    show: false,
                    val: 'deletePopup_example'
                },{
                    name: "上传文件组件",
                    show: false,
                    val: 'uploadFile_example'
                },{
                    name: "下载文件组件",
                    show: false,
                    val: 'annexDownload_example'
                }
                ],
                show_assembly: 'tabBarList'
            }
        },
        methods: {
            liChoose (item,index) {
                this.lis.forEach((item) => {
                    item.show = false
                });
                item.show = true
                sessionStorage.setItem("activeIndex",index);  //记录当刷新的时候，记录当前侧边栏点击状态。
                this.show_assembly = item.val;
            },
        },
        created(){
            var activeIndex = sessionStorage.getItem("activeIndex");   //记录当刷新的时候，得到当前侧边栏点击状态。
            if(!activeIndex){
                this.lis[0].show = true;
                this.show_assembly = this.lis[0].val;
                return;
            }
            this.lis.forEach((item) => {
                item.show = false
            })
            this.lis[activeIndex].show = true;
            this.show_assembly = this.lis[activeIndex].val;
        },
        components:{
            tabBarList_example,
            tabBar_example,
            breadcrumb_example,
            listSelect_example,
            secondaryBtn_example,
            auxiliaryBtn_example,
            mainBtn_example,
            deletePopup_example,
            uploadFile_example,
            annexDownload_example
        }
    }
</script>

<style scoped lang="scss">
    .common_assemblys_example{
        height: 100%;
        width: 100%;
        display: flex;
        .sidebar{
            width: 200px;
            background: #165370;
            height: 100%;
            overflow-y: auto;
            li{
                color:#fff;
                text-align: center;
                height:40px;
                line-height: 40px;
                font-size: 17px;
                &:hover{
                cursor: pointer;
                background-color: #2F6B88;
                }
            }
            .active{
                background: #23749A !important;
            }
        }
        .content{
            flex: 1;
            background-color: #f2f2f2;
            .title{
                width: 100%;
                height: 60px;
                line-height: 60px;
                background-color: #6BBDDE;
                color: #fff;
                text-align: center;
                font-size: 20px;
            }
            .show_assembly{
                margin: 20px;
                height: calc(100% - 130px);
                padding: 15px;
                overflow: auto;
                background-color: #fff;
            }
        }
    }
</style>