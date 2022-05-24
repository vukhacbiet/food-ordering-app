<template>
    <div>
  <v-footer
    padless
  >
  <v-divider></v-divider>
    <v-card
      flat
      tile
      class="grey--text text-center"
    >
      

      <v-card-text class="black--text pt-0" style="margin-top: 40px">
      <v-divider style="margin-bottom: 20px"></v-divider>
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-card-text class="black--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</div>
</template>

<script>
export default {
    name: 'myFooter',
    data: () => ({

      items: [
        'Lorem ipsum',
        'El punto',
        'No sólo sobrevivió',
        'Quedando esencialmente',
        'Estos textos',
        'Contenido aquí',
        'Al contrario',
      ]
    })
}
</script>