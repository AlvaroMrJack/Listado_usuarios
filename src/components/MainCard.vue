<template>
	<v-container fluid ma-0 pa-2 mb-4 grid-list-xl white>

  		<AppBar/>
  		<v-row class="pa-4">
  			<v-col
  				cols="12"
  				xs="12"
  				sm="12"
  				md="4"
  				lg="4">
		  		<v-card color="#e3e3e3">
		  			<v-card-text>
			  			<CrearUsuario/>
		     		</v-card-text>
		  		</v-card>
		  	</v-col>
	  			
			<v-col
				cols="12"
				xs="12"
  				sm="12"
  				md="8"
  				lg="">
		  		<v-card  color="#e3e3e3">
		  			<v-card-text>
		     			<ListaUsuarios/>
		  			</v-card-text>
		  		</v-card>
		  	</v-col>
  		</v-row>
      
    </v-container>
</template>

<script>
	
	import ListaUsuarios from './ListaUsuarios';
	import AppBar from './AppBar';
	import CrearUsuario from './CrearUsuario';
	
  	export default {
	  name: 'MainCard',
	  components: {
	    ListaUsuarios,
	    AppBar,
	    CrearUsuario,
	  },		
	}

</script>