<template>
  <div class="input">
    <label for="">請輸入內容</label>
    <input type="text" v-model="input" />
    <button @click="sendBtn">送出111</button>
    <button @click="Queryconditions">查詢</button>
  </div>
  <div class="output">
    <div v-for="(item, idx) in outext" :key="idx">
      <div v-if="editId === idx">
        <input type="text" v-model="editText" />
        <button @click="saveEdit(idx)">儲存</button>
      </div>
      <div v-else>
        <h2>{{ item }}</h2>
        <button @click="editBtn(idx)">修改</button>
        <button @click="deletebtn(idx)">刪除</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const input = ref(""); // 輸入新增的字串值
const outext = ref([]); // 儲存輸入的字串值 陣列格式
// ------------------------------
// 下面這2個的作用
const editId = ref(-1);
const editText = ref(""); // 儲存要修改的字串值

//  增加內容
const sendBtn = () => {
  const trimText = input.value.trim(); // 建立新變數處理前後空白
  if (trimText != "") {
    // 原本if(trimText != "")
    outext.value.push(trimText); //  outext被塞入 新變數 trimText的值
    input.value = "";
    console.log(outext.value);
  } else {
    alert("請不要空白");
  }
};

// 刪除內容
const deletebtn = (idx) => {
  // 傳入的參數idx是outext索引值

  outext.value.splice(idx, 1); //刪除outext的值，個數，刪一個
};

// 修改內容
const editBtn = (idx) => {
  editId.value = idx; //目的是為了標記哪一個列表項目正在被編輯
  editText.value = outext.value[idx]; //儲存當前被標記列表第幾項目原本的參數值
};

// 儲存內容
const saveEdit = (idx) => {
  if (editText.value.trim()) {
    outext.value[idx] = editText.value.trim(); //修改儲存的字串值
    editId.value = -1; //標記沒有東西要被編輯
    editText.value = "";
  }
};

const Queryconditions = () => {
  const newArray = Object.values(outext.value);   //  目前想法是用includes篩選
  if (newArrayincludes('9')) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
  console.log(typeof newArray);
};

//

// 1.增加內容、2.修改內容、 3.用列表保存內容、4.刪除內容
</script>
