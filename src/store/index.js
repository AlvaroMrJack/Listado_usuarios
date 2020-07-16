import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const API_URL = 'http://18.220.217.118:8080/api/login/';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
      state.user = ''
    },
  },
  actions: {
  	login({commit}, user){
	    return new Promise((resolve, reject) => {
	      commit('auth_request')
	      axios.post(API_URL, {
          		"username": user.user,
          		"password": user.password
        	},
        	{
        	headers: {
        		"Content-Type": "application/json",
        	},
		  }).then(resp => {
	        const token = resp.data.token
	        const user = resp.data.user
	        localStorage.setItem('token', token)
	        axios.defaults.headers.common['Authorization'] = token;
	        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
	        commit('auth_success', token, user)
	        resolve(resp)
	      })
	      .catch(err => {
	        commit('auth_error')
	        localStorage.removeItem('token')
	        reject(err)
	      })
	    })
	},
	register({commit}, user){
	  return new Promise((resolve, reject) => {

	    commit('auth_request')
	    axios.post('http://18.220.217.118:8080/employee/', user,{
	    	headers: {
	    		"Authorization": "Bearer " + localStorage.getItem('store'),
	    		"Content-Type": 'application/json',
	    	},
	    	auth:{
	    		username: user.username,
	    		password: user.password,
	    	}
	    }).then(resp => {
	      const token = resp.data.token
	      const user = resp.data.user
	      localStorage.setItem('token', token)
	      axios.defaults.headers.common['Authorization'] = token
	      commit('auth_success', token, user)
	      resolve(resp)
	    })
	    .catch(err => {
	    	console.log(err);
	      	commit('auth_error', err)
	      	//localStorage.removeItem('token')
	      	reject(err)
	    })
	  })
	},
	logout({commit}){
	  return new Promise((resolve, reject) => {
	    commit('logout')
	    localStorage.removeItem('token')
	    delete axios.defaults.headers.common['Authorization']
	    resolve()
	  })
	},
  },
  modules: {
  },
  getters : {
	  isLoggedIn: state => !!state.token,
	  authStatus: state => state.status,
	}
})
