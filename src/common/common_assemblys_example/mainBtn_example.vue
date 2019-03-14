<template>
    <div>
        <!-- 可以直接这样写一个对象 -->
        <mainBtn :mainBtnSet='mainBtnSet' @btnClick="btnClick"></mainBtn>

        <br>
        <br>
        <br>

        <!-- 也可以在data里面定义一个变量来控制 -->
        <mainBtn :mainBtnSet="{text:'新建职员',disabled: true}" @btnClick="btnClick"></mainBtn>

        <br>
        <br>
        <mainBtn :mainBtnSet="{text:'新建职员'}" @btnClick="btnClick"></mainBtn>


    </div>
</template>

<script>
    export default {
        data () {
            return{
                mainBtnSet: {
                    text: '提交', // 这是必填的，按键的名称 
                    disabled: false, // 这个是选填的  true的时候  按键禁用
                    size: true, // 这个是选填的  false的时候或者不填的时候为大按键   true的时候为小按键 

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
            btnClick(){
                console.log('按键点击了');
            }
        }
    }
</script>

<style scoped>
  
</style>