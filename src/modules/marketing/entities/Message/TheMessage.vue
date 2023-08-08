<template>
    <div class="bot-cards">
      <div class="bot-card" v-for="item in items" v-bind:key="item.id" >
        <div class="card-date">
          <p class="card-bold">{{ item.time }}</p>
          <p class="card-reg">{{ item.date }}</p>
        </div>
        <div class="card-title">
          <p class="card-bold">{{ item.title }}</p>
          <div class="loc">
            <div><img src="../../../../assets/loc.svg" alt="" /></div>
            <p>{{ item.location }}</p>
          </div>
        </div>
        <div class="card-right">
          <p class="right-date">{{ item.eventDate }}</p>

          <el-button type="default" :icon="Edit"  @click="botDetailsClick()" />
          <el-button type="default" :icon="Delete" />
        </div>
      </div>
    </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { ElButton } from "element-plus"; // ElButton ni import qo'shing
import { Edit, Delete } from "@element-plus/icons-vue";
import './style/style.css'

export default defineComponent({
  components: {
    ElButton, // ElButton komponentini componentlarga qo'shing
  },
  emits: ['marsBotDetail'],
  setup(_, { emit }) {
    const items = ref([]);

    function theData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((actualData) => {
          console.log(actualData);
          items.value = actualData;
        })
        .catch((e) => {
          console.error("Error: ", e);
        });
    }

    const botDetailsClick = (index) => {
      emit('marsBotDetail')
      const item = items.value[index];
      console.log("Index:", index);
      console.log("Item:", item);
    }

    theData("http://localhost:3000/bot");

    return {
      Edit, Delete, items, botDetailsClick
    }
  },
});
</script>