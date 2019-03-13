<template>
    <div class="hello">
        <button @click="changeState">更改state的值</button> <br/>
        <button @click="getState">获取state的值</button> <br/>
        <span>{{cityName}}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cityName: ''
            }
        },
        methods: {
            changeState() {
                var num = Math.ceil(Math.random() * 100);
                this.$store.dispatch("setCityName", num);
            },
            getState() {
                this.cityName = this.$store.getters.getCityFn;
            },
        },
        created(){
            this.cityName = this.$store.getters.getCityFn;
        }
    }
</script>

<style scoped lang="scss">

</style>
