<template>
  <div class="container">
    <div class="page_header">
      <div class="left_banner">
        <img src="/src/image/BookPlan.png" alt="" />
        <h2>夢想時間計畫</h2>
        <div class="page_link">
          <a href="#">開始體驗</a>
          <a href="#">查看方案</a>
        </div>
      </div>
      <div class="right_banner">
        <img src="/src/image/goal.png" alt="" />
      </div>
    </div>
    <main>
      <div class="wrap_box">
        <ul class="title_box">
          <li class="title">
            <span>10萬</span>
            <h4>各大平台載次數</h4>
          </li>
          <li class="title">
            <span>優質服務</span>
            <h4>備受好評</h4>
          </li>
          <li class="title">
            <span>#1</span>
            <h4>民調學習工具 排名第一</h4>
          </li>
        </ul>
      </div>
      <div class="product_feature">
        <div class="feature_tiltle">
          <h2>產品特色</h2>
          <p>夢想時間計畫與傳統筆記本相比具有以下優勢</p>
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
            <p>設計優雅簡約，使用者體驗極佳。無論您是初學者還是經驗豐富的時間管理專家，都能輕鬆上手，快速掌握系統，立即提升工作效率和生活品質。</p>
          </li>
          <li>
            <span>AI智能提醒</span>
            <img src="/src/image/remind-2.png" alt="" />
            <p>憑藉先進的人工智慧技術，夢想時間計劃能夠根據您的個人習慣和偏好，自動化產生提醒和建議。</p>
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
.container {
  width: 100%;
}
.page_header {
  width: 100%;
  padding: 50px 0;
  background-color: #215d95;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  .left_banner {
    // border: 10px solid red;
    width: 60%;
    padding: 50px 0;
    // background-color: #21954d;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // border: 5px solid #000;
    img {
      width: 10%;
    }
    h2 {
      font-size: 25px;
    }
    .page_link {
      a {
        // border: 5px solid #000;
        padding: 15px 20px;
        background-color: orange;
        border-radius: 5px;
        margin: 0 10px;
      }
    }
  }
  .right_banner {
    // border: 1px solid red;
    width: 40%;
    img {
      width: 60%;
      // border: 1px solid red;
    }
  }
}
main {
  width: 100%;
  background-color: white;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .wrap_box {
    width: 50%;
    // border: 50px solid fuchsia;
    // background-color: greenyellow;
    .title_box {
      flex-direction: row;
      width: 100%;
      // background-color: red;
      // border: 5px solid orange;
      display: flex;
      justify-content: center;
      align-items: center;

      .title {
        width: 100%;
        padding: 20px 0;
        flex-direction: column;
        // background-color: rgb(75, 47, 255);
        // border: 20px solid palegreen;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        span {
          color: #215d95;
          font-weight: bolder;
          font-size: 40px;
          padding: 0 15px;
        }
        h4 {
          font-size: 20px;
        }
      }
    }
  }
  .product_feature {
    border: 5px solid greenyellow;
    width: 100%;
    .feature_tiltle {
      h2,
      p {
        text-align: center;
        font-size: 35px;
      }
    }
  }
  .main_box {
    display: flex;
    // justify-content: center;
    // align-items: center;
    li {
      // border: 2px solid orange;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50%;
      span {
        font-size: 35px;
        font-weight: bolder;
      }
      img {
        // border: 1px solid indianred;
        width: 100%;
        height: 500px;
      }
      p{
        max-width: 500px;
      }
    }
    li:nth-child(1) {
      // border: 2px solid red;
    }
  }
}
</style>
