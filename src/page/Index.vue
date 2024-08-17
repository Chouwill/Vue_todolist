<template>
  <div class="container">
    <div class="page_header">
      <div class="bg">
        <h2>
          Make<br />
          your dream come true
        </h2>
      </div>
      <div class="Carousel_box">
        <swiper
          :spaceBetween="30"
          :centeredSlides="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
          :navigation="false"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="item in VipServe" :key="item.id">
            <img :src="item.imageUrl" alt="" style="max-width: 300px" />
            <h4>{{ item.title }}</h4>
          </swiper-slide>
          <!-- <swiper-slide>Slide 2</swiper-slide 
          ><swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide
          ><swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide
          ><swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide
          ><swiper-slide>Slide 9</swiper-slide>  -->
        </swiper>
      </div>
    </div>
    <main>
      <div class="main_team">
        <div class="main_img">
          <img src="/src/image/start_paln-2.png" alt="" />
        </div>
        <div class="main_text">
          <h2>客製你的Plan</h2>
          <ol>
            <li>
              <p>客製讀書計畫： 創建您專屬的讀書計畫</p>
            </li>
            <li>
              <p>
                人生目標諮詢規劃：
                規劃您的人生大方向，，助您實現更有意義的人生。
              </p>
            </li>
            <li>
              <p>$加值功能，附有AI功能的專屬祕書，檢視進度</p>
            </li>
          </ol>
        </div>
      </div>
      <div class="main_team">
        <div class="main_text">
          <h2>豐富的資源</h2>
          <ol>
            <li>
              <p>推薦合適的主題資源</p>
            </li>
            <li>
              <p>
                人生目標諮詢規劃： 規劃您的人生大方向，助您實現更有意義的人生。
              </p>
            </li>
            <li>
              <p>更多更豐富的外部資源共享分享與您</p>
            </li>
          </ol>
        </div>
        <div class="main_img">
          <img src="/src/image/New idea-amico.svg" alt="" />
        </div>
      </div>

      <div class="main_team">
        <div class="main_img">
          <img src="/src/image/Travel insurance-bro.svg" alt="" />
        </div>
        <div class="main_text">
          <h2>享受放鬆生活</h2>
          <ol>
            <li>
              <p>
                休閒娛樂生活建議：
                在忙碌的學習計畫中，我們強烈鼓勵您享受休閒娛樂生活。參與您喜歡的運動和娛樂活動
              </p>
            </li>
            <li>
              <p>
                自訂提醒功能：
                設定提醒通知，確保您不會錯過任何重要的學習或目標達成日期。同時，提醒您也要安排時間享受屬於自己的休閒時光，讓身心得以充分放鬆。
              </p>
            </li>
            <li>
              <p>
                紀錄人生重要時刻：
                除了讀書計畫，您還可以使用我們的服務記錄休閒娛樂生活中的精彩瞬間，分享您的喜悅和愉悅。
              </p>
            </li>
          </ol>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
* {
  // list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
.container {
  background-color: #c7eeff;
  // background-color: #fff;

  // background-color: white;

  .page_header {
    width: 100%;
    display: flex;
    height: 30vh;
    position: relative;

    .bg {
      width: 40%;
      // border: 2px solid red;
      // background-image: url("/src/image/Personal\ goals-bro.svg");
      background-color: #4ba0d7;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      height: 30vh;
      
      @media (max-width: 768px) {
        display: none;
      }
      h2 {
        position: relative;
        color: orange;
        top: 30px;
        left: 372px;
        z-index: 10;
        text-align: center;
        font-size: 35px;
      }
    }
    .Carousel_box {
      // background-color: olive;
      width: 60%;
      height: 30vh;
      // border: 2px solid tan;
      @media (max-width: 768px) {
        display: block;
        margin: 0 auto;
      }
    }
  }
  .mySwiper {
    ::v-deep .swiper-pagination {
      position: absolute;
      top: 50%;
      left: 10px; /* 確保 right 屬性設置 */
      transform: translateY(-50%); /* 確保 translateY 設置 */
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    ::v-deep .swiper-pagination-bullet-active {
      background: #00ff00; // 設定活動分頁點顏色
      width: 10px;
      height: 10px;
      border-radius: 20px;
    }
  }
  main {
    margin: 20px 0;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 5px solid olive;
    background-color: #fff;

    flex-wrap: wrap;
    .main_team {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // border: 50px solid olive;
      flex-direction: row;

      .main_img {
        // border: 2px solid yellow;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        img {
          max-width: 100%;
          height: 100%;
          object-fit: contain;
          @media (max-width: 768px) {
            width: 100%;
            height: 50vh;
          }
        }
      }
      .main_text {
        // border: 2px solid yellow;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        flex: 1;
        height: 100%;
        h2 {
          width: 70%;
          // border: 2px solid red;
          text-align: left;
          color: #43aac1;
        }
        ol {
          width: 100%;
          // border: 2px solid rgb(35, 14, 76);
          font-size: 25px;
          li {
            p {
              font-size: 25px;
            }
          }
        }
      }
    }
  }
}
</style>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

const VipServe = ref([]);

const arr = [
  axios.get(
    "https://vue3-course-api.hexschool.io/api/dreamcompressionapi/products"
  ),
  axios.get("https://vue3-course-api.hexschool.io/api/vipbookplan/products"),
  axios.get(
    "https://vue3-course-api.hexschool.io/api/bookplanerviceintroduction/products"
  ),
];

onMounted(async () => {
  try {
    const resArr = await Promise.all(arr);
    console.log(resArr[1].data);
    VipServe.value = resArr[2].data.products;
  } catch (error) {
    console.log("錯誤處理", error);
  }
  console.log("執行其他動作");
});
</script>
