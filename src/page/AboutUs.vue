<template>
  <div class="container">
    <main>
      <div class="control_title">
        <h2>操作步驟</h2>
      </div>
      <div class="step_box">
        <div class="step_text">
          <h2>步驟一</h2>
          <h3>制定目標日期、目標內容</h3>
          <p>
            如果您有想要實現的目標，請將其設定為具體的日期和內容。輸入後按下Enter鍵，目標將會自動儲存並顯示在清單中。您可以隨時編輯或刪除已設定的目標，確保目標內容符合您的需求。
          </p>
        </div>
        <div class="pic_box">
          <img src="/src/image/list.png" alt="" />
        </div>
      </div>

      <div class="step_box">
        <div class="step_text">
          <h2>步驟二</h2>
          <h3>選擇是否使用加值服務、或購買好書專區，協助計畫進行</h3>
          <p>
            在您設定目標後，可以選擇是否使用我們的加值服務，這些服務將幫助您更高效地實現目標。或者，您也可以在我們的好書專區中選購有助於達成目標的書籍，獲取更多知識和靈感。
          </p>
        </div>
        <div class="pic_box">
          <img src="/src/image/Online_Shopping-3.png" alt="" />
        </div>
      </div>

      <div class="step_box">
        <div class="step_text">
          <h2>步驟三</h2>
          <h3>計畫啟動開始計時</h3>
          <p>
            所有準備工作完成後，請按下計畫啟動按鈕，計畫將正式開始計時。您可以隨時查看計畫進度，並在需要時進行調整，確保您能按時達成目標。
          </p>
        </div>
        <div class="pic_box">
          <img src="/src/image/remind-2.png" alt="" />
        </div>
      </div>
    </main>
  </div>
</template>
<style lang="scss" scoped>
main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .control_title {
    h2 {
      color: blue;
      font-weight: bolder;
      font-size: 40px;
    }
  }
  .step_box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding: 20px 0;
    // border: 20px solid red;
    margin: 10px 0;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    //   border: 3px solid pink;
    }
    .step_text {
      width: 100%;
    //   border: 5px solid red;
      @media (max-width: 768px) {
        width: 85%;
      }
      h2 {
        width: 25%;
        background-color: orange;
        padding: 10px 10px;
        text-align: center;
        margin: 55px 15px;
        font-size: 30px;
      }
      h3 {
        font-size: 15px;
        margin: 25px 15px;
      }
      p {
        font-size: 15px;
        margin: 25px 15px;
      }
    }
  }
  .pic_box {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
}
</style>

<script></script>
