# nowproject

> 马上记账项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

```


```
# 技术
    vue vuex element-ui scss axios
```

```
# 主要文件夹说明
    utils文件夹下面
        xiaos.js    --->   xiaos的重新封装  
            使用：  
                this.https.post("路径", {传参})
                .then(response =>  {

                })
                .catch(response => {

                });

                this.https.get("路径", {传参})
                .then(response =>  {

                })
                .catch(response => {

                });


        filters.js  --->   全局过滤器   (已经注册到vue实列的原型上了)
            使用：   {{ val | 过滤器名称}}
                    {{ val | 过滤器名称 | 过滤器名称 ...}}

        utils.js    --->   全局方法     (已经注册到vue实列的原型上了)
            使用：  this.utils.全局方法名称
```                
        
```
# 布局方式
        <template>
        <!-- 下面是固定 abroadContent 最外层是固定布局方式 类名是固定的 -->
        <div class="abroadContent"> 

           <div class="content">  // 自己编辑
                内容
            </div>

        </div>
        </template>

        <script>
            export default {
                data () {
                    return{

                    }
                },
                methods: {

                }
            }
        </script>

        <style scoped lang="scss">
            // .abroadContent{  // 布局方式 一  版心布局
            //     height: calc(100% - 40px);  
            //     .content{
            //         background: #fff;
            //         height: calc(100% - 20px);
            //         overflow: auto;
            //     }
            // }

            .abroadContent{ // 布局方式 二  延申布局
                .content{
                    background: #fff;
                }
            }
        </style>

```
