<template>
    <div>
        <mainBtn :mainBtnSet="{text:'登陆',disabled: false}" @btnClick="loginClick"></mainBtn>

        <br>
        <br>
            <span>单文件上传 &nbsp;&nbsp;&nbsp;&nbsp; 并且只能上传 jpg、jpeg、png、pdf 格式</span>
        <br>
        <br>
        
        <uploadFile :uploadFileSet='uploadFileSet' @getFileList="getFileList"></uploadFile>

        <br>
        <br>
        <br>
        <br>
        <br>
            <span>上传多文件  &nbsp;&nbsp;&nbsp;&nbsp; 任意格式</span>
        <br>
        <br>
        

        <uploadFile :uploadFileSet='uploadFileSet2' @getFileList="getFileList2"></uploadFile>

        
    </div>
</template>

<script>
    import axios from 'axios';
  export default {
    data () {
        return{
            uploadFileSet:{ // 上传组件的配置项   单文件  只能上传：jpg、jpeg、png、pdf
                action: '/service?platform=web&command=uploadFile&data=%7B"command" : "uploadFile", "platform" : "web","type":"accountManage"%7D', //上传文件中 上传文件的后台地址 (必填)

                uploadMore: 'one',  //上传文件中 控制是上传单文件还是多文件 (选填，默认为 ： 多文件上传   more:多文件，one：单文件)
                btnInformation: '上传文件',  //上传文件中 按键的文字。 (选填，默认文字为 ： 上传文件)
                uploadFileNum: 10, //上传文件中 上传文件的个数限制 (选填，默认个数为 ： 10)
                uploadFormat: true, // 上传文件中 上传文件的格式设置 (选填，false为不做格式限制，true为设置为只可以为：jpg、jpeg、png、pdf， 默认为false)
                btnSet:{  // 上传文件中 上传文件的按键样式控制 (选填，有默认值)
                    color: '',
                    fontSize: '',
                    // 这里可以设置按键的一切设置
                }
            },

            uploadFileSet2:{ // 上传组件的配置项  多文件   上传一切文件
                action: '/service?platform=web&command=uploadFile&data=%7B"command" : "uploadFile", "platform" : "web","type":"accountManage"%7D', //上传文件中 上传文件的后台地址 (必填)

                uploadMore: 'more',  //上传文件中 控制是上传单文件还是多文件 (选填，默认为 ： 多文件上传   more:多文件，one：单文件)
                btnInformation: '上传文件',  //上传文件中 按键的文字。 (选填，默认文字为 ： 上传文件)
                uploadFileNum: 10, //上传文件中 上传文件的个数限制 (选填，默认个数为 ： 10)
                uploadFormat: false, // 上传文件中 上传文件的格式设置 (选填，false为不做格式限制，true为设置为只可以为：jpg、jpeg、png、pdf， 默认为false)
                btnSet:{  // 上传文件中 上传文件的按键样式控制 (选填，有默认值)
                    color: '',
                    fontSize: '',
                    // 这里可以设置按键的一切设置
                }
            }
        }
    },
    methods: {
        getFileList(fileList){ // 获取上传文件的集合。
            console.log(fileList);
        },
        getFileList2(fileList){ // 获取上传文件的集合。
            console.log(fileList);
        },
        loginClick () {
            axios({
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                method: 'get',
                url: '/service',
                params: {
                    data: (() => {
                    var obj = {
                        command: 'login',
                        platform: 'web',
                        phone: '18622348235',
                        phoneCode: '1234',
                                }
                    return JSON.stringify(obj);
                    })()
                }
            }).then((req) => {
                if(req.data.statusCode === '10001') {
        
                }else {

                }
            })
                
        }
    }
  }
</script>

<style scoped>
  
</style>