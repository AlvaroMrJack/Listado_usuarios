<template>
  <div id="app">
    <v-app id="inspire">
      <v-main>
        <v-container
          class="fill-height img"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
              <v-card class="elevation-12">
                <v-toolbar
                  color="primary"
                  dark
                  flat
                >
                  <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-text-field
                      v-model="username"
                      label="Correo"
                      name="correo"
                      prepend-icon="mdi-account"
                      type="text"
                      :rules="usernameRules"
                      required
                    ></v-text-field>
  
                    <v-text-field
                      v-model="password"
                      id="password"
                      label="Contraseña"
                      name="contraseña"
                      prepend-icon="mdi-lock"
                      type="password"
                      required
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn :disabled="!valid" type="submit" color="primary" 
                    @click.prevent="login">Ingresar</v-btn>
                </v-card-actions>

              </v-card>

                <v-alert v-if="error" type="warning">
                  Ups! las credenciales ingresadas son incorrectas.
                </v-alert>

            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>  

  import axios from 'axios';

  export default{
    name: "Login",
    data(){
      return{
        valid: true,
        username: 'alvaro.12tobar@gmail.com',
        usernameRules: [
          v => !!v || 'Correo requerido',
          v => /.+@.+\..+/.test(v) || 'Al parecer el correo es inválido',
        ],
        password: 'arrayan2020',
        error: false
      }
    },
    methods: {

      login: function(){

        let user = this.username;
        let password = this.password;

        this.$store.dispatch('login', { user, password })

        .then(() => 
          this.$router.push('/inicio')
        ).catch( error => this.error = true );

      },
    }
  }
</script>

<style>
  .img{
    background-image: url("https://source.unsplash.com/collection/8876884/1600x900");
    background-size: cover;
  }
</style>