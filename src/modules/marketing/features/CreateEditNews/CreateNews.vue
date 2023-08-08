<template>
    <section class="botAdd">
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
      <form class="form">
        <label for="mavzu">Mavzu:</label>
        <input type="text" placeholder="Nomi" />
        <label for="">Filial:</label>
        <el-select
          v-model="activeBranch"
          class=""
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
        <label for="message">Text</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Ma'lumot"
        ></textarea>
      </form>
  
      <div class="bot-add-footer">
        <div class="bot-add-btns">
          <button class="cancel">Cancel</button>
          <button class="done" @click="doneBtnClick()">Done</button>
        </div>
        <div class="block">
          <label class="custom-label" for="datePicker" @click="openDatePicker">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                stroke="#E3391B"
                stroke-width="1"
                stroke-linecap="round"
              />
            </svg>
          </label>
  
          <el-date-picker
            v-model="value1"
            type="datetime"
            id="datePicker"
            :default-value="new Date()"
            style="width: 0; height: 0"
          />
        </div>
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
  
      return { handleAvatarSuccess, beforeAvatarUpload, value, allBranches, Plus, doneBtnClick };
    },
  };
  </script>