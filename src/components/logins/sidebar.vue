<template>
  <div class="menu">
    <div class="menu_head">
        <div style="height: 30px;width: 100%;margin-top:50px;"><img src="../../assets/tzucpaLogo.png" style="width: 54px;height: 40px;"/></div>
        <div class="companyNameBox">
                <span class="companyNameOne">马上记账管理系统</span><br>
        </div>
    </div>
    <div class="side_divider"></div>
    <div class="nav_menu">
        <el-menu background-color="#334B72" text-color="#fff" router :default-active="$route.path" :unique-opened="true">
            <el-menu-item  class="nav_menu_item" index="/homePage" >
                <i class="iconfont icon-bid"></i>
                <span class="title">首页</span>
            </el-menu-item>
        </el-menu>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
            }
        },

        created() {
            
        },
        methods:{
            
        }
    }
</script>

<style lang="scss" scoped="scoped">

    ::-webkit-scrollbar {
    width: 5px;
    }
    ::-webkit-scrollbar-thumb {
    width: 5px;
    border-radius: 10px;
    background: #646569;
    }
    ::-webkit-scrollbar-track {
    background: #334B72;
    }
    .menu {
        .menu_head{
            position: fixed;
            width: 200px;
            background: #334B72;
            top: 0;
            height: 172px;
            // line-height: 62px;
            text-align: center;
            font-size: 13px;
            color: #FFFFFF;
            z-index: 10001;
            .companyNameBox{
            height: 142px;
            margin-top: 20px;
            .companyNameOne{
                line-height: 35px;;
            }
            }
        }
        .side_divider {
            position: fixed;
            width: 200px;
            top: 172px;
            background: linear-gradient(to left,#334B72,#fff,#334B72);
            height: 1px;
            z-index: 10001;
        }
        .nav_menu {
            position: fixed;
            width: 200px;
            background: #334B72;
            overflow-y: auto;
            overflow-x: hidden;
            top: 173px;
            bottom: 0;
            padding-top: 20px;
            z-index: 10001;
            .nav_menu_item {
            height: 50px;
            line-height: 50px;
            color: #CEDCF3 !important;
            .title {
                margin-left: 18px;
                font-size: 14px;
            }
            }
            .nav_menu_item.is-active {
            background: #526789 !important;
            border-left: 4px solid #6BBDDE !important;
            i {
                margin-left: 6px !important;
                color: #ffffff !important;
            }
            .title {
                color: #fff !important;
            }
            }
            .nav_menu_item:hover {
            background: #3C5783 !important;
            border-left: 4px solid #487F95 !important;
            i {
                margin-left: 6px !important;
                color: #ffffff !important;
            }
            .title {
                color: #fff !important;
            }
            }
            
            .group_item {
            height: 50px;
            background: #243A5D !important;
            .circle {
                display: inline-block;
                border: 1px solid #fff;
                border-radius: 50%;
                width: 8px;
                height: 8px;
                margin-left: 20px;
                background: #385076;
            }
            .item_title {
                margin-left: 10px;
                font-size: 14px;
                color: #CEDCF3;
            }
            }
            .group_item.is-active {
            background: #243A5D !important;
            .circle {
                background: #00C2FF;
                border: 1px solid #00C2FF;
            }
            .item_title {
                color: #6BBDDE !important;
            }
            }
            .group_item:hover {
            background: #3C5783 !important;
            .item_title {
                color: #fff !important;
            }
            }

            .group_title {
            margin-left: 18px;
            font-size: 14px;
            color: #CEDCF3;
            }

            i {
            margin-left: 10px;
            color: #CEDCF3;
            }
        }
    }
</style>