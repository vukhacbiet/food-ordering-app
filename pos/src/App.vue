<template>
  <v-app>
    <v-card class="overflow-hidden">
      <myHeader/>

    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
    >
      <v-container style="height: 70px;">
      </v-container>

      <myChips/>
      <myCards/>
      <myFooter/>
      <fabButton/>

    </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
import myHeader from './components/header.vue'
import myChips from './components/chips.vue'
import myCards from './components/cards.vue'
import myFooter from './components/footer.vue'
import fabButton from './components/fab.vue'

export default {
  name: 'App',
  components: {
    myHeader,
    myChips,
    myCards,
    myFooter,
    fabButton
  }

  
}

</script>

<style>

</style>