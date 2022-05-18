<template>
    <div>
        <button @click="changeComponent()">Change Component</button>
        <component :is="componentis"></component>
    </div>
</template>
<script>
import Component1 from './component1.vue'
import Component2 from './component2.vue'
export default {
    name:"dynamicComponent",
    components:{
        Component1,
        Component2
    },
    data() {
        return {
            componentis:"Component2"
        }
    },
    methods: {
        changeComponent(){
            if(this.componentis === "Component2"){
                this.componentis = "Component1"
            }
            else if(this.componentis === "Component1"){
                this.componentis = "Component2"
            }
        }
    }
}
</script>
<style lang="">

</style>