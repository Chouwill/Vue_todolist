<template>
    <h2>TODOLIST</h2>
  
    <div class="box">
      <div class="todolist">
        <label for="">請輸入待辦事項</label>
         <input type="text" v-model="input" /> <!-- 這裡使用v-model綁定input變數，以便於實時更新輸入框的值 -->
        <button @click="send">送出</button>
      </div>
      <div class="output">
        <p>{{ todoText }}</p>
        <button>修改</button>
        <button>刪除</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const input = ref(""); // 定義一個響應式變數input，用於存儲輸入框的值
  const todoText = ref(""); // 定義一個響應式變數todoText，用於存儲待顯示的待辦事項文本
  
  const send = () => {
    todoText.value = input.value;  // 將輸入框的值賦值給todoText，用於顯示在待辦事項列表中。這裡使用.value是因為在Vue 3中，ref返回的是一個響應式對象，需要通過.value來訪問或賦值其內部值
    // input.value = ""; 
  };
  </script>
  
  <style>
  h2 {
    text-align: center;
  }
  .box {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }