<template>
    <div>
        <list-select :options="options" @searchClick="searchClick" @clearSearch='clearSearch' ref='listselect' class="fr"></list-select>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

        <el-button type="primary" @click="reset">重置搜索框</el-button>
    </div>
</template>

<script>
    export default {
        data () {
            return{
                options: [{value: '科目编号',label: '科目编号'}, {value: '科目名称',label: '科目名称'}, {value: '方向',label: '方向'}, {value: '年初余额',label: '年初余额'}, {value: '借方发生额',label: '借方发生额'}, {value: '贷方发生额',label: '贷方发生额'}, {value: '期初余额',label: '期初余额'}],
            }
        },
        methods: {
            searchClick(val,content) { //搜索
                console.log(val);
                console.log(content);
            },
            clearSearch(val){ //清除搜索内容
                console.log(val);
            },
            reset(){ // 将搜索框恢复到最初状态
                this.$refs.listselect.reset();  //调用搜索框子组件的 重置方法。
            }
        },
        created(){
        
        }
    }
</script>

<style scoped>
  
</style>