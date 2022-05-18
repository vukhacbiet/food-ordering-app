<template>
<div>
  <Template/>
  <ConditionalRendering/>
  <ListRendering/>
  <DynamicComponent/>
  <hr>
  <router-link to="/firstroute">Go To Router</router-link>
  <hr>
  <router-view></router-view>
</div>
</template>

<script>
import Template from './components/template.vue'
import ConditionalRendering from './components/conditionalrendering.vue'
import ListRendering from './components/ListRendering.vue'
import DynamicComponent from './components/dynamiccomponent.vue'


export default {
  name: 'App',
  components: {
    Template, // eslint-disable-line vue/no-unused-components
    ConditionalRendering,
    ListRendering,
    DynamicComponent,
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
</style>
