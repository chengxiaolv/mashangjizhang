<template>
  <div>
    <!-- 可以直接这样写一个对象 -->
    <auxiliaryBtn :auxiliaryBtnSet="{colorFlag:'red',text:'取消',disabled: false}" @btnClick="buttonClickBreen"></auxiliaryBtn>

    <br>
    <br>

    <!-- 也可以在data里面定义一个变量来控制 -->
    <auxiliaryBtn :auxiliaryBtnSet="auxiliaryBtnSet" @btnClick="buttonClickBreen"></auxiliaryBtn>

    <br>
    <br>

    <auxiliaryBtn :auxiliaryBtnSet="{colorFlag:'cyan',text:'编辑',disabled: false}" @btnClick="buttonClickBreen"></auxiliaryBtn>

    <br>
    <br>

    <auxiliaryBtn :auxiliaryBtnSet="{colorFlag:'roseRed',text:'撤销',disabled: false}" @btnClick="buttonClickBreen"></auxiliaryBtn>

    <br>
    <br>

    <auxiliaryBtn :auxiliaryBtnSet="{colorFlag:'darkBlue',text:'关联',disabled: false}" @btnClick="buttonClickBreen"></auxiliaryBtn>

    <br>
    <br>

    <auxiliaryBtn :auxiliaryBtnSet="{colorFlag:'grassGreen',text:'重新选择',disabled: false}" @btnClick="buttonClickBreen"></auxiliaryBtn>

    <br>
    <br>

    <auxiliaryBtn :auxiliaryBtnSet="{colorFlag:'bluishGreen',text:'退回',disabled: false}" @btnClick="buttonClickBreen"></auxiliaryBtn>
    <br>
    <auxiliaryBtn :auxiliaryBtnSet="{colorFlag:'bluishGreen',text:'退回',disabled: true}" @btnClick="buttonClickBreen"></auxiliaryBtn>
    

    <br>
    <br>

  </div>
</template>
 
<script>
  export default {
    data () {
        return{
            auxiliaryBtnSet:{ // 设置次级辅色按钮的配置集合  
                colorFlag: 'orange',  // 这是必填的， 选者你的按键种类。目前只有这七种   red(红色)  orange(橘红)  cyan(青色)  roseRed(玫红)  darkBlue(深蓝)  grassGreen(草绿)  bluishGreen(青蓝)
                text: '暂存', // 这是必填的，按键的名称 
                disabled: false, // 这个是选填的  true的时候  按键禁用
                size: true, // 这个是选填的  false的时候或者不填的时候  大按键   true的时候为小按键 

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