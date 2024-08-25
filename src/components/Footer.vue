<template>
  <footer>
    <div class="logo_box">
      <img src="/src/image/Dream_Plan.png" alt="" />
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
  background-color: #1e7fb8;
  height: 15vh;
  display: flex;
  position: relative;
  @media (max-width: 414px) {
    justify-content: center;
    align-items: center;
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
      border: 5px solid red;
    }
    h4 {
      text-align: center;
      font-size: 20px;
      color: white;
      @media (max-width: 768px) {
        font-size: 17px;
        width: 100%;
        border: 5px solid red;
        margin: 0 auto;
      }
    }
  }
  .community_box {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    
    h2 {
      font-size: 20px;
      color: white;
      @media (max-width: 768px) {
        display: none;
      }
      @media (max-width: 414px) {
        font-size: 20px;
      }
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
      gap: 10px;
      border: 5px solid red;

      @media (max-width: 768px) {
        position: fixed;
        width: 100px;
        display: flex;
        flex-direction: column;
        // background-color: orange;
        height: 300px;
        bottom: 120px;
        right: 0;
      }
      @media (max-width: 414px) {
        position: fixed;
        width: 100px;
        display: flex;
        flex-direction: column;
        // background-color: orange;
        height: 300px;
        bottom: 120px;
      }
      a {
        background-color: #1e7fb8;
        width: 70px;
        height: 70px;
        border-radius: 70px;
        @media (max-width: 768px) {
          display: flex;
          justify-content: center;
          align-items: center;
          // border: 10px solid red;
        }
        @media (max-width: 414px) {
          display: flex;
          justify-content: center;
          align-items: center;
          // border: 10px solid red;
        }
        .community_link {
          font-size: 35px;
          color: white;
          @media (max-width: 768px) {
            top: 15px;
            bottom: 16px;
            right: 25px;
            font-size: 30px;
          }

          @media (max-width: 414px) {
            top: 15px;
            bottom: 16px;
            right: 25px;
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>
