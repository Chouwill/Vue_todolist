<template>
  <footer>
    <div class="logo_box">
      <!-- <img src="/src/image/Dream_Plan-Photoroom (1).png" alt="" /> -->
    </div>
    <div class="footer_describe">
      <h4>版權所有 ©Copyright 2024.All Rights Reserved.</h4>
    </div>
    <div class="community_box">
      <h2>聯絡我們</h2>
      <div>
        <router-link to="/">
          <font-awesome-icon
            icon="fa-brands fa-facebook"
            class="community_link"
          />
        </router-link>
        <router-link to="/">
          <font-awesome-icon
            icon="fa-brands fa-instagram"
            class="community_link"
          />
        </router-link>
        <router-link to="/">
          <font-awesome-icon
            icon="fa-regular fa-envelope"
            class="community_link"
          />
        </router-link>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
* {
  list-style: none;
  box-sizing: border-box;
  margin: 0 auto;
}
footer {
  width: 100%;
  // background-color: #4ba0d7;
  background-color: #a0d8f0;
  height: 12vh;
  // margin-bottom: 15vh;
  display: flex;
  position: relative;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); /* 陰影效果 */

  @media (max-width: 768px) {
    // display: none;
    width: 100%;
    // border: 9px solid rgb(0, 255, 60);
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 414px) {
    // justify-content: center;
    // align-items: center;
    width: 100%;  
  }
  .logo_box {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 768px) {
      display: none;
    }
    img {
      max-width: 50%;
      object-fit: contain;
      @media (max-width: 768px) {
        max-width: 15%;
      }
    }
  }
  .footer_describe {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      width: 100%;
      // border: 5px solid rgb(14, 1, 1);
      position: absolute;
      top: 30px;
      left: 0;
      // border: 5px solid rgb(14, 1, 1);
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 414px) {
      width: 100%;
      border: 5px solid rgb(14, 1, 1);
      justify-content: center;
      align-items: center;
    }
    h4 {
      text-align: center;
      font-size: 20px;
      color: #000;
      @media (max-width: 768px) {
        font-size: 17px;
        width: 100%;
        // border: 5px solid red;
        margin: 0 auto;
      }
      @media (max-width: 414px) {
        font-size: 15px;
        width: 100%;
        border: 5px solid red;
        line-height: 4;
        margin: 0 auto;
      }
    }
  }
  .community_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 100%;
    // padding-top: 10px;

    @media (max-width: 414px) {
      // display: flex;
      // 會影響footer_describe 在RWD footer佔滿100%寬度，但不要影響子層div標籤CSS，絕對定位顯現
    }

    h2 {
      font-size: 20px;
      color: #000;
      text-align: center;
      margin-bottom: 10px;
      // line-height: 2;
      @media (max-width: 768px) {
        display: none;
      }
      //@media (max-width: 414px) {
      //font-size: 20px;
      //}
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
      gap: 10px;
      // border: 5px solid red;

      @media (max-width: 768px) {
        position: fixed;
        width: 100px;
        flex-direction: column;
        // background-color: orange;
        height: 300px;
        bottom: 120px;
        right: 0;
      }
      a {
        // background-color: #1e7fb8;
        width: 70px;
        height: 70px;
        @media (max-width: 768px) {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 70px;
          background-color: #1e7fb8;

          // border: 100px solid red;
        }
        @media (max-width: 414px) {
          //display: flex;
          //justify-content: center;
          //align-items: center;
          // border: 10px solid red;
        }
        .community_link {
          font-size: 35px;
          color: #000;
          &:hover {
            color: #3b96cb;
          }
          @media (max-width: 768px) {
            top: 15px;
            bottom: 16px;
            right: 25px;
            font-size: 30px;
          }

          @media (max-width: 414px) {
            z-index: 5000;
          }
        }
      }
    }
  }
}
</style>
