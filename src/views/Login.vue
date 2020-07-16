<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-main>
          <v-container
            class="fill-height"
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
                      @click.prevent="login_1">Ingresar</v-btn>
                  </v-card-actions>

                  <v-alert v-if="error" type="warning">
                    I'm a warning alert.
                  </v-alert>

                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-app>
    </v-app>
  </div>
</template>

<script>  

  import axios from 'axios';
  import authService from '@/services/auth.service'

  export default{
    name: "Login",
    data(){
      return{
        valid: true,
        username: '',
        usernameRules: [
          v => !!v || 'Correo requerido',
          v => /.+@.+\..+/.test(v) || 'Al parecer el correo es inválido',
        ],
        password: '',
        error: false
      }
    },
    methods: {

      login_1: function(){

        let user = this.username;
        let password = this.password;

        this.$store.dispatch('login', { user, password })
        .then(() => 
          this.$router.push('/inicio')
        ).catch( error => console.log( error ) );


      },
      async login() {

        try {

          let res = await authService.login(this.username, this.password);
          console.log(res);
          //this.$router.push("/inicio");

        } catch ( error ) {
          this.error = true;
        }

      }
    }
  }
</script>