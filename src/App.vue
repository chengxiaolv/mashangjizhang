<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        width: 100%;
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
    html,body{
        height:100%;
        width:100%;
    }
    .abroadContent{
        background-color: #f2f2f2;
        padding: 20px 2% 20px;
    }
</style>
