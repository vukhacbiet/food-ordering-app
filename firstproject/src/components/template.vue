<template>
    <div>
        <h1 if="heading">Hello Testing</h1>
        <p>{{string}}</p>
    </div>
</template>
<script>
export default {
    name: "Template",
    // Data
    data() {
        return {
            
        }
    },
    // // Lifecycles
    // beforeCreate() {
    //     // functions or methods will come here which we want to run before compile template
    //     alert('before created')
    // },
    // created() {
    //     // Once the Instance gets initialized and we want to run some functions before mount then they will come here
    //     alert('created')
    // },
    // beforeMount() {
    //     // Same as created lifecycle hook
    //     alert('before mounted')
    // },
    // mounted() {
    //     // ONce instance gets mounted on screen then actions to perform will come here
    //     alert('mounted')
    // },
    // beforeUpdate() {
    //     // Same as mounted lifecycle hook
    //     alert('before update')
    // },
    // updated() {
    //     alert('updated')
    // },
    // methods: {
    //     updateData() {
    //         this.string = 'Updated Data'
    //     }
    // }
}
</script>

<style>
#heading{
    color: yellow;
    margin-top: 200px;
}
</style>