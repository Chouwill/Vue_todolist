<template>
  <div class="container">
    <div class="banner">
      <img src="/src/image/adventure-1807495_1920 1.png" alt="" />
      <h2>ABOUT<br />US</h2>
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
          <div class="introduce_img">
            <img src="/src/image/start_paln-2.png" alt="" />
          </div>
          <div class="introduce_text">
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
          <div class="introduce_img">
            <img src="/src/image/New_idea.png" alt="" />
          </div>
          <div class="introduce_text">
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
          <div class="introduce_img_only">
            <img src="/src/image/New_idea.png" alt="" />
          </div>
        </div>
        <div class="introduce_team">
          <div class="introduce_img">
            <img src="/src/image/Travel insurance-bro.svg" alt="" />
          </div>
          <div class="introduce_text">
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
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    // background-color: #9fd658;
    margin: 50px 0 0 0;
    // border: 5px solid orange;
    position: relative;
    //
    height: 200px;
    img {
      position: relative;
      width: 10%;
      object-fit: contain;

      // border: 5px solid red;
    }
    h2 {
      color: red;
      position: relative;
      right: 225px;
      text-align: center;
      font-size: 35px;
    }
  }
  main {
    width: 90%;
    gap: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid red;
    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      background-color: orange;
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
        line-height: 2.5;
      }
    }
    .main_introduce {
      border: 6px solid brown;
      width: 100%;
      display: flex;
      gap: 25px;

      flex-direction: row;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        background-color: orange;
      }
      @media (max-width: 414px) {
        width: 100%;
        flex-direction: column;
        // background-color: rgb(51, 0, 255);
      }
      .introduce_team {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 5px solid palegreen;
        height: 1000px;
        @media (max-width: 768px) {
          width: 80%;
        }
        @media (max-width: 414px) {
          width: 100%;
          height: 550px;
          flex-direction: column;
          // background-color: rgb(51, 0, 255);
        }
        .introduce_img_only {
          display: none;
        }
        .introduce_img {
          border: 2px solid #000;
          img {
            border: 3px solid orange;
            width: 500px;
            height: 310px;
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
          width: 500px;
          height: 500px;
          border: 2px solid yellow;
          @media (max-width: 414px) {
            width: 100%;
            height: 550px;
            border: 6px solid rebeccapurple;
          }
          h2 {
            text-align: center;
            font-size: 24px;
          }
          ol {
            display: flex;
            flex-direction: column;
            gap: 15px;
            width: 400px;
            height: 400px;
            border: 1px solid red;
            @media (max-width: 414px) {
              gap: 5px;
            }
            li {
              p {
                font-size: 19px;
              }
            }
          }
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

<script></script>
