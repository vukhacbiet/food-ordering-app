<template>
    <div>
        <h1>Conditional Rendering</h1>
        <h2 v-if="show">Conditional Working</h2>
    </div>
</template>
<script>
export default {
    name: 'ConditionalRendering',
    data() {
        return {
            show:false
        }
    }
}
</script>
<style></style>