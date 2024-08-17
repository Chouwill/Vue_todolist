<script setup>
import axios from "axios";
import { ref, reactive, onMounted } from "vue";

const enjoyData = ref([]);

const arr = [
  axios.get("https://vue3-course-api.hexschool.io/api/enjoylife_api/products"),
];

onMounted(async () => {
  try {
    const resArr = await Promise.all(arr); //Promise.allSettled  沒生效????
    console.log(resArr[0].data);
    enjoyData.value = resArr[0].data.products; //  享受生活API
    // ---------------------------------------------
  } catch (error) {
    console.log("錯誤處理", error);
  }
  console.log("執行其他動作");
});
</script>
<template>
  <div class="container">
    <main>
      <div class="div">
        <h2>國內旅遊</h2>
        <ul v-for="item in enjoyData" :key="item.id">
          <li>
            <h4>澎湖花火節</h4>
            <img :src="item.imageUrl" alt="">
            <a href="#">查看活動</a>
          </li>
          <li>
            <h4>澎湖花火節</h4>
            <img :src="item.imagesUrl" alt="">
            <a href="#">查看活動</a>
          </li>
          <li>
            <h4>澎湖花火節</h4>
            <img :src="item.imagesUrl[1]" alt="">
            <a href="#">查看活動</a>
          </li>
        </ul>
      </div>
      <div class="div">
        <h2>國外美食</h2>
        <ul v-for="item in enjoyData" :key="item.id">
          <li>
            <h4>澎湖花火節</h4>
            <img :src="item.imagesUrl[2]" alt="">
          </li>
          <li>
            <h4>澎湖花火節</h4>
            <img :src="item.imagesUrl[3]" alt="">
          </li>
          <li>
            <h4>澎湖花火節</h4>
            <img :src="item.imagesUrl[4]" alt="">
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
*{
    box-sizing: border-box;
}
.container {
  width: 100%;
  main {
    width: 100%;
    .div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    //   border: 5px solid olive;
      flex-direction: column;
      h2 {
        width: 48%;
        text-align: left;
        border: 2px solid red;
      }
      ul {
        width: 70%;
        display: flex;
        gap: 20px;
        list-style: none;
        border: 5px solid orange;
        justify-content: center;
        align-items: center;
        li{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border: 5px solid red;
            position: relative;
            h4{
                text-align: center;

            }
            img{
                max-width: 50%;
                height: 50%;
            }
            a{
                width: 50%;
                
                position: absolute;
                background-color: #AFBF30;
                bottom: 0;
                text-align: center;
                padding: 10px 0;
            }
        }
      }
    }
  }
}
</style>
