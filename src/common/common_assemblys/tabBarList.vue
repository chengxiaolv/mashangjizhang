<template>
    <div class="tab-wrapper">
        <div name="first" v-for="(item,index) in list" :key="index" v-if="item.name" @click="choice(item)" :class="{choiceItem: item.isSureChoice}">
        {{item.name}}
            <span class="ml-5" v-if="item.totalNum">({{item.totalNum}})</span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: []
            }
        },

        props: ['firstName', 'secondName', 'thirdName', 'fourthName', 'fifthName', 'sixthName', 'defaultPitch', 'firstTotalNum', 'secondTotalNum', 'thirdTotalNum', 'fourthTotalNum', 'fifthTotalNum', 'sixthTotalNum'],

        created() {
            this.list = [{
                name: this.firstName,
                isSureChoice: false,
                totalNum: this.firstTotalNum,
                flag: 'firstName'
                },
                {
                    name: this.secondName,
                    isSureChoice: false,
                    totalNum: this.secondTotalNum,
                    flag: 'secondName'
                },
                {
                    name: this.thirdName,
                    isSureChoice: false,
                    totalNum: this.thirdTotalNum,
                    flag: 'thirdName'
                },
                {
                    name: this.fourthName,
                    isSureChoice: false,
                    totalNum: this.fourthTotalNum,
                    flag: 'fourthName'
                },
                {
                    name: this.fifthName,
                    isSureChoice: false,
                    totalNum: this.fifthTotalNum,
                    flag: 'fifthName'
                },
                {
                    name: this.sixthName,
                    isSureChoice: false,
                    totalNum: this.sixthTotalNum,
                    flag: 'sixthName'
                },
            ];
            if(this.defaultPitch){ //如果传了默认选中值，则高亮默认值。   否则默认高亮列表第一项。
            this.list.forEach((item)=>{
                if(item.flag == this.defaultPitch){
                item.isSureChoice = true;
                }
            })
            }else{
            this.list[0].isSureChoice = true;
            }
        },
        methods: {
            choice(item) {
                this.list.forEach((ite,index)=>{
                    ite.isSureChoice = false;
                })
            item.isSureChoice = true;
                this.$emit('handleClick', item.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tab-wrapper {
        height: 30px;
        div {
            display: inline-block;
            height: 30px;
            line-height: 30px;
            text-align: center;
            width: 130px;
            border-right: 1px solid #BFC4D7;
            cursor: pointer;
            font-size: 14px;
            color: #434F58;
            &:hover {
                color: #3BA4EC !important;
            }
        }
        div:last-child {
            border-right: none;
        }
        .ml-5 {
            margin-left: 5px;
        }
        .choiceItem{
            color: #3BA4EC !important;
        }
    }
</style>

