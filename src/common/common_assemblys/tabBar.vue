<template>
	<div class="my-tab-wrapper">
	  <el-tabs v-model="activeNameModel" type="card" @tab-click="handleClick">
	    <el-tab-pane :label="firstName" name="first" v-if="firstName"></el-tab-pane>
	    <el-tab-pane :label="secondName" name="second" v-if="secondName"></el-tab-pane>
	    <el-tab-pane :label="thirdName" name="third" v-if="thirdName"></el-tab-pane>
	    <el-tab-pane :label="fourthName" name="fourth" v-if="fourthName"></el-tab-pane>
	    <el-tab-pane :label="fifthName" name="fifth" v-if="fifthName"></el-tab-pane>
	  </el-tabs>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				label: '',
				activeNameModel: this.activeName
			}
        },
		
		watch: {
            activeName(newVal) {
                this.activeNameModel = newVal;
            }
        },
			
        props: ['firstName', 'secondName', 'thirdName', 'fourthName', 'fifthName', 'activeName'],
    
		methods: {
			handleClick (tab, event) {
				this.label = tab.label;
				this.$emit('handleClick', this.label)
			},
			changeTab(val){
				setTimeout(()=>{
					this.activeNameModel = val;
				})
			}
		}
  }
</script>

<style lang="scss" scoped>

</style>

