<template>
    <div>
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="添加新待辦事項" />
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <template v-if="editIndex !== index">
            {{ todo }}
            <button @click="editTodo(index)">編輯</button>
          </template>
          <template v-else>
            <input v-model="editText" @keyup.enter="saveEdit(index)" />
            <button @click="saveEdit(index)">保存</button>
          </template>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const todos = ref([]);
  const newTodo = ref("");
  const editIndex = ref(-1);  //為何是-1
  const editText = ref("");
  
  const addTodo = () => {
    if (newTodo.value.trim()) {
      todos.value.push(newTodo.value.trim());
      newTodo.value = "";
    }
  };
  
  const editTodo = (index) => {
    editIndex.value = index;
    editText.value = todos.value[index];
  };
  
  const saveEdit = (index) => {
    if (editText.value.trim()) {
      todos.value[index] = editText.value.trim();
      editIndex.value = -1;
      editText.value = "";
    }
  };
  
  //editTODO 與 saveEdit邏輯看不懂需特別解釋方法
  </script>
c  