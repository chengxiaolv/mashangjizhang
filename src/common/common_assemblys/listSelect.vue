<template>
	<div class="list-select-wrapper">
        <div class="cling_search_select_csswrapper">
            <el-select v-model="type" @change="getPlaceholder" placeholder="查询类型" v-if="!type">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
        <div class="single_select_csswrapper" v-if="type">
            <el-select v-model="type" @change="getPlaceholder">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
        <div class="cling_search_input_csswrapper" v-if="type">
            <el-input :placeholder="placeholder" v-model="content" clearable @clear="clearSearch" @keyup.native="content = content.replace(/[^\-?\d.]/g,'')" v-if="type == '预收金额'" @keyup.enter.native="searchClick"></el-input>
            <el-input :placeholder="placeholder" v-model="content" clearable @clear="clearSearch" v-else @keyup.enter.native="searchClick"></el-input>
        </div>
        <div class="cling_select_button_csswrapper">
            <search-b :searchWidth="searchWidth" :searchColor="searchColor" :searchHeight="searchHeight" :searchIcon="searchIcon" class="search_b" @searchClick="searchClick"></search-b>
        </div>
	</div>
</template>

<script>
    import searchB from '@/common/common_assemblys/searchB.vue'
    export default {
        data () {
            return {
                value: '',
                type: this.searchType,
                content: this.searchContent,
                placeholder: '',
                searchColor: '#fff',
                searchWidth: '30px',
                searchHeight: '30px',
                searchIcon: 'el-icon-search',
            }
        },

        props: ['options', 'searchType', 'searchContent'],

        components: {
            searchB
        },

        methods: {
            getPlaceholder() {
                this.placeholder = `请输入${this.type}`;
            },
            clearSearch() { 
                this.$emit('clearSearch', this.type)
            },
            searchClick () { 
                this.$emit('searchClick', this.type, this.content)
            },
            reset(){  //重置到原始状态。
                this.content = '';
                this.type = '';
            }
        },
    }
</script>

<style lang="scss" scoped>

    .list-select-wrapper{
        display: inline-block;
        .search_b {
            margin-left: -9.5px;
            margin-right: 40px;
        }
    }

</style>