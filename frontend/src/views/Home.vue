<template>
    <div>
      <h1>Home</h1>
      <ProductList />
    </div>
  </template>
  
  <script lang="ts">
import { Options, Vue } from 'vue-class-component';
  import ProductList from '../components/ProductList.vue';
  
  @Options({
    components: {
      ProductList
    }
  })
  export default class Home extends Vue {}
  </script>
  