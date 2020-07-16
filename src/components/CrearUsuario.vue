<template>
	<v-card>
		<v-card-title>
			<v-flex>
				<p class="display-0 font-weight-light">Registro de usuarios</p>
			</v-flex>
		</v-card-title>
		<v-card-text>
		  <v-form
		    @submit.prevent="nuevo_usuario"
		    v-model="valid"
		    lazy-validation
		  >
		    <v-text-field
		      v-model="nombre"
		      :counter="50"
		      :rules="nombreRules"
		      label="Nombre"
		      required
		    ></v-text-field>

		    <v-text-field
		      v-model="apellido"
		      :counter="50"
		      :rules="apellidoRules"
		      label="Apellido"
		      required
		    ></v-text-field>

		    <v-text-field
		      v-model="run"
		      :counter="10"
		      :rules="runRules"
		      label="Run"
		      required
		    ></v-text-field>

			<v-btn
		      :disabled="!valid"
		      color="success"
		      class="mr-4"
		      @click="agregar"
		    >
		      Agregar
		    </v-btn>

	    	</v-form>
		</v-card-text>
	</v-card>
</template>

<script>
  export default {
	name: 'CrearUsuario',
    data() {
	  	return {
	      valid: true,
	      nombre: '',
	      nombreRules: [
	        v => !!v || 'Nombre es requerido',
	        v => (v && v.length >= 3) || 'El nombre debe tener al menos 3 caracteres',
	      ],
	      apellido: '',
	      apellidoRules: [
	        v => !!v || 'Apellido es requerido',
	        v => (v && v.length >= 3) || 'El apellido debe tener al menos 3 caracteres',
	      ],
	      run: '',
	      runRules: [
	        v => !!v || 'Run es requerido',
	        v => (v && v.length >= 6) || 'El run debe tener al menos 6 caracteres',
	      ],
	    };
	},
	methods: {
		agregar (){

			let vue = this;
			const url = 'http://18.220.217.118:8080/employee/';

			axios.post(url,
				{
					nombre: vue.nombre,
					apellido: vue.apellido,
					run: vue.run
				},
				{
				auth: {
		          username: 'alvaro.12tobar@gmail.com',
		          password: 'arrayan2020'
		        },
		        headers: {
		          Authorization: "Bearer " + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0NDAsInVzZXJuYW1lIjoiYWx2YXJvLjEydG9iYXJAZ21haWwuY29tIiwiZXhwIjoxNjAzODc0NTUzLCJlbWFpbCI6IiJ9.Z5alZAnyuFhnp0J292zhSzTrb0B4ZgvqgNQsWclhBUQ',
		        },
			}).then( function( response ) {
				console.log(response);
			}).catch( function( error ) {
				console.log('Error: ', error);
			});

		},
		register: function () {
	        let data = {
	          nombre: vue.nombre,
	          apellido: vue.apellido,
	          run: vue.run,
	        }
	        this.$store.dispatch('register', data)
	       .then(() => this.$router.push('/inicio'))
	       .catch(err => console.log(err))
	      }
	}
};
</script>