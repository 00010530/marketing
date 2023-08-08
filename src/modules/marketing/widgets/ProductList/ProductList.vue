<template>
  <section class="products-section">
    <div class="products">
        <div class="products-header">
            <h1>Products</h1>
        </div>
        <TheProduct />
    </div>
    <div class="card-footer">
    <p>Yangi Maxsulot qo'shish</p>
    <el-button @click="addProductBtnClick()">+ Add</el-button>
  </div>
  </section>
</template>
<script>
import './style/style.css'
import TheProduct from '../../entities/Product/TheProduct.vue'

export default {
  emits: ["addProduct"],
  setup(_, { emit }) {
    const addProductBtnClick = () => {
      emit("addProduct");
    };
    return {
      addProductBtnClick, TheProduct
    }
  },
  components: {
    TheProduct
  }
}
</script>