<template>
<div>
  <Template/>
  <ConditionalRendering/>
  <ListRendering/>
</div>
</template>

<script>
import Template from './components/template.vue'
import ConditionalRendering from './components/conditionalrendering.vue'
import ListRendering from './components/ListRendering.vue'

export default {
  name: 'App',
  components: {
    Template, // eslint-disable-line vue/no-unused-components
    ConditionalRendering,
    ListRendering,
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
