<template>	
	<v-layout row wrap>
    <v-container ma-3 pa-4 mb-2>
      <v-row>
      <h2>Listado de usuarios</h2>
      </v-row>
    </v-container>
          <v-flex
            v-for="user in usuarios"
            :key="user.id"
            :cols="3"
            xs12 sm12 md6 lg6
          >
            <v-card>
              <v-card-title>
                <caption>Nuevo usuario: {{ user.nombre }} {{ user.apellido }} {{ user.run }}</caption>
              </v-card-title>
              <v-card-text>
                <p>El usuario fue creado por {{ user.user_created.nombre }} {{ user.user_created.apellido }}</p>
              </v-card-text>
            </v-card>
          </v-flex>
  </v-layout>
</template>

<script>	

  import axios from 'axios';

	export default{
		name: 'ListaUsuarios',
    data() {
      return {
        usuarios: [],
      }
    },
    mounted() {
      
      let vue = this;

      axios.get('http://18.220.217.118:8080/employee/',
      {
        auth: {
          username: 'alvaro.12tobar@gmail.com',
          password: 'arrayan2020'
        },
        headers: {
          Authorization: "Bearer " + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0NDAsInVzZXJuYW1lIjoiYWx2YXJvLjEydG9iYXJAZ21haWwuY29tIiwiZXhwIjoxNjAzODY2OTI2LCJlbWFpbCI6IiJ9.JmuLSUpYISswNLTzB1yfssTjXzOSf1j6LibwZxbk9NM',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then( function( response ) {
        vue.usuarios = response.data.empleados;
        console.log(vue.usuarios);
      }).catch( function( error ) {
        console.log('Error: ', error);
      })

    }
	}
</script>