<template>
  <section class="news-section">
    <div class="news">
      <div class="news-header">
        <h1>News</h1>
      </div>
      <TheNews />
    </div>
    <div class="card-footer">
        <p>Yangilik qo'shish</p>
        <el-button @click="addNewsComponent()">+ Add</el-button>
      </div>
  </section>
</template>
<script>
import "./style/style.css";
import TheNews from "../../entities/News/TheNews.vue";

export default {
  emits: ["addNewsComponent"],
  setup(_, { emit }) {
    const addNewsComponent = () => {
      emit("addNewsComponent");
    };
    return {
      addNewsComponent
    }
  },
  components: {
    TheNews
  }
}
</script>