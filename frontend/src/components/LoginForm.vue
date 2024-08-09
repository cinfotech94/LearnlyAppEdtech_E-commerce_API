<template>
  <div>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { State } from '../store/types';

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const store = useStore<State>();

    const email = ref('');
    const password = ref('');

    const login = () => {
      store.dispatch('login', {
        email: email.value,
        password: password.value
      })
      .then(() => {
        store.dispatch('fetchProducts'); // Fetch products after login
        window.location.href = '/'; // Redirect to home page or any other page
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
    };

    return {
      email,
      password,
      login
    };
  }
});
</script>
