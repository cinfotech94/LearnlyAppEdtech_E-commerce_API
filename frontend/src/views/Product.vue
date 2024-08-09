<template>
    <div>
      <h1>Add Product</h1>
      <ProductForm />
    </div>
  </template>
  
  <script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProductForm from '../components/ProductForm.vue';
  
  @Options({
    components: {
      ProductForm
    }
  })
  export default class Product extends Vue {}
  </script>
  