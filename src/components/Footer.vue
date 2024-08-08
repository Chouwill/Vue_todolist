<template>
  <footer>
    <div class="logo_box">
      <router-link to="/">夢想時間計畫</router-link>
      <div class="community_box">
        <h2>關注我們</h2>
        <ul class="community_icon_box">
          <li>
            <font-awesome-icon
              icon="fa-brands fa-facebook"
              class="community_icon"
            />
          </li>
          <li>
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              class="community_icon"
            />
          </li>
          <li>
            <font-awesome-icon
              icon="fa-brands fa-x-twitter"
              class="community_icon"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="footer_header">
      <div class="subscription_form_box">
        <h2>訂閱追蹤</h2>
        <div class="subscription_box">
          <input type="email" />
          <font-awesome-icon icon="fa-regular fa-envelope" class="email-icon" />
          <button>訂閱</button>
        </div>
      </div>
    </div>
    <h2>© 2024 Dream Time Project. All rights reserved.</h2>
  </footer>
</template>

<style lang="scss" scoped>
* {
  list-style: none;
}
h2,a{
  color: #D9D9D9;
}
footer {
  // background-color: #f5e4d0;
  background-color: #eebe77;
  background-color: #004080;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  // padding: 10px 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 414px) {
    background-color: orchid;
    width: 100%;
    flex-direction: column;
  }
  .logo_box {
    // border: 5px solid red;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 200px;
    @media (max-width: 414px) {
        align-items: center;
        justify-content: center;
      }
    a {
      font-size: 35px;
      color: #D9D9D9;
      @media (max-width: 414px) {
        font-size: 20px;
      }
    }
    .community_box {
      border: 5px solid green;
      display: flex;
      flex-direction: column;
      width: 250px;
      .community_icon_box {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 0;
        li {
          .community_icon {
            font-size: 30px;
            color: red;
          }
        }
      }
    }
  }
  .footer_header {
    width: 50%;
    // background-color: #3c91e0;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 200px;
    @media (max-width: 414px) {
      // border: 10px solid red;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
    .subscription_form_box {
      border: 5px solid rosybrown;
      margin-left: 50px;
      @media (max-width: 414px) {
        border: 10px solid red;
        margin-left: 0;
      }
      .subscription_box {
        position: relative;
        display: flex;
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
        button {
          width: 150px;
          padding: 5px 30px;
          background-color: #3c91e0;
          border-radius: 20px;
        }
      }
    }
  }
  h2 {
    width: 100%;
    // flex: 1;
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
    // gap: 210px;
    padding: 10px 0;
    h2 {
      font-size: 20px;
      text-align: center;
      margin: 0 auto;
    }
  }
}
</style>
