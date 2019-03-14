<template>
	<div class="search-wrapper">
    <el-button type="primary" :style="{background: searchColor,width: searchWidth, height: searchHeight,borderColor:borderColor,color:fontColor}" :icon="searchIcon" @click="searchClick">{{searchWord}}</el-button>
	</div>
</template>
<script>
	export default {
		data () {
			return {

			}
		},
		methods:{
			searchClick(){	
				this.$emit('searchClick',this.searchWord);
			}
		},
		props: ['searchColor','searchWord', 'searchWidth', 'searchHeight','searchIcon','borderColor','fontColor']
	}
</script>
<style lang="scss" scoped>
	.search-wrapper{
		display: inline-block;
        .el-button{
            padding: 0;
        }
	}

</style>