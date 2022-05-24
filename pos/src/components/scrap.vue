<template>
  <v-app>
    <v-card class="overflow-hidden">
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

    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      
    >
      <v-container style="height: 70px;">
      </v-container>

  <div style="margin-left: 30px">
    <v-row>
    <v-col
      cols="12"
      sm="20"
      md="8"
    >
        <v-chip-group
          mandatory
          active-class="primary--text"
        >
            <v-chip
            class="ma-2"
              v-for="tag in tags"
              :key="tag"
            >
              {{ tag }}
            </v-chip>

            <v-autocomplete
              v-model="values"
              outlined
              dense
              label="Lorem ipsum"></v-autocomplete>

          </v-chip-group>
        <!-- <input @submit.prevent="postForm()" type="text" placeholder="Lorem ipsum"> -->
    </v-col>
  </v-row>
  </div>
  

<div v-for="category in categories" 
:key="category">
<h3 style="margin-left: 50px; margin-top: 20px; margin-bottom: 20px">{{ category }}</h3>
<v-item-group>
    <v-container>
      <v-row>
        <v-col
          v-for="n in 10"
          :key="n"
          cols="12"
          md="2"
          
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="200"
              @click="toggle"
            >
            
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="text-h2 flex-grow-1 text-center"
                >
                  Active
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</div>

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

  </v-sheet>
  </v-card>
  
  </v-app>
</template>

<script>

export default {
  name: 'App',
  

  data: () => ({

      tags: [
        'Sapien',
        'El punto',
        'Textos',
        'Contrario',
        'Contenido',
        'Sólo',
        'Esencialmente',
        'Phasellus',
        'Elementum'
      ],
      categories: [
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
      ],
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

<style>

</style>