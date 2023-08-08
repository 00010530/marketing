<template>
    <section class="add-component">
      <div class="view-card">
        <div class="img-upload">
          <el-upload
            class="avatar-uploader"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </div>
        <p class="p-name">Product name</p>
        <div class="coins">
          <img src="../../../../assets/coin.svg" alt="" />
          <p>Coins</p>
        </div>
        <p class="p-ostatok">Остаток</p>
      </div>
      <form action="">
        <label for="nomi">Maxsulot Nomi</label>
        <input type="text" placeholder="Nomi" />
        <label for="qiymat">Qiymati</label>
        <input type="text" placeholder="Qiymati" />
        <label for="soni">Maxsulot Soni</label>
        <input type="text" placeholder="Soni">
        <label for="filial">Filiali</label>
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
      </form>
      <div class="add-product-footer">
        <el-switch
          v-model="value2"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        />
  
        <button>Add</button>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from "vue";
  import { ElMessage } from "element-plus";
  import { Plus } from "@element-plus/icons-vue";
  import './style/style.css'
  
  export default {
    emits: ["marsBot"],
    setup(_, { emit }) {
      const imageUrl = ref("");
      const value = ref("");
  
      const doneBtnClick = () => {
        emit("marsBot");
      };
  
      const handleAvatarSuccess = (response, uploadFile) => {
        imageUrl.value = URL.createObjectURL(uploadFile.raw);
      };
      const beforeAvatarUpload = (rawFile) => {
        if (rawFile.type !== "image/jpeg") {
          ElMessage.error("Avatar picture must be JPG format!");
          return false;
        } else if (rawFile.size / 1024 / 1024 > 2) {
          ElMessage.error("Avatar picture size can not exceed 2MB!");
          return false;
        }
        return true;
      };
  
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
  
      return {
        handleAvatarSuccess,
        beforeAvatarUpload,
        value,
        allBranches,
        Plus,
        doneBtnClick,
      };
    },
  };
  </script>