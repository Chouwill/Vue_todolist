<template>
  <div class="container">
    <div class="banner">
      <div class="banner_box">
        <img src="/src/image/Pngtreecalendarplan.png" alt="" />
        <div class="banner_text">
          <h2>ABOUT <br />US</h2>
        </div>
      </div>
    </div>
    <main>
      <div class="about_us_title">
        <h2>
          教你懂的<br />
          運用時間管理生活 <br />完成夢想
        </h2>
      </div>
      <!-- ------------------------------------------ -->
      <div class="main_introduce">
        <div class="introduce_team">
          <div class="introduce_img order-1">
            <img src="/src/image/start_paln-2.png" alt="" />
          </div>
          <div class="introduce_text order-2">
            <h2>客製你的Plan</h2>
            <ol>
              <li>
                <p>客製讀書計畫： 創建您專屬的讀書計畫</p>
              </li>
              <li>
                <p>
                  人生目標諮詢規劃：
                  規劃您的人生大方向，助您實現更有意義的人生。
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
        <div class="introduce_team">
          <div class="introduce_img order-3">
            <img src="/src/image/New_idea.png" alt="" />
          </div>
          <div class="introduce_text order-4">
            <h2>豐富的資源</h2>
            <ol>
              <li>
                <p>推薦合適的主題資源</p>
              </li>
              <li>
                <p>
                  人生目標諮詢規劃：
                  規劃您的人生大方向，助您實現更有意義的人生。
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
        <div class="introduce_team">
          <div class="introduce_img order-5">
            <img src="/src/image/Travel_insurance_bro.png" alt="" />
          </div>
          <div class="introduce_text order-6">
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
              <!-- <button @click="OpenTextFun">顯示更多</button> -->
              <!-- <li class="text_more" v-if="OpenText"> -->
              <!-- <p>
                紀錄人生重要時刻：
                除了讀書計畫，您還可以使用我們的服務記錄休閒娛樂生活中的精彩瞬間，分享您的喜悅和愉悅。
              </p> -->
              <!-- </li> -->
            </ol>
          </div>
        </div>
      </div>
    </main>
    <div class="page_footer">
      <h2>
        加入我們的大家庭<br />開始您的個人化讀書計畫和人生規劃之旅<br />讓我們一同助您追尋更有意義的人生！
      </h2>
      <img src="/src/image/JoinUsSign banne.svg" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #c7eeff;
  background-color: #a0d8f0;

  margin-top: 10vh;
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #a0d8f0;
    margin: 0 0 0 0;
    // border: 5px solid orange;
    position: relative;
    height: auto;
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
    .banner_box {
      width: 50%;
      // border: 2px solid rgb(122, 5, 99);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      @media (max-width: 768px) {
        width: 500px;
        // border: 2px solid rgb(122, 5, 99);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 414px) {
        width: 100%;
      }
    }
    img {
      position: relative;
      max-width: 100%;
      height: 350px;
      object-fit: cover;
      // border: 9px solid palegreen;
      @media (max-width: 768px) {
        max-width: 100%;
      }
      @media (max-width: 414px) {
        // display: none;
        // height: 350px;
      }
    }
    h2 {
      color: #000;
      position: absolute;
      // right: 580px;
      top: 25px;
      left: 175px;
      text-align: center;
      font-size: 55px;
      @media (max-width: 768px) {
        top: 0;
        left: 0;
      }
      @media (max-width: 414px) {
        display: none;
      }
    }
  }
  main {
    width: 90%;
    gap: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin: 20px 0;
    // border: 2px solid red;
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
    .about_us_title {
      width: 100%;
      h2 {
        width: 100%;
        text-align: center;
        font-size: 35px;
        line-height: 2;
      }
    }
    .main_introduce {
      // border: 6px solid brown;
      width: 85%;
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
      .introduce_team {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        // flex-direction: column;
        // border: 5px solid palegreen;
        // border-bottom: 2px solid gray;
        height: 500px;
        &:nth-child(3) {
          border-bottom: none;
        }
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
          height: 350px;
          flex-direction: column;
          // background-color: rgb(51, 0, 255);
        }
        .introduce_img {
          // border: 10px solid #000;
          width: 50%;
          @media (max-width: 768px) {
            width: 50%;
            height: 420px;
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
        .introduce_text {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          width: 500px;
          height: 420px;
          // border: 2px solid yellow;
          overflow-y: auto;

          background-color: white;
          @media (max-width: 768px) {
            flex-direction: row;
            width: 50%;
            // height: 350px;
            // border: 5px solid rgb(0, 255, 64);
          }
          @media (max-width: 414px) {
            width: 100%;
            height: 350px;
            // border: 6px solid rebeccapurple;
            gap: 10px;
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
            gap: 15px;

            width: 400px;
            // height: 400px;
            // border: 1px solid red;
            @media (max-width: 768px) {
              width: 300px;
              // height: 450px;
              // border: 7px solid rgb(255, 0, 174);
            }
            @media (max-width: 414px) {
              gap: 5px;
            }
            li {
              p {
                font-size: 19px;
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
  .page_footer {
    margin: 50px 0;
    // border: 5px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      text-align: center;
      line-height: 3.5;
    }
  }
}
</style>

<script setup>
import { ref } from "vue";
const OpenText = ref(false);

const OpenTextFun = () => {
  OpenText.value = !OpenText.value;
  console.log(OpenText.value);
};
</script>
