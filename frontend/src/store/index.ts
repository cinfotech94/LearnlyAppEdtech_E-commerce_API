
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}api/products/get`);
        commit('setProducts', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}api/auth/login`, credentials);
        const token = response.data.token;
        localStorage.setItem('token', token);
        commit('setToken', token);
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
    async register({ commit }, userData) {
      try {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}api/auth/register`, userData);
        const token = response.data.token;
        localStorage.setItem('token', token);
        commit('setToken', token);
        // Optionally fetch products after registering
        await this.dispatch('fetchProducts');
      } catch (error) {
        console.error('Error registering:', error);
      }
    },
    async addProduct({ dispatch }, productData) {
      try {
        const token = localStorage.getItem('token');
        await axios.post(`${process.env.VUE_APP_API_URL}api/products/create`, productData, {
          headers: { 'x-auth-token': token }
        });
        // Fetch products after adding a new one
        await dispatch('fetchProducts');
      } catch (error) {
        console.error('Error adding product:', error);
      }
    }
  },
  modules: {}
});
