<template>
  <div class="head-wrapper">
        <span class="seeCommonAssemblys" @click="seeCommonAssemblys">查看组件实列</span>
		<el-popover popper-class="user-click-popper" placement="bottom" trigger="hover" v-model="popover">
			<!-- <el-button type="text" class="">切换单位</el-button><br> -->
			<el-button type="text" class="operation">设置</el-button><br>
			<el-button type="text" @click="popupShow = true;popover = false" class="operation">退出</el-button>
			<div class="user click" slot="reference">
				<div class="user_photo">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536126990316&di=00e73b0e32c74b46a866fa0c83772c1a&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F13%2F19%2F78%2F82f58PICnxS_1024.jpg">
				</div>
				<div class="user_name">彭于晏</div>
				<div class="icon">
					<i class="el-icon-caret-bottom"></i>  
				</div>
			</div>
		</el-popover>
  	<div class="welcome">彭于晏，欢迎您！</div>

    <div class="zc_dialog clear">
      <el-dialog :show-close="false" :visible.sync="popupShow" center>
        <div class="al-c">是否确认退出？</div>
        <div class="dialog-footer">
            <el-button class="cancel" @click="popupShow = false">取消</el-button>
            <el-button class="sure" @click="logOut">确定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
            popupShow: false,
            popover: false
		}
	},
	created() {

	},
    methods: {
		logOut(){
            this.$router.push("/login")
        },
        seeCommonAssemblys(){
            window.open("/#/commonAssemblysExample");
        }
	}
}
</script>

<style lang="scss" scoped>
    .head-wrapper {
        position: fixed;
        height: 60px;
        width: 100%;
        top: 0;
        background: #6BBDDE;
        z-index: 10000;
        .user {
                width: auto;
            float: right;
            height: 40px;
            margin-right: 45px;
            margin-top: 10px;
            background: #fff;
            border-radius: 50px;
            .user_photo {
                float: left;
                width: 36px;
                height: 36px;
                img {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    border: 2px solid #fff;
                    box-shadow: 0 0 2px 0;
                }
            }
            .user_name {
                padding: 0 15px;
                float: left;
                text-align: center;
                line-height: 40px;
                font-size: 14px;
                color: #818699;
            }
            .icon {
                float: left;
                margin-right: 5px;
                line-height: 40px;
                color:#818699;
                font-size: 20px;
                font-weight: bold;
            }
        }
        .welcome {
            float: right;
            color: white;
            margin-right: 30px;
            line-height: 60px;
            color: #ffffff;
            font-size: 13px;
            cursor: default;
        }
        .seeCommonAssemblys{
            margin-left: 230px;
            height: 60px;
            line-height: 60px;
            color:#fff;
            font-size: 18px;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
        }
	}
	.click {
		cursor: pointer;
    }
    .al-c {
        text-align: center;
    }
    .operation{
        color: #818699;
        text-align: center;
        display: block;
        width: 100%;
        font-size: 15px;
        &:hover{
            background-color: #6BBDDE;
        }
    }
    .operation:last-child{
        margin-top: -10px;
    }
</style>
