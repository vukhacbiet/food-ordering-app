<template>
<div>
  <Template/>
</div>
</template>

<script>
import MyTemp from './components/mytemplate.vue'

export default {
  name: 'App',
  components: {
    MyTemp
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
