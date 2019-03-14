<template>
    <div class="content">
        <tabBar :firstName='tab_bar_list.firstName' :secondName='tab_bar_list.secondName' :thirdName='tab_bar_list.thirdName' :fourthName='tab_bar_list.fourthName' :fifthName='tab_bar_list.fifthName' :activeName='tab_bar_list.activeName' @handleClick="tabBarClick"></tabBar>


        <br>
        <br>
        <br>
        <span>目前书写的组件最多支持5个标签，如果不够的话  可以修改组件</span>
        <br>
        <br>
        <br>
        <br>

        <tabBar :firstName='tab_bar_list2.firstName' :secondName='tab_bar_list2.secondName' :thirdName='tab_bar_list2.thirdName' :activeName='tab_bar_list2.activeName' @handleClick="tabBarClick"></tabBar>


    </div>
</template>

<script>
    export default {
        data () {
            return{
                tab_bar_list:{
                    firstName : '资产',
                    secondName : '负债',
                    thirdName : '权益',
                    fourthName : '成本',
                    fifthName : '损益',
                    activeName: 'second'
                },

                tab_bar_list2:{
                    firstName : '资产',
                    secondName : '负债',
                    thirdName : '权益',
                    activeName: 'first'
                }
            }
        },
        methods: {
            tabBarClick(params){
                console.log(params);
            }
        }
    }
</script>

<style scoped lang='scss'>
    .content{
        width: 80%;
        height: 70%;
        background-color: #f2f2f2;
        padding: 20px;
    }
</style>