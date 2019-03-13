<template>
    <div class="hello">
        s
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        },
        created(){
            console.log(this.utils.getNowMonth());
            console.log(this.utils.getNowDate());
            console.log(this.utils.getTime());
        }
    }
</script>

<style scoped lang="scss">

</style>
