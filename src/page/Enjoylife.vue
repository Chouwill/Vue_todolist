<script setup>
import EnjoyItem from "../components/EnjoyItem.vue";
import Windows from "../components/Windows.vue";
import { useReserveStore } from "../stores/Reserve.js";
import { ref, onMounted, computed } from "vue";

const store = useReserveStore();

const products = ref([]);
const ReserveFuned = ref(null);
console.log(store);

onMounted(async () => {
  await store.getDataList();
  products.value = store.reseveArr.products; //   傳遞給products
  // console.log("Loaded products:", store.reseveArr); // 調試信息
  console.log("Pinia傳遞給Products", products.value);
});

const ReserveFun = (index) => {
  ReserveFuned.value = products.value[index]   //尋找index
  console.log(ReserveFuned.value);
  
};
</script>

<template>
  <div class="container">
    <main>
      <Windows :product="ReserveFuned"/>
      <div class="div">
        <h2 class="item_title">國內旅遊</h2>
        <ul>
          <!-- <li v-for="(item, index) in products.slice(0, 3)" :key="item.id">
            <h4>{{ item.title }}</h4>
            <img :src="item.imageUrl" alt="" />
            <a href="#" @click.prevent="ReserveFun(index)">查看活動</a>
          </li> -->
          <EnjoyItem v-for="item in products.slice(0, 3)" :product="item" :key="item.id"/>
        </ul>
        
      </div>
      <div class="div">
        <h2 class="item_title">美食饗宴</h2>
        <ul>
          <li v-for="(item,index) in products.slice(3, 6)" :key="item.id">
            <h4>{{ item.title }}</h4>
            <img :src="item.imageUrl" alt="" />
            <a href="#" @click.prevent="ReserveFun(index+3)">查看活動</a>
          </li>
        </ul>
      </div>

      <div class="result">
        <!-- {{ store.reseveArr }} -->
        <h2>您已成功訂購</h2>
        <h2>{{ store.CustomerDate.value }}</h2>
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
  background-color: #a0d8f0;
  main {
    width: 100%;
    margin: 150px 0;
    .div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // border: 5px solid olive;
      flex-direction: column;
      .item_title {
        width: 70%;
        text-align: left;
        // border: 2px solid red;
        @media (max-width: 768px) {
          width: 100%;
          flex-wrap: wrap;
          // height: 500px;
          text-align: center;
        }
        @media (max-width: 768px) {
          width: 100%;
          flex-wrap: wrap;
          // height: 500px;
          text-align: center;
        }
      }
      ul {
        width: 70%;
        display: flex;
        gap: 20px;
        list-style: none;
        // border: 5px solid orange;
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
          width: 20%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          // border: 5px solid red;
          position: relative;
          @media (max-width: 768px) {
            width: 40%;
            flex-wrap: wrap;
            // border: 5px solid rgb(25, 0, 255);

            // height: 500px;
          }
          @media (max-width: 414px) {
            width: 75%;
            flex-wrap: wrap;
            // height: 500px;
            // border: 5px solid orange;
          }
          h4 {
            text-align: center;
          }
          img {
            // max-width: 50%;
            width: 200px;
            height: 300px;
            // height: 50%;
            object-fit: cover;
          }
          a {
            width: 200px;
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
