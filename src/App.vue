<script setup>
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <ul class="nav">
    <li>
      <router-link to="/">Todolist</router-link>
    </li>
    <li>
      <router-link to="/prTodolist">自我練習Todolist</router-link>
    </li>
    <li>
      <router-link to="/note">筆記Todolist</router-link>
    </li>
  </ul>
  <div class="page"><router-view></router-view></div>
</template>

<style scoped>
/* page所有頁面的外框 */
.page{
  width: 100%;
  border: 5px solid green;
  /* background-color: ; */
  padding: 50px;
}
ul li {
  list-style: none;
}

.nav{
  margin: 0 auto;
  width: 1000px;
  padding: 50px;
  font-size: 50px;
  border: 5px solid greenyellow;
}
</style>
