<template>
  <header-component />
  <main class="main">
    <sidebar-component />
    <section class="board">
      <div class="wrapper">
        <div class="wrapper-left">
          <message-list @mars-bot-add="getClickedEvent('news-add')"/>
          <div class="bottom">
            <product-list @addProduct="getClickedEvent('product-add')" />
            <news-list @add-news-component="getClickedEvent('news-add')"/>
          </div>
        </div>
        <div class="wrapper-right">
          <div class="heading">
            <label for="branch">Branch</label>
            <el-select
              v-model="activeBranch"
              class="m-2"
              placeholder="Select"
              size="large"
            >
              <el-option
                v-for="item in allBranches"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <component :is="activeComponent" @marsBot="getClickedEvent('social-list')" />
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { ref } from "vue"
import "./style/style.css";
import MessageList from "../../widgets/MessageList/MessageList.vue";
import ProductList from "../../widgets/ProductList/ProductList.vue";
import NewsList from "../../widgets/NewsList/NewsList.vue";
import AddProduct from '../../features/CreateEditProduct/CreateProduct.vue'
import AddNews from '../../features/CreateEditNews/CreateNews.vue'
import SocialList from "../../widgets/SocialMedia/SocialList.vue"

export default {
  setup() {

    const activeBranch = ref(2);
    const allBranches = [
      {
        label: "Tinchlik",
        value: 1,
      },
      {
        label: "Yunusobod",
        value: 2,
      },
      {
        label: "Qutbiniso",
        value: 3,
      },
      {
        label: "Parlament",
        value: 4,
      },
    ];
    const activeComponent = ref('social-list');

    const getClickedEvent = (val) => {
      activeComponent.value = val;
    }

    return {
      activeBranch,
      allBranches,
      activeComponent,
      getClickedEvent
    };

  },
  components: {
    'message-list': MessageList,
    'product-list': ProductList,
    'news-list': NewsList,
    'product-add': AddProduct,
    'news-add': AddNews,
    'social-list': SocialList
  }
}
</script>