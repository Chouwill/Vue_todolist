<template>
  <div class="container">
    <div class="banner">
      <img src="/src/image/adventure-1807495_1920 1.png" alt="" />
      <h2>ABOUT<br />US</h2>
    </div>
    <main>
      <h2>
        教你懂的<br />
        運用時間管理生活 <br />完成夢想
      </h2>
      <div class="introduce_box">
        <!-- <h4>
          歡迎來到設計你的讀書計畫網站<br />，這是一個為您提供全方位支持的網站<br />，我們深信在快節奏的生活中，有效的<br />學習、人生規劃和充分休閒是建立更豐富人生的關鍵。
        </h4> -->
      </div>
      <!-- <div class="introduce_team">
        <div class="introduce_img">
          <img src="/src/image/start_paln-2.png" alt="" />
        </div>
        <div class="introduce_text">
          <h2>1.協助教育讀書計畫</h2>
          <p>
            進行與監督我們致力於協助您建立個人化的讀書計畫，無論是從事學術研究、自我提升，還是追求專業技能，我們的平台能夠幫助您有效地進行學習，同時提供監督和反饋機制，確保您在計畫中不偏離軌道。
          </p>
        </div>
      </div>
      <div class="introduce_team">
        <div class="introduce_text">
          <h2>2.協助人生職涯夢想的規劃與資源分享</h2>
          <p>
            讀書計畫，我們也支持您在人生中制定明確的職涯和夢想目標。透過專業的資源分享和個人規劃工具，我們助您打破障礙，實現夢想。無論是創業、轉職還是進修，我們都在這裡為您提供支持。
          </p>
        </div>
        <div class="introduce_img">
          <img src="/src/image/start_paln-2.png" alt="" />
        </div>
      </div>
      <div class="introduce_team">
        <div class="introduce_img">
          <img src="/src/image/start_paln-2.png" alt="" />
        </div>
        <div class="introduce_text">
          <h2>3.放鬆生活</h2>
          <p>
            我們深知忙碌的學習和生活節奏中，休閒和娛樂的重要性。透過我們的平台，您不僅可以制定個人計畫，還能享受娛樂生活，放鬆身心，更有效率地完成任何計畫。我們鼓勵您注重全面發展，將學習和娛樂相得益彰。
          </p>
        </div>
      </div> -->
      <div class="introduce_team">
        <div class="introduce_img">
          <img src="/src/image/start_paln-2.png" alt="" />
        </div>
        <div class="introduce_text">
          <h2>1.協助計畫進行</h2>
          <ol>
            <li>
              <p>客製您的專屬計畫： 創建您專屬的個人計畫</p>
            </li>
            <li>
              <p>
                人生目標諮詢規劃：
                進行與監督我們致力於協助您建立個人化的計畫，無論是從事學術研究、自我提升，還是追求專業技能，我們的平台能夠幫助您有效地進行學習，同時提供監督和反饋機制，確保您在計畫中不偏離軌道。
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div class="introduce_team">
        <div class="introduce_img_deskTop_pg">
          <img src="/src/image/New idea-amico.svg" alt="" />
        </div>
        <div class="introduce_text">
          <h2>2.協助人生職涯夢想的規劃與資源分享</h2>
          <ol>
            <li style="list-style: none">
              <p>
                讀書計畫，我們也支持您在人生中制定明確的職涯和夢想目標。透過專業的資源分享和個人規劃工具，我們助您打破障礙，實現夢想。無論是創業、轉職還是進修，我們都在這裡為您提供支持。
              </p>
            </li>
          </ol>
        </div>
        <div class="introduce_img_only">
          <img src="/src/image/New idea-amico.svg" alt="" />
        </div>
      </div>
      <div class="introduce_team">
        <div class="introduce_img">
          <img src="/src/image/New_idea.png" alt="" />
        </div>
        <div class="introduce_text">
          <h2>享受放鬆生活</h2>
          <ol>
            <li style="list-style: none;">
              <p>
                我們深知忙碌的學習和生活節奏中，休閒和娛樂的重要性。透過我們的平台，您不僅可以制定個人計畫，還能享受娛樂生活，放鬆身心，更有效率地完成任何計畫。我們鼓勵您注重全面發展，將學習和娛樂相得益彰。
              </p>
            </li>
          </ol>
        </div>
      </div>
    </main>
    <div class="page_footer">
      <h2>
        加入我們的大家庭<br>開始您的個人化讀書計畫和人生規劃之旅<br>讓我們一同助您追尋更有意義的人生！
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
    margin: 20px 0;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 15px solid rgb(128, 0, 0);
    // background-color: #fff;

    flex-wrap: wrap;
    @media (max-width: 414px) {
      width: 100%;
      // height: 500px;
    }
    h2{
      width: 70%;
      text-align: center;
      font-size: 35px;
      line-height: 2.5;
    }
    .introduce_team {
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

      .introduce_img {
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
      .introduce_text {
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
          border: 2px solid rgb(35, 14, 76);
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
      .introduce_img_deskTop_pg {
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
      .introduce_img_only {
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
  .page_footer {
    margin: 50px 0;
    // border: 5px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
      text-align: center;
      line-height: 3.5;
    }
  }
}
</style>

<script></script>
