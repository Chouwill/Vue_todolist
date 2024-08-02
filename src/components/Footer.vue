<template>
  <footer>
    <div class="footer_header">
      <h2>訂閱追蹤</h2>
      <div class="subscription_box">
        <input type="email" />
        <font-awesome-icon icon="fa-regular fa-envelope" class="email-icon" />
      </div>
      <ul class="community_box">
        <li>
          <font-awesome-icon icon="fa-brands fa-facebook" />臉書
        </li>
        <li>
          <font-awesome-icon icon="fa-brands fa-instagram" />IG
        </li>
        <li>
          <font-awesome-icon icon="fa-brands fa-x-twitter" />推特
        </li> 
        <!-- 社群icon無法被使用 -->
      </ul>

      <!-- <h4>聯絡資訊</h4> -->
    </div>
    <h2>© 2024 Dream Time Project. All rights reserved.</h2>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  // background-color: #f5e4d0;
  background-color: #3c91e0;
  background-color: #f5e4d0;
  background-color: #e8c6a5;
  background-color: #eebe77;
  width: 100%;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  .footer_header {
    // background-color: #3c91e0;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .subscription_box {
      position: relative;
      input {
        width: 100%;
        height: 35px;
        border-radius: 15px;
        padding-left: 40px;
      }
      .email-icon {
        font-size: 25px;
        // border: 2px solid red;
        position: absolute;
        top: 5px;
        left: 10px;
      }
    }
    .community_box {
      width: 60%;
      border: 1px solid red;
      display: flex;
      justify-content: space-evenly;
      gap: 20px;
      flex-direction: row;
    }
  }
  h2 {
    flex: 1;
    text-align: center;
    // color: red;
    // border: 2px solid yellow;
  }
}
@media (max-width: 768px) {
  footer {
    width: 100%;
    height: auto;
    // background-color: red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 210px;
    padding: 10px 0;
    h2 {
      text-align: center;
      margin: 0 auto;
    }
  }
}
</style>
