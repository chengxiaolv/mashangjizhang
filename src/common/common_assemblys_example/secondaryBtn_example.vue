<template>
    <div>
        <!-- 可以直接这样写一个对象 -->
        <secondaryBtn :secondaryBtnSet="{colorFlag:'green',text:'上传报告',disabled: false}" @btnClick="buttonClickBreen"></secondaryBtn>
        <br>
        <secondaryBtn :secondaryBtnSet="{colorFlag:'green',text:'上传报告',disabled: true}" @btnClick="buttonClickBreen"></secondaryBtn>

        <br>
        <br>

        <!-- 也可以在data里面定义一个变量来控制 -->
        <secondaryBtn :secondaryBtnSet="secondaryBtnSetBlue" @btnClick="buttonClickBreen"></secondaryBtn>

        <br>
        <br>

        <secondaryBtn :secondaryBtnSet="{colorFlag:'bluish_green',text:'编 辑',disabled: false}" @btnClick="buttonClickBreen"></secondaryBtn>

        <br>
        <br>

        <secondaryBtn :secondaryBtnSet="{colorFlag:'red',text:'冻结账户',disabled: false}" @btnClick="buttonClickBreen"></secondaryBtn>

        <br>
        <br>

        <secondaryBtn :secondaryBtnSet="{colorFlag:'violet',text:'离 职',disabled: false}" @btnClick="buttonClickBreen"></secondaryBtn>

        <br>
        <br>

        <secondaryBtn :secondaryBtnSet="{colorFlag:'orange',text:'取消冻结',disabled: false}" @btnClick="buttonClickBreen"></secondaryBtn>

        <br>
        <br>

        <secondaryBtn :secondaryBtnSet="{colorFlag:'crimson',text:'驳回', disabled: true}" @btnClick="buttonClickBreen"></secondaryBtn>
        <br>
        <secondaryBtn :secondaryBtnSet="{colorFlag:'crimson',text:'驳回', disabled: false}" @btnClick="buttonClickBreen"></secondaryBtn>

    </div>
</template>
 
<script>
    export default {
        data () {
            return{
                secondaryBtnSetBlue:{ // 设置次级辅色按钮的配置集合  
                    colorFlag: 'blue',  // 这是必填的， 选者你的按键种类。 目前只有这七种  green(绿色)   blue(蓝色)  bluish_green(青蓝)  red(红色)  violet(紫色)  orange(橘色)  crimson(深红)
                    text: '开票申请', // 这是必填的，按键的名称
                    disabled: false, // 这个是选填的  true的时候  按键禁用

                    // 这里可以设置 按键的一切配置。 如果不配置的话，会使用组件的默认值。（以下都是选填的。）
                    width: '',
                    height: '',
                    lineHeight: '',
                    marginLeft: '',
                    marginRight: '',
                    marginTop: '',
                    marginBottom: '',
                    padding: ''
                }
            }
        },
        methods: {
            buttonClickBreen(){
                console.log('按键点击了');
            }
        }
    }
</script>

<style scoped>
  
</style>