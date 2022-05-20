<template>
<div>
  <!-- <Template/> -->
  <!-- <ConditionalRendering/>
  <ListRendering/>
  <DynamicComponent/> -->
  <DataTable/>
  <Chart/>
  <Forms/>
  <hr>
  <component :is="componentId"></component>
  <router-link to="/firstroute">Go To Router</router-link><br>
  <router-link to="/fetchapi">Fetch API</router-link><br>
  <router-link to="/datatable">Datatable</router-link><br>
  <router-link to="/chart">Chart JS</router-link><br>
  <router-link to="/vuex">Vuex</router-link><br>
  <router-link to="/forms">Forms</router-link>
  <hr>
  
</div>
</template>

<script>
import Template from './components/template.vue'
import ConditionalRendering from './components/conditionalrendering.vue'
import ListRendering from './components/ListRendering.vue'
import DynamicComponent from './components/dynamiccomponent.vue'
import DataTable from './components/datatables.vue'
import Chart from './components/Chart.vue'
import VUEX from './components/vuex.vue'
import { mapActions } from 'vuex'
import Forms from './components/forms.vue'



export default {
  name: 'App',
  components: {
    Template, // eslint-disable-line vue/no-unused-components
    ConditionalRendering,
    ListRendering,
    DynamicComponent,
    DataTable,
    VUEX,
    Forms
  },
  created() {
    this.fetchDummyData
  },
  data() {
    return {
      componentId: 'VUEX'
    }
  },
  methods: {
    ...mapActions(['fetchDummyData'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
