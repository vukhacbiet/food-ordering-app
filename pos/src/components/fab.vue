<template>
    <v-card>
        <v-card-text style="height: 100px; position: relative">
            <v-fab-transition>
              <v-btn
                v-show="!hidden"
                color="grey enlighten-1"
                fixed left bottom
                dark
                absolute
                fab
              >
                <v-icon>mdi-cart-outline</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>
    </v-card>
</template>
<script>
export default {
    name:'fabButton'
}
</script>