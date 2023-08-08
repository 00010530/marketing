<template>
  <section class="bot">
    <div class="bot-heading">
      <div class="heading-left">
        <div><img src="../../../../assets/ellipse.png" alt="" /></div>
        <h1>Mars Bot</h1>
      </div>
      <div class="heading-right">
        <el-button @click="addBtnClick()">+ Add</el-button>
      </div>
    </div>
    <TheMessage/>
  </section>
</template>
<script>
import './style/style.css'
import TheMessage from '../../entities/Message/TheMessage.vue'

export default {
  emits: ["marsBotAdd"],
  setup(_, { emit }) {
    const addBtnClick = () => {
      emit("marsBotAdd");
    };

    return {
        addBtnClick, TheMessage
    }
  },
  components: {
    TheMessage
  }
};
</script>