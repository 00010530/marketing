<template>
  <div class="cards">
    <div class="card" v-for="product in products" v-bind:key="product.id">
      <div class="card-img">
        <img v-bind:src="product.img" alt="" />
      </div>
      <div class="card-text">
        <h2>{{ product.name }}</h2>

        <div class="coins">
          <img src="../../../../assets/coin.svg" alt="" />
          <p>{{ product.coins }} Coins</p>
        </div>
      </div>
      <div class="card-btns">
        <img src="../../../../assets/edit.png" alt="" />
        <p>{{ product.ostatok }} остаток</p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import './style/style.css'
// import productData, { getAllProducts } from './api/getproducts.js'

export default {
  emits: ["addProduct"],
  setup(_, { emit }) {
    const products = ref({ activity: "" });

    function theData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((actualData) => {
          console.log(actualData);
          products.value = actualData;
        })
        .catch((e) => {
          console.error("Error: ", e);
        });

      return products;
    }

    const addProductBtnClick = () => {
      emit("addProduct");
    };

    // getAllProducts()
    theData("http://localhost:3000/products");
    
    return {
      products,
      addProductBtnClick,
      // productData
    };
  },
};
</script>