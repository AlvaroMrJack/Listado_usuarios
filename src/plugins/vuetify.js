import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			customProperties: true,
		},
		themes: {
			ligth: {
				secondary: '#E3E3E3',
				pri: '#f4f4f4'
			}
		}
	}
});
