<template>
  <div class="container">
    <div class="page_header">
      <div class="bg">
        <img
          src="https://cdn.wegic.ai/assets/onepage/ai/image/ad48df62-2da6-469f-b7f3-5a70286d187d.jpeg"
          alt=""
        />
      </div>
      <div class="try_box">
        <h2>掌控你的任務和目標</h2>
        <button>立刻體驗</button>
      </div>
      <div class="link_box">
        <div class="text_link">
          <h2>UP NEXT</h2>
          <h2>輕鬆安排每一天</h2>
          <font-awesome-icon
            icon="fa-solid fa-arrow-right"
            class="arrow_link"
          />
        </div>
        <div class="bg_link">
          <img
            src="https://cdn.wegic.ai/assets/onepage/ai/image/0c20fd21-edf0-44c0-b461-6d2bb0af20c3.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
    <main>
      <div class="main_introduce_one">
        <div class="main_text_one">
          <h2>提升你的生產力</h2>
          <p>
            使用我們的待辦事項和日曆功能，輕鬆管理任務和目標，享受井然有序的生活。
          </p>
          <router-link to="/todolist">了解更多</router-link>
        </div>
        <div class="main_img_one">
          <img
            src="https://cdn.wegic.ai/assets/onepage/ai/image/176b7b66-8d82-4e8b-a6be-756a20391c3d.jpeg"
            alt=""
          />
          <div class="people_num">
            <div class="check_icon">
              <font-awesome-icon
                icon="fa-solid fa-check"
                class="check_icon_img"
              />
            </div>
            <div class="num_text">
              <span>5000+</span>
              <p>滿意用戶</p>
            </div>
          </div>
        </div>
      </div>
      <div class="main_introduce_two">
        <div class="visitor_img">
          <img
            src="https://cdn.wegic.ai/assets/onepage/ai/image/f86c5cfe-e0d3-476b-8bc8-cb3c509ad8dc.jpeg"
            alt=""
          />
        </div>
        <div class="visitor_text">
          <h4>
            PlanItAll幫助我更好地管理日常任務​​和長期目標，<br />讓我的生活變得更有秩序和更有效率。
          </h4>

          <div class="visitor_name">
            <h5>李華</h5>
            <p>創業者</p>
          </div>
        </div>
      </div>
      <div class="main_introduce_three">
        <div class="title_box">
          <h2>立即加入PlanltAll</h2>
          <p>註冊免費帳戶，或升級到PRO會員，享受更多高級功能。</p>
        </div>
        <ul>
          <li>
            <div class="title_icon">
              <font-awesome-icon
                icon="fa-solid fa-check"
                class="function_icon"
              />
              <h4>日曆整合</h4>
            </div>
            <p>同步所有日程</p>
          </li>
          <li>
            <div class="title_icon">
              <font-awesome-icon
                icon="fa-regular fa-calendar"
                class="function_icon"
              />
              <h4>提醒功能</h4>
            </div>
            <p>不再錯過重要時刻</p>
          </li>
          <li>
            <div class="title_icon">
              <font-awesome-icon
                icon="fa-regular fa-bell"
                class="function_icon"
              />
              <h4>待辦事項</h4>
            </div>
            <p>高效管理你的任務</p>
          </li>
        </ul>
        <router-link> 立即註冊 </router-link>
      </div>
      <div class="Teaching_steps">
        <div class="inner_box">
          <div class="img_box">
            <img
              src="https://cdn.wegic.ai/assets/onepage/ai/image/68edf881-f269-4843-9bff-1a4f7e7090ae.jpeg"
              alt=""
            />
          </div>
          <div class="step_title">
            <h2>開始使用PlanItAll的步驟</h2>
            <ol>
              <li>
                <h3>註冊一個免費帳戶，開始體驗基礎功能。</h3>
              </li>
              <li>
                <h3>建立和管理你的待辦事項和行事曆事件。</h3>
              </li>
              <li>
                <h3>升級到PRO會員，解鎖更多高級功能。</h3>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="question">
        <ul class="left_question">
          <li>
            <div class="control">
              <h5>免費版和付費版有什麼差別？</h5>
              <button @click="OpenQuestion(0)">
                <font-awesome-icon icon="fa-solid fa-plus" class="btn_plus" />
              </button>
            </div>
            <h5 v-show="questions[0]">
              免費版提供基礎的待辦事項和日曆功能，付費版解鎖更多高級功能。
            </h5>
          </li>
          <li>
            <div class="control">
              <h5>是否有學生或非營利組織的折扣？</h5>
              <button @click="OpenQuestion(1)">
                <font-awesome-icon icon="fa-solid fa-plus" class="btn_plus" />
              </button>
            </div>
            <h5 v-show="questions[1]">
              我們為學生和非營利組織提供特別折扣，請聯絡我們以了解詳情。
            </h5>
          </li>
          <li>
            <div class="control">
              <h5>價格是如何決定的？</h5>
              <button @click="OpenQuestion(2)">
                <font-awesome-icon icon="fa-solid fa-plus" class="btn_plus" />
              </button>
            </div>
            <h5 v-show="questions[2]">
              價格根據你選擇的功能和服務套餐而定，請查看我們的價格頁面。
            </h5>
          </li>
        </ul>
        <ul class="right_question">
          <li>
            <div class="control">
              <h5>使用這個產品需要程式設計知識嗎？</h5>
              <button @click="OpenQuestion(3)">
                <font-awesome-icon icon="fa-solid fa-plus" class="btn_plus" />
              </button>
            </div>
            <h5 v-show="questions[3]">
              不需要，PlanItAll設計為用戶友好的介面，任何人都可以輕鬆上手。
            </h5>
          </li>
          <li>
            <div class="control">
              <h5>是否有成為代理商的機會？</h5>
              <button @click="OpenQuestion(4)">
                <font-awesome-icon icon="fa-solid fa-plus" class="btn_plus" />
              </button>
            </div>
            <h5 v-show="questions[4]">
              是的，我們歡迎有興趣的合作夥伴加入我們的代理商計劃，請聯絡我們以了解更多資訊。
            </h5>
          </li>
          <li>
            <div class="control">
              <h5>接受哪些付款方式？</h5>
              <button @click="OpenQuestion(5)">
                <font-awesome-icon icon="fa-solid fa-plus" class="btn_plus" />
              </button>
            </div>
            <h5 v-show="questions[5]">
              我們接受多種支付方式，包括信用卡、支付寶和微信支付。
            </h5>
          </li>
        </ul>
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
    width: 100%;
    position: relative;
    .bg {
      width: 100%;
      border: 5px solid palegreen;
      position: relative;
      img {
        width: 100%;
        height: 1000px;
        // border: 8px solid rgb(25, 42, 110);
        object-fit: cover;
      }
    }
    .try_box {
      width: 500px;
      height: 250px;
      // border: 3px solid peru;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      position: absolute;
      top: 500px;
      left: 250px;
      h2 {
        color: white;
        font-size: 55px;
        font-weight: bolder;
        // position: absolute;
      }
      button {
        // position: absolute;
        width: 122px;
        height: 60px;
        padding: 20px 20px;
        background-color: #000;
        color: white;
        border-radius: 10px;
        font-size: 20px;
      }
    }
    .link_box {
      width: 505px;
      height: 250px;
      border: 1px solid peru;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: row;
      position: absolute;
      bottom: 130px;
      right: 0;
      .text_link {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 250px;
        justify-content: center;
        align-items: center;
        h2 {
          color: rgb(163, 16, 16);
          font-size: 25px;
          font-weight: bolder;
          // position: absolute;
          line-height: 0.5;
        }
        .arrow_link {
          font-size: 35px;
        }
      }
      .bg_link {
        width: 100%;
        flex: 1;
        border: 1px solid palegreen;
        height: 250px;
        img {
          max-width: 100%;
          height: 250px;
          object-fit: cover;
        }
      }
    }
  }

  main {
    width: 100%;
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
    .main_introduce_one {
      width: 100%;
      background-color: #e8fff4;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid peru;
      gap: 100px;
      .main_text_one {
        gap: 15px;
        display: flex;
        flex-direction: column;
        border: 2px solid peru;

        h2 {
          font-size: 25px;
        }
        p {
          font-size: 15px;
        }
        a {
          width: 100px;
          padding: 15px 15px;
          background-color: #21b57f;
          color: white;
          border-radius: 10px;
        }
      }
      .main_img_one {
        width: 400px;
        border: 5px solid palevioletred;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        height: 500px;
        position: relative;

        img {
          width: 100%;
          height: 786px;
        }
        .people_num {
          width: 450px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          border: 2px solid palegreen;
          background-color: #21b57f;
          height: 200px;
          position: absolute;
          bottom: 0;

          .check_icon {
            padding: 25px;
            background-color: white;
            border-radius: 100%;
            margin-left: 40px;
            margin-top: 40px;
            .check_icon_img {
              font-size: 40px;
              color: #21b57f;
            }
          }
          .num_text {
            display: flex;
            flex-direction: column;
            margin-left: 40px;
            span {
              font-size: 25px;
              font-weight: 900;
              text-align: center;
            }
            p {
              color: gray;
              font-size: 15px;
              text-align: center;
            }
          }
        }
        a {
          padding: 15px 15px;
          background-color: #21b57f;
          color: white;
        }
      }
    }
    .main_introduce_two {
      width: 100%;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid peru;
      // gap: 100px;
      height: 500px;
      .visitor_img {
        width: 50%;
        // width: 200px;
        display: flex;
        border: 2px solid rgb(164, 12, 30);
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
        img {
          max-width: 35%;
          border-radius: 20px;
        }
      }
      .visitor_text {
        width: 50%;
        border: 5px solid palevioletred;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        height: 500px;
        padding-left: 50px;

        h4 {
          font-size: 25px;
        }
        .visitor_name {
          line-height: 0.5;
          h5 {
            font-size: 20px;
          }
          p {
            font-size: 20px;
          }
        }
      }
    }
    .main_introduce_three {
      width: 100%;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .title_box {
        font-size: 25px;
        text-align: center;
      }
      ul {
        display: flex;
        width: 50%;
        border: 5px solid palegreen;
        justify-content: space-evenly;
        align-items: center;
        gap: 150px;
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .title_icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            gap: 20px;
            .function_icon {
              font-size: 25px;
              color: #21b57f;
            }
            h4 {
              font-size: 25px;
            }
          }
          p {
            color: gray;
            font-size: 15px;
            text-align: center;
          }
        }
      }
      a {
        padding: 20px 40px;
        background-color: #21b57f;
        border-radius: 20px;
        color: white;
        font-size: 20px;
      }
    }
    .Teaching_steps {
      background-color: #e8fff4;
      width: 100%;
      height: 700px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 35px;
      .inner_box{
        width: 1000px;
        display: flex;
        height: 700px;
        border: 5px solid olive;
        justify-content: center;
        align-items: center;
        position: relative;
        .img_box {
        width: 500px;
        height: 500px;
        border: 5px solid olive;
        position: relative;

        img {
          max-width: 100%;
          height: 100%;
        }
      }
      .step_title {
        width: 500px;
        height: 300px;
        border: 2px solid orange;
        position: relative;
        right: 50px;
        h2 {
          font-size: 35px;
        }
        ol {
          width: 500px;
          border: 1px solid red;
          display: flex;
          flex-direction: column;
          gap: 15px;
          color: #1a9e6f;
          li {
            width: 100%;
            text-align-last: left;
            height: 50px;
            // border: 1px solid red;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            line-height: 0.5;
            font-size: 30px;
            color: #00a372;
            border-bottom: 2px solid #d2dbd7;
            h3 {
              content: "";
              color: #cf2222;
              font-size: 20px;
            }
          }
        }
      }
      }
    }
    .question {
      width: 100%;
      background-color: #ffffff;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;
      ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        list-style: none;
        font-size: 20px;
        // border: 5px solid palegreen;
        li {
          .control {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease;
            &:hover {
              background-color: #f1f1f1;
            }
            button {
              border: none;
              width: 50px;
              height: 35px;
              background-color: #21b57f;
              color: white;
              border-radius: 5px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              transition: background-color 0.3s ease;
              &:hover {
                background-color: #1a9e6f;
              }
              .btn_plus {
                font-size: 20px;
              }
            }
          }
          h5 {
            max-height: 100px; /* 設置最大高度 */
            overflow-y: auto; /* 添加滾動條 */
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const questions = ref([false, false, false, false, false, false]);

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

const OpenQuestion = (index) => {
  questions.value[index] = !questions.value[index];
  console.log(questions.value);
};

// (0) 和 [0] 是相互匹配的。具體來說：

// (0) 是函數調用語法，用於調用函數並傳遞參數。
// [0] 是陣列訪問語法，用於訪問或設置陣列中的元素
</script>
