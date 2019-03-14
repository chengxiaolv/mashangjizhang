<template>
    <div>
        <tab-bar-list class="f-l" firstName="待处理" secondName="进行中" thirdName="已完成" :defaultPitch="defaultPitch" :firstTotalNum="firstTotalNum" :secondTotalNum="secondTotalNum" :thirdTotalNum="thirdTotalNum" @handleClick="handleClick"></tab-bar-list>


        <br>
        <br>
        <br>
        <br>
        <span style="marginLeft:30px">目前书写的组件最多支持6种状态，如果不够的话  可以修改组件</span>
        <br>
        <br>
        <br>
        <br>

        <!-- 最高列表情况 -->
        <tab-bar-list class="f-l" firstName="状态1" secondName="状态2" thirdName="状态3" fourthName="状态4"  fifthName="状态5" sixthName="状态6"  :defaultPitch="defaultPitch2" :firstTotalNum="firstTotalNum2" :secondTotalNum="secondTotalNum2" :thirdTotalNum="thirdTotalNum2" :fourthTotalNum="fourthTotalNum2" :fifthTotalNum='fifthTotalNum2' :sixthTotalNum='sixthTotalNum2' @handleClick="handleClick"></tab-bar-list>


        <br>
        <br>
        <br>
        <br>

        <!-- defaultPitch 为空值情况  -->
        <tab-bar-list class="f-l" firstName="状态1" secondName="状态2" thirdName="状态3" fourthName="状态4"  fifthName="状态5" sixthName="状态6"  :defaultPitch="defaultPitch3" :firstTotalNum="firstTotalNum2" :secondTotalNum="secondTotalNum2" :thirdTotalNum="thirdTotalNum2" :fourthTotalNum="fourthTotalNum2" :fifthTotalNum='fifthTotalNum2' :sixthTotalNum='sixthTotalNum2' @handleClick="handleClick"></tab-bar-list>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                defaultPitch: 'firstName',
                firstTotalNum: '2',
                secondTotalNum: '',
                thirdTotalNum: '2',

                defaultPitch2: 'fourthName',
                firstTotalNum2: '2',
                secondTotalNum2: '',
                thirdTotalNum2: '2',
                fourthTotalNum2: '',
                fifthTotalNum2: '2',
                sixthTotalNum2: '2',


                defaultPitch3: ''
            }
        },
        methods: {
            handleClick(params){
                console.log(params);
            }
        },
        created(){

        },
    }
</script>

<style scoped lang="scss">

</style>
