
<!-- 弹窗组件 -->
<template>
	<div class="delete-wrapper" id='wrapper'>
		<div class="delete_center" @click.stop=" 'stopBubbling' ">
			<div class="content">
				{{deleteTips}}
			</div>
			<div class="btn">
				<auxiliaryBtn :auxiliaryBtnSet="{colorFlag:'red',text:'取消',marginRight:'15px',size:true}" @btnClick="cancelBtn"></auxiliaryBtn>
				<mainBtn :mainBtnSet="{text:'确定',size:true}" @btnClick="deleteBtn"></mainBtn>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {

			}
		},
		methods: {
			cancelBtn(){ // 取消
				this.$emit("cancelBtn")
			},
			deleteBtn(){ // 确定删除
				this.$emit("deleteBtn")
			}
		},
		props: ['deleteTips']
	}
</script>
<style lang="scss" scoped>
	.delete-wrapper{
        position: fixed;
        top: 60px;
        right: 0;
        bottom: 0;
        left: 200px;
        z-index: 9998;
        display: block;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
        background-color:rgba(0,0,0,.3);
        outline: 0;
		.delete_center{
			width: 360px;
			height: 150px;
			position: absolute;
			left: 50%;
			margin-left: -160px;
			top: 50%;
			margin-top: -60px;
			background: #fff;
			border-radius: 8px;
			z-index: 9999;
			font-size: 14px;
			.content{
				color: #606266;
				height: 91px;
				line-height: 99px;
				text-align: center;
			}
			.btn{
				display: flex;
				padding-left: 88px;
				.auxiliaryBtn{
					margin-left: 25px;
				}
			}
		}
	}
	@keyframes fade-in {  
        0% {opacity: 0;}/*初始状态 透明度为0*/  
        40% {opacity: 0;}/*过渡状态 透明度为0*/  
        100% {opacity: 1;}/*结束状态 透明度为1*/  
	}  
	@-webkit-keyframes fade-in {/*针对webkit内核*/  
        0% {opacity: 0;}  
        40% {opacity: 0;}  
        100% {opacity: 1;}  
	}  

	#wrapper {    
        // animation: fade-in;/*动画名称*/  
        animation: fade-in;/*动画名称*/  
        animation-duration: .25s;/*动画持续时间*/  
        -webkit-animation:fade-in .25s;/*针对webkit内核*/  
	}  
</style>