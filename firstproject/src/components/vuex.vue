<template>
    <div>
        <h1>Vuex</h1>
        <p>{{StoreData}}</p>
    </div>
</template>
<script>
export default {
    name:"VUEX",
    data() {
        return{
            StoreData:[]
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        async getData() {
            let data = await this.$store.dispatch('fetchDummyData')

            console.log(data)
            this.StoreData=data
        }
    }
}
</script>
<style lang="">

</style>

<!-- <template>
    <div>
        <h1>Vuex</h1>

        <ul v-if="ChartData!=null">
        <li v-for="datas in ChartData.test" :keys="datas.price">{{datas.department}}-{{datas.price}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Vuex',
    data() { 
        return {
            ChartData:this.$store.state.test
        }
    },

}
</script>

<style lang="">

</style> -->