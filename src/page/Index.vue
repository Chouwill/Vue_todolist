<template>
  <div class="container">
    <div class="page_header">
      <div class="product_feature">
        <div class="feature_tiltle">
          <h2>夢想時間計畫產品特色</h2>
          <!-- <p>與傳統筆記本相比具有以下優勢</p> -->
        </div>
        <ul class="main_box">
          <li>
            <span>經濟實惠</span>
            <img src="/src/image/Online_Shopping-1.png" alt="" />
            <p>
              夢想時間計劃以其高性價比脫穎而出，無需大量投資即可享受到優質的時間管理和目標達成策略。
            </p>
          </li>
          <li>
            <span>簡單好使用</span>
            <img src="/src/image/list.png" alt="" />
            <p>
              設計優雅簡約，使用者體驗極佳。無論您是初學者還是經驗豐富的時間管理專家，都能輕鬆上手，快速掌握系統，立即提升工作效率和生活品質。
            </p>
          </li>
          <li>
            <span>AI智能提醒</span>
            <img src="/src/image/remind-2.png" alt="" />
            <p>
              憑藉先進的人工智慧技術，夢想時間計劃能夠根據您的個人習慣和偏好，自動化產生提醒和建議。
            </p>
          </li>
          <li>
            <span>快速制定</span>
            <img src="/src/image/start_paln-2.png" alt="" />
            <p>實現夢想，從這裡開始！</p>
            <!-- <br /> -->
            <p>VIP服務，讓你的計畫更上一層樓。</p>
          </li>
        </ul>
      </div>
    </div>
    <main>
      <div class="wrap_box">
        <ul class="title_box">
          <li class="title">
            <span>優質服務</span>
            <h4>備受好評</h4>
          </li>
          <li class="title">
            <span>10萬</span>
            <h4>各大平台載次數</h4>
          </li>
          <li class="title">
            <span>#1</span>
            <h4>民調學習工具 排名第一</h4>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
* {
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
html {
  background-color: #f9f9f9;
}
.container {
  // width: 100%;
}
.page_header {
  width: 100%;
  padding: 50px 0;
  // background-color: #215d95;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .product_feature {
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 5px solid greenyellow;
    width: 100%;
    flex-wrap: wrap;
    background-color: #f9f9f9;
    .feature_tiltle {
      h2 {
        font-size: 35px;
        text-align: center;
        color: #333333;
      }
      p {
        text-align: center;
        font-size: 35px;
        color: grey;
        @media (max-width: 768px) {
          font-size: 25px;
        }
        @media (max-width: 430px) {
          max-width: 245px;
          // border: 5px solid red;
          font-size: 19px;
        }
      }
    }
  }
  .main_box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 83%;
    flex-wrap: wrap;
    gap: 25px;
    border: 2px solid gray;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    li {
      // border: 2px solid orange;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      max-width: 35%;
      height: 670px;
      @media (max-width: 768px) {
        width: 70%;
      }
      span {
        font-size: 35px;
        font-weight: bolder;
        @media (max-width: 768px) {
          font-size: 30px;
          font-weight: bolder;
        }
      }
      img {
        // border: 1px solid indianred;
        width: 100%;
        height: 500px;
        object-fit: contain;
        @media (max-width: 768px) {
          width: 70%;
          height: 250px;
        }
      }
      p {
        max-width: 500px;
      }
    }
    li:nth-child(1) {
      // border: 2px solid red;
    }
  }
  .main_footer {
    // background-color: rebeccapurple;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 5px solid orange;
    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    img {
      display: block;
      max-width: 40%;

      // height: 500px;
      object-fit: contain;
      @media (max-width: 768px) {
        max-width: 90%;
      }
    }
    .main_text {
      // border: 2px solid orange;
      width: 30%;
      padding: 40px 0;
      text-align: center;
      p {
        margin: 20px auto;
        width: 300px;
        // color: red;
        text-align: center;
        // border: 5px solid red;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      button {
        margin: 0 auto;
        padding: 20px 30px;
        border-radius: 20px;
        border: none;
        background-color: orange;
        font-size: 15px;
        // color: white;
      }
    }
  }
}
main {
  width: 100%;
  // background-color: #f3d19e;
  background-color: #f0e6d6;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .wrap_box {
    width: 100%;
    // background-color: #f8e3c5;
    background-color: #f0e6d6;

    @media (max-width: 768px) {
      width: 100%;
      background-color: #f0e6d6;
    }

    .title_box {
      flex-direction: row;
      width: 70%;
      display: flex;
      margin: 0 auto;
      background-color: #f0e6d6;
      @media (max-width: 768px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
      }

      @media (max-width: 607px) {
        // width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 0 50px;

        // border: 10px solid blue;
      }
      .title {
        width: 100%;
        padding: 20px 0;
        flex-direction: column;
        background-color: #f0e6d6;
        // border: 2px solid palegreen;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media (max-width: 607px) {
          width: 100%;
          // height: 300px;
          // background-color: orange;
        }

        span {
          color: #215d95;
          color: #ff9900;
          font-weight: bolder;
          font-size: 40px;
          padding: 0 15px;
          @media (max-width: 768px) {
            font-size: 23px;
          }
          @media (max-width: 520px) {
            font-size: 23px;
            text-align-last: left;
          }
        }
        h4 {
          font-size: 15px;
          @media (max-width: 768px) {
            font-size: 20px;
          }
          @media (max-width: 520px) {
            font-size: 19px;
            text-align-last: left;
          }
        }
      }
    }
  }
}
</style>
