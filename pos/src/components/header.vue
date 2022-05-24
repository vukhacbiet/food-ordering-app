<template>

    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-icon>home</v-icon>
      <v-toolbar-title >Home</v-toolbar-title>

      <v-spacer></v-spacer>

      <div style="margin-top: 30px; margin-right: 20px">
        <v-autocomplete
        v-model="values"
              :items="items"
              outlined
              dense
              label="Lorem ipsum">
        </v-autocomplete>
      </div>

      <v-btn icon>
        <v-icon>mdi-note-outline</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-flag-outline</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      
    </v-app-bar>

    
</template>

<script>
export default {
    name:  'myHeader',
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