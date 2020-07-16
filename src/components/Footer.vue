<template>
  <v-footer
    color="primary"
  >
    <v-card
      class="flex"
      tile
      color="#e3e3e3"
    >

      <v-card-text class="py-2 white--text text-center" color="black">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>