<template>
    <div class="login-wrapper">
        <h1>
            <img src="../../assets/logo.png">
            <span>马上记账管理系统</span>
        </h1>
        <div class="login-item">
            <div class="item-title">
                <span>数据维护平台</span>
            </div>
            <div class="item-log">
                <div class="log">
                    <span class="icon">
                        <img src="../../assets/account.png">
                    </span>
                    <el-input placeholder="请输入手机号" v-model="userName"></el-input>
                </div>
                <div class="log">
                    <span class="icon">
                        <img src="../../assets/password.png">
                    </span>
                    <el-input placeholder="请输入验证码" type="password" v-model="password"></el-input>
                </div>
                <el-button @click='login'>登 &nbsp;&nbsp;录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                userName: '',
                password: '',
            }
        },
        methods:{
            login(){
                this.$router.push("/main")
            }
        }
    }
</script>
<style lang="scss">
	.login-wrapper {
		width: 100%;
		height: 100%;
		background: url('../../assets/bg.png');
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		h1 {
			position: absolute;
			left: 2%;
			top: 30px;
			display: flex;
			height: 48px;
			img {
				width: 48px;
				height: 48px;
				border-radius: 50%;
			}
			span {
				font-size: 16px;
				color: #fff;
				margin-left: 20px;
				line-height: 48px;
				display: inline-block;
			}
		}
		.login-item {
			width: 570px;
			height: 350px;
			background: #fff;
			.item-title {
				width: 100%;
				height: 52px;
				line-height: 52px;
				text-align: center;
				font-size: 16px;
				display: flex;
				span {
					display: inline-block;
					width: 100%;
					background: #53B5E3;
					color: #fff;
				}
			}
			.item-log {
				width: 100%;
				padding-top: 20px;
				.log {
					width: 350px;
					margin: 0 auto;
					height: 46px;
					margin-top: 30px;
					display: flex;
					border: 1px solid #DEDEDE;
					&:hover {
						border: 1px solid #7DC3E4;
					}
					span {
						display: inline-block;
						width: 40px; 
						height: 36px;
						margin-top: 5px;
						position: relative;
						border-right: 1px solid #DEDEDE;
						img {
							position: absolute;
							left: 30%;
							top: 30%;
						}
					}
					.el-input {
						height: 46px !important;
						.el-input__inner {
							height: 46px !important;
							line-height: 46px !important;
							border: none;
						}
					} 
				}
			}
		}
		.el-button {
			width: 350px;
			margin: 0 auto;
			display: block;
			margin-top: 30px;
			background: #7DC3E4;
			color: #fff;
			font-size: 18px;
			&:hover {
				background: #63B7DF
			}
		}
	}
</style>