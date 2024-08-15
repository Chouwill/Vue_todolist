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
        <!-- <img src="/src/image/Dream_LOGO.png" alt=""> -->
        <h4>
          歡迎來到設計你的讀書計畫網站<br />，這是一個為您提供全方位支持的網站<br />，我們深信在快節奏的生活中，有效的<br />學習、人生規劃和充分休閒是建立更豐富人生的關鍵。
        </h4>
      </div>
      <div class="introduce_team">
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
      </div>
    </main>
    <div class="page_footer">
      <h2>
        加入我們的大家庭，開始您的個人化讀書計畫和人生規劃之旅。讓我們一同助您追尋更有意義的人生！
      </h2>
      <img src="/src/image/JoinUsSign banne.svg" alt="">
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
    background-color: #9fd658;
    margin: 50px 0 0 0;
    border: 5px solid orange;
    position: relative;

    // height: 100px;
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
    }
  }
  main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    h2 {
      text-align: center;
      font-size: 35px;
    }
    .introduce_box {
      width: 500px;
      border: 2px solid red;
      text-align: center;
      h4 {
        font-size: 20px;
      }
    }
    .introduce_team {
      width: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 5px solid olive;
      flex-direction: row;

      .introduce_img {
        border: 2px solid yellow;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        img {
          max-width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .introduce_text {
        border: 2px solid yellow;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        flex: 1;
        height: 100%;
        h2 {
          width: 70%;
          border: 2px solid red;
          text-align: left;
          color: #43aac1;
        }
        p {
          width: 700px;
          border: 5px solid red;
          font-size: 25px;
          line-height: 2;
        }
      }
    }
  }
  .page_footer{
    margin: 50px 0;
    border: 5px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>

<script></script>
