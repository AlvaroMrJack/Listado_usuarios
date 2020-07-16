<template>

	<v-main>
    
    <AppBar/>
    <MainCard/>
    <Footer/>

  </v-main>
  
</template>

<script>
  
  import AppBar from '@/components/AppBar';
  import Footer from '@/components/Footer';
  import MainCard from '@/components/MainCard.vue'

export default {
  name: 'Home',
  components: {
    AppBar,
    MainCard,
    Footer,
  },
  data: () => {
  	return {
  	}
  }
}
</script>
