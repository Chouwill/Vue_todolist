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
        <div class="main_img_deskTop_pg">
          <img src="/src/image/New idea-amico.svg" alt="" />
        </div>
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
        <div class="main_img_only">
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
  background-color: #fff;
  .page_header {
    width: 100%;
    display: flex;
    height: 900px;
    // border: 5px solid #000;
    position: relative;
    margin: 40px 0;

    .bg {
      width: 40%;
      // border: 2px solid red;
      // background-image: url("/src/image/Personal\ goals-bro.svg");
      background-color: #4ba0d7;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      max-height: 900px;

      @media (max-width: 768px) {
        display: none;
      }
      h2 {
        position: absolute;
        color: orange;
        bottom: 450px;
        left: 600px;
        z-index: 10;
        text-align: center;
        font-size: 45px;
        line-height: 1.2;
      }
    }
    .Carousel_box {
      // background-color: olive;
      width: 60%;
      // height: 30vh;
      max-height: 900px;
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
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 15px solid rgb(128, 0, 0);
    background-color: #fff;

    flex-wrap: wrap;
    @media (max-width: 414px) {
      width: 100%;
      // height: 500px;
    }
    .main_team {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // border: 50px solid olive;
      flex-direction: row;
      @media (max-width: 414px) {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
        // border: 5px solid rgb(128, 83, 0);
        gap: 15px;
        margin: 10px 0;
      }

      .main_img {
        // border: 5px solid yellow;
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
            height: 500px;
          }
          @media (max-width: 414px) {
            max-width: 250px;
            width: 100%;
            height: 250px;
            flex-wrap: wrap;
            border: 5px solid green;
          }
        }
      }
      .main_text {
        // border: 5px solid rgb(255, 187, 0);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex: 1;
        height: 500px;
        margin: 0 20px;
        h2 {
          width: 100%;
          font-size: 30px;
          // border: 2px solid red;
          text-align: left;
          color: #43aac1;
          @media (max-width: 768px) {
            font-size: 25px;
          }
          @media (max-width: 414px) {
            // line-height: 10;
          }
        }
        ol {
          width: 100%;
          font-size: 17px;
          li {
            p {
              font-size: 25px;
              .special_text {
                font-size: 28px;
                color: gold;
                font-weight: 700;
              }
              @media (max-width: 768px) {
                font-size: 17px;
              }
              @media (max-width: 414px) {
                line-height: 2.5;
              }
            }
          }
        }
      }
      .main_img_deskTop_pg {
        display: none; // 預設隱藏

        @media (max-width: 414px) {
          display: block; // 在手機顯示
        }

        img {
          max-width: 100%;
          height: 100%;
          object-fit: contain;

          @media (max-width: 768px) {
            display: none; // 在平板隱藏
          }

          @media (max-width: 414px) {
            display: block; // 在手機顯示
            width: 100%;
            height: 250px;
            flex-wrap: wrap;
            border: 5px solid orange;
          }
        }
      }
      .main_img_only {
        // border: 5px solid red;
        // border: 5px solid yellow;
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
            height: 500px;
          }
          @media (max-width: 414px) {
            display: none;
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
