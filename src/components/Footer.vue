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
  // nav {
  //   width: 30%;
  //   border: 2px solid #000;
  //   padding: 20px 0;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   @media (max-width: 768px) {
  //     background-color: rgb(0, 255, 89);
  //     display: none;
  //   }

  //   .menu_width {
  //     display: flex;
  //     width: 250px;
  //     // border: 5px solid rosybrown;
  //     gap: 0px;
  //     font-size: 25px;
  //     // justify-content: flex-start;
  //     // align-items: flex-start;
  //     flex-direction: column;
  //     &:nth-child(1) {
  //       // border: 3px solid orange;
  //       text-align: right;
  //     }
  //     a,
  //     .router-link {
  //       // text-align: left;
  //       color: bisque;
  //       width: 100%;
  //       white-space: nowrap;
  //       display: block;
  //     }
  //   }
  // }
  .logo_box {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      @media (max-width: 414px) {
        font-size: 20px;
      }
    }
    @media (max-width: 768px) {
      background-color: rgb(0, 255, 89);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
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
    h4 {
      text-align: center;
      font-size: 20px;
      color: white;
    }
  }
  .community_box {
    width: 30%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    @media (max-width: 768px) {
      background-color: rgb(0, 255, 89);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
    }
    h2 {
      font-size: 20px;
      color: white;

      @media (max-width: 414px) {
        font-size: 20px;
      }
    }
    div {
      display: flex;
      width: 30%;
      gap: 10px;
      .community_link {
        font-size: 35px;
        color: white;

        @media (max-width: 414px) {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
