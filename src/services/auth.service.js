import axios from 'axios';

const API_URL = 'http://18.220.217.118:8080/api/login/';

class AuthService {
	login(user, password){

		return axios.post(API_URL, {
          		"username": user,
          		"password": password
        	},
        	{
        	headers: {
        		"Content-Type": "application/json",
          		"Authorization": "JWT eyJ0eC..."
        	},
		}).then( function( response ) {

			console.log(response);
			if(response.data.accessToken){
				localStorage.setItem('user'. JSON.stringify(response.data));
			}

		}).catch( function( error ) {
			console.log( error );
		});
	}

	logout() {
		localStorage.removeItem('user');
	}
}

export default new AuthService();