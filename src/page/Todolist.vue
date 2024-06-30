<template>
  <div class="wrap">
    <div class="Todolist">
      <label for="">請輸入內容</label>
      <!-- <input type="text" v-model="input" /> -->
      <el-input v-model="input" style="width: 240px" placeholder="" />
      <button @click="sendBtn">送出</button>
    </div>
    <div class="output">
      <!-- <div class="output_box" v-for="(obj, idx) in outText" :key="idx"> -->
      <div class="output_box" v-for="obj in outText" :key="obj.id">
        <!-- <h2></h2> -->
        <!-- <input type="checkbox" /> -->
        <!-- <input type="text" :value="obj.text" :disabled="obj.disabled" /> -->
        <el-input type="text" :value="obj.text" :disabled="obj.disabled" style="width: 240px" placeholder="" />
        <!-- :value="obj.text" ===> 指向第40行.text
             :disabled="obj.disabled"  ===> 指向第42行:disabled -->

        <button @click="editBtn(obj)">修改</button>
        <button @click="saveBtn(obj)">儲存</button>
        <button @click="deleteBtn(obj.id)">刪除</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const input = ref("");
const outText = ref([]);

const reviseText = ref(true);

const sendBtn = () => {
  //送出功能
  if (input.value.trim() === "") {
    //判斷欄位是否為空，包含空格有=>被警告請不要空白
    alert("請不要空白");
    return; //中斷
  }
  outText.value.push({
    id: uuidv4(), //  用ID尋找:key="idx"
    text: input.value.trim(),
    disabled: true, //項目欄位是否可修改
    status: 0, //狀態: 0未完成，1完成
  });

  input.value = "";
};

const editBtn = () => {};

const saveBtn = () => {};

const deleteBtn = (id) => {
  //參數不能.
  const idx = outText.value.findIndex((item) => item.id === id); //  item.id 陣列所有的id , id 目前被選中
  outText.value.splice(idx, 1);
};
</script>

<style>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.Todolist {
  margin: 150px 0;
}
.output_box {
  display: flex;
}
</style>
