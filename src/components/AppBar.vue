<template>
	<v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">

      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/AlvaroMrJack"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn
        text
      >
      <router-link to="/">
        <span class="mr-2 white--text" v-if="isLoggedIn"> Salir<a @click="logout"></a></span>
      </router-link>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>

    </v-app-bar>
</template>

<script>
  export default {
    name: 'AppBar',
    computed: {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
  }
</script>