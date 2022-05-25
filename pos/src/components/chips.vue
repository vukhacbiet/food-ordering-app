<template>
<div>
    <v-container>
        <v-row>
            <v-col sm="12" md="12" lg="8">
                <v-chip-group mandatory active-class="primary--text">
                    <v-chip class="ma-2" v-for="tag in tags" :key="tag">
                        {{ tag }}
                    </v-chip>
                </v-chip-group>
            </v-col>
            <v-col align="right" sm="12" md="12" lg="4">
              <v-autocomplete v-model="values" outlined dense label="Lorem ipsum"></v-autocomplete>
          </v-col>
        </v-row>

        
    </v-container>

</div>
</template>

<script>
export default {
    name: 'myChips',
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
            'Sapien',
            'El punto',
            'Textos',
            'Contrario',
            'Contenido',
            'Sólo',
            'Esencialmente',
            'Phasellus',
        ]
    })
}
</script>
