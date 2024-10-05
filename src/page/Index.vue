<template>
  <div class="container">
    <div class="page_header">
      <div class="bg">
        <!-- <h1>Dream Plan</h1> -->
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
            <img :src="item.imageUrl" alt="" style="max-width: 100%" />
            <!-- <h4>{{ item.title }}</h4> -->
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
        <div class="main_img order-1">
          <img src="/src/image/start_paln-2.png" alt="" />
        </div>
        <div class="main_text order-2">
          <h2>客製你的Plan</h2>
          <ol>
            <li>
              <p>客製讀書計畫： 創建您專屬的讀書計畫</p>
            </li>
            <li>
              <p>
                人生目標諮詢規劃： 規劃您的人生大方向，助您實現更有意義的人生。
              </p>
            </li>
            <li>
              <p>
                <span class="special_text">$加值功能</span>
                並享有AI功能的專屬祕書，檢視進度
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div class="main_team">
        <div class="main_img order-3">
          <img src="/src/image/New_idea.png" alt="" />
        </div>
        <div class="main_text order-4">
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
        <!-- <div class="main_img_only" style="display: none;">
          <img src="/src/image/New_idea.png" alt="" />
        </div> -->
      </div>
      <div class="main_team">
        <div class="main_img order-5">
          <img src="/src/image/Travel_insurance_bro.png" alt="" />
        </div>
        <div class="main_text order-6">
          
            <h2>享受放鬆生活</h2>
            <el-scrollbar height="400px">
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
              <!-- <button>顯示更多</button> -->
              <li class="text_more">
                <p>
                  紀錄人生重要時刻：
                  除了讀書計畫，您還可以使用我們的服務記錄休閒娛樂生活中的精彩瞬間，分享您的喜悅和愉悅。
                </p>
              </li>
            </ol>
          </el-scrollbar>
        </div>
      </div>
      <!-- ---- -->
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
  // width: 100%;
  height: 100%;
  object-fit: cover;
}
* {
  // list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
.container {
  margin-top: 10vh;
  background-color: #fff;
  background-color: #c7eeff;
  background-color: #a0d8f0;

  .page_header {
    width: 80%;
    display: flex;
    height: 450px;
    justify-content: center;
    // align-items: center;
    // border: 5px solid #000;
    margin: 40px 0;
    position: relative;

    .bg {
      width: 40%;
      // border: 2px solid red;
      // background-image: url("/src/image/Personal\ goals-bro.svg");
      background-color: #4ba0d7;
      background-color: #96cde4;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      max-height: 900px;
      // position: relative;
      img {
        width: 100%;
        height: 50px;
        position: absolute;
        bottom: 237px;
        right: 128px;
      }
      @media (max-width: 1024px) {
        display: none;
      }
      @media (max-width: 768px) {
        display: none;
      }
      h1 {
        color: #000;
        position: absolute;
        bottom: 150px;
        right: 50px;
      }
      h2 {
        position: absolute;
        color: #2c3e99;
        bottom: 150px;
        right: 500px;
        z-index: 10;
        text-align: center;
        font-size: 45px;
        line-height: 1.2;
        text-shadow: 2px 2px 4px #ffffff; /* 增加白色陰影 */
      }
    }
    .Carousel_box {
      // background-color: olive;
      width: 40%;
      // height: 30vh;
      max-height: 900px;
      // border: 2px solid tan;
      // z-index: 2;
      @media (max-width: 768px) {
        display: block;
        margin: 0 auto;
        width: 100%;
      }
      @media (max-width: 414px) {
        display: block;
        margin: 0 auto;
        width: 100%;
        // z-index: 2;
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
      background: #2c3e99; // 設定活動分頁點顏色
      width: 10px;
      height: 10px;
      border-radius: 20px;
    }
  }
  main {
    width: 70%;
    gap: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 20px solid red;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      // background-color: orange;
    }
    @media (max-width: 414px) {
      width: 100%;
      flex-direction: column;
      // background-color: rgb(51, 0, 255);
    }
    .main_team {
      width: 100%;
      display: flex;
      justify-content: center;
 
      height: 500px;
      @media (max-width: 768px) {
        width: 90%;
        height: 550px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        // border: 5px solid brown;
        // background-color: rgb(51, 0, 255);
      }
      @media (max-width: 414px) {
        width: 100%;
        height: 550px;
        flex-direction: column;
        // background-color: rgb(51, 0, 255);
      }
      .main_img {
        // border: 10px solid #000;
        width: 50%;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 陰影效果 */
        @media (max-width: 768px) {
          // width: 50%;
          // height: 450px;
          flex-direction: column;
          // border: 5px solid tomato;
        }
        @media (max-width: 414px) {
          display: none;
        }
        img {
          // border: 3px solid orange;
          width: 100%;
          height: 420px;
          @media (max-width: 768px) {
            width: 100%;
            height: 450px;
            flex-direction: column;
            // border: 5px solid tomato;
          }
          @media (max-width: 414px) {
            display: none;
          }
        }
      }
      .main_text {
        width: 50%;
        display: flex;
        justify-content: safe center;
        align-items: center;
        flex-direction: column;
        overflow-y: auto;
        // border: 2px solid yellow;
        background-color: white;
        padding: 24px;
        @media (max-width: 768px) {
          width: 50%;
          height: 450px;
          // border: 2px solid rgb(0, 255, 64);
        }
        @media (max-width: 414px) {
          width: 100%;
          height: 550px;
          // border: 6px solid rebeccapurple;
        }
        h2 {
          text-align: center;
          font-size: 24px;
        }
        ol {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding-left: 16px;
          // gap: 15px;

          // width: 400px;
          // height: 400px;
          // border: 1px solid red;
          @media (max-width: 768px) {
            // width: 300px;
            // height: 450px;
            // border: 2px solid rgb(0, 255, 64);
          }
          @media (max-width: 414px) {
            gap: 5px;
          }
          li {
            p {
              font-size: 15px;
              overflow: hidden;
              @media (max-width: 768px) {
                font-size: 15px;
              }
            }
          }
          .text_more {
            // display: none;
          }
          button {
            width: 150px;
            padding: 10px 5px;
            margin: 0 auto;
          }
        }
      }
      .order-1 {
        order: 1;
      }
      .order-2 {
        order: 2;
      }
      .order-3 {
        order: 3;
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
    "https://vue3-course-api.hexschool.io/api/bookplanerviceintroduction/products"
  ),
  axios.get("https://vue3-course-api.hexschool.io/api/dream_service/products"),
];

onMounted(async () => {
  try {
    const resArr = await Promise.all(arr);
    console.log(resArr[1].data);
    VipServe.value = resArr[1].data.products;
  } catch (error) {
    console.log("錯誤處理", error);
  }
  console.log("執行其他動作");
});
</script>
