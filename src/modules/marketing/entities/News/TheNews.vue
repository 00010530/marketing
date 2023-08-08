<template>
  <div class="news-cards">
    <div class="news-card" v-for="item in news" v-bind:key="item.id">
      <a href="#"><img v-bind:src="item.img" /></a>
      <div class="news-description">
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import './style/style.css'

export default {
  setup() {
    const news = ref({ activity: "" });

    function theData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((actualData) => {
          console.log(actualData);
          news.value = actualData;
        })
        .catch((e) => {
          console.error("Error: ", e);
        });

      return news;
    }
    theData("http://localhost:3000/news");
    return {
      news,
    };
  },
};
</script>