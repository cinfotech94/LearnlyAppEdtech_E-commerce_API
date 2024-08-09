<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="name" placeholder="Product Name" />
      <input v-model="description" placeholder="Product Description" />
      <input v-model="price" type="number" placeholder="Product Price" />
      <input v-model="imageURL" placeholder="Product Image URL" />
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { State } from '../store/types';

export default defineComponent({
  name: 'ProductForm',
  setup() {
    const store = useStore<State>();

    const name = ref('');
    const description = ref('');
    const price = ref(0);
    const imageURL = ref('');

    const handleSubmit = () => {
      const productData = {
        name: name.value,
        description: description.value,
        price: price.value,
        imageURL: imageURL.value
      };
      
      store.dispatch('addProduct', productData)
        .then(() => {
          window.location.href = '/'; // Redirect to home page or any other page
        })
        .catch(error => {
          console.error('Error adding product:', error);
        });
    };

    return {
      name,
      description,
      price,
      imageURL,
      handleSubmit
    };
  }
});
</script>
