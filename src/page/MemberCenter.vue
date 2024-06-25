<template>
    <div v-if="data">loading...</div>
    <div v-else class="logining_page">
      <h2>你已登入</h2>
  
      <h4>名字:{{ name }}</h4>
      <h4>使用者ID:{{ userID }}</h4>
      <h4>身分別:{{ role }}</h4>
    </div>
    <button @click="sign">登出</button>
  </template>
  <!-- 先打API等待  =====>  loading   ===== >顯示loaging_page -->
  <script setup>
  import axios from "axios";
  import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  const name = ref("");
  const userID = ref("");
  const role = ref("");
  const router = useRouter();
  
  const data = ref(true);
  
  onMounted(async () => {
    try {
      const res = await axios.get(`/api/v1/users/showMe`);
      console.log(res);
      data.value = false;
      name.value = res.data.user.name;
      userID.value = res.data.user.userId;
      role.value = res.data.user.role;
    } catch (error) {
      console.log(error);
      router.push("/");
    }
  });
  
  const sign = async () => {
    try {
      const res = await axios.delete(`/api/v1/auth/logout`);
      console.log(res);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  
  // 狀態碼200 成功
  //400  前後端
  //500 後端
  </script>
  
  <style></style>
  