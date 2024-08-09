<template>
  <div>
    <div v-for="product in products" :key="product._id">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
      <img :src="product.imageURL" alt="Product Image">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { State } from '../store/types';

export default defineComponent({
  name: 'ProductList',
  setup() {
    const store = useStore<State>();

    // Fetch products when the component is created
    store.dispatch('fetchProducts');

    return {
      products: store.state.products
    };
  }
});
</script>