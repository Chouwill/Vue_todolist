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
    <h2>
      規劃人生目標的同時，享受與放鬆生活是達成目標的助力，讓旅遊與美食豐富你的每一步。
    </h2>
    <main>
      <div class="div">
        <h2>國內旅遊</h2>
        <ul v-for="item in enjoyData" :key="item.id">
          <li>
            <h4>大英博物館</h4>
            <img :src="item.imageUrl" alt="" />
            <a href="#">查看活動</a>
          </li>
          <li>
            <h4>威尼斯水上嘉年華</h4>
            <img :src="item.imagesUrl" alt="" />
            <a href="#">查看活動</a>
          </li>
          <li>
            <h4>澎湖潛水漫步</h4>
            <img :src="item.imagesUrl[1]" alt="" />
            <a href="#">查看活動</a>
          </li>
        </ul>
      </div>
      <div class="div">
        <h2>美食饗宴</h2>
        <ul v-for="item in enjoyData" :key="item.id">
          <li>
            <h4>日式生魚片之旅</h4>
            <img :src="item.imagesUrl[2]" alt="" />
            <a href="#">查看活動</a>
          </li>
          <li>
            <h4>法式牛排晚餐</h4>

            <img :src="item.imagesUrl[3]" alt="" />
            <a href="#">查看活動</a>
          </li>
          <li>
            <h4>經典美式蘋果派</h4>
            <img :src="item.imagesUrl[4]" alt="" />
            <a href="#">查看活動</a>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.container {
  width: 100%;
  background-color: #c7eeff;
  main {
    width: 100%;
    margin: 50px 0;
    .div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // border: 5px solid olive;
      flex-direction: column;
      h2 {
        width: 70%;
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
        @media (max-width: 768px) {
          width: 100%;
          flex-wrap: wrap;
          // height: 500px;
        }
        @media (max-width: 414px) {
          width: 100%;
          flex-wrap: wrap;
          // height: 500px;
        }
        li {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border: 5px solid red;
          position: relative;
          @media (max-width: 768px) {
            width: 80%;
            flex-wrap: wrap;
            border: 5px solid rgb(25, 0, 255);

            // height: 500px;
          }
          @media (max-width: 414px) {
            width: 75%;
            flex-wrap: wrap;
            // height: 500px;
            border: 5px solid orange;
          }
          h4 {
            text-align: center;
          }
          img {
            // max-width: 50%;
            width: 200px;
            height: 300px;
            // height: 50%;
          }
          a {
            width: 50%;
            position: absolute;
            background-color: #4ba0d7;
            bottom: 0;
            text-align: center;
            font-weight: 700;
            font-size: 15px;
            padding: 10px 0;
            @media (max-width: 768px) {
              width: 200px;
              flex-wrap: wrap;
              // height: 500px;
            }
            @media (max-width: 414px) {
              width: 200px;
              flex-wrap: wrap;
              // height: 500px;
            }
          }
        }
      }
    }
  }
}
</style>
