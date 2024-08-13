<template>
  <header>
    <nav>
      <div class="menu_width">
        <router-link to="/">關於我們</router-link>
        <router-link to="/">豐富資源</router-link>
      </div>
      <div class="menu_width">
        <router-link to="/">開始Plan</router-link>

        <router-link to="/">享受放鬆生活</router-link>
      </div>
    </nav>
    <div class="logo_box">
      <img src="/src/image/Dream_LOGO.png" alt="" />
      <h2>設計你的讀書計畫Plan</h2>
    </div>
    <div class="community_box">
      <h2>聯絡我們</h2>
      <div>
        <router-link to="/">
          <font-awesome-icon icon="fa-brands fa-facebook" class="community_link" />
        </router-link>
        <router-link to="/">
          <font-awesome-icon icon="fa-brands fa-instagram" class="community_link" />
        </router-link>
        <router-link to="/">
          <font-awesome-icon icon="fa-regular fa-envelope" class="community_link" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
* {
  list-style: none;
  box-sizing: border-box;
  margin: 0 auto;
}
header {
  width: 100%;
  background-color: #4ba0d7;
  height: 15vh;
  display: flex;
  // padding: 100px 0;
  nav {
    width: 30%;
    border: 2px solid #000;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .menu_width {
      display: flex;
      width: 250px;
      // border: 5px solid rosybrown;
      gap: 0px;
      font-size: 25px;
      // justify-content: flex-start;
      // align-items: flex-start;
      flex-direction: column;
      &:nth-child(1) {
        // border: 3px solid orange;
        text-align: right;
      }
      a,
      .router-link {
        // text-align: left;
        color: bisque;
        width: 100%;
        white-space: nowrap;
        display: block;
      }
    }
  }
  .logo_box {
    border: 2px solid red;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      max-width: 14%;
      object-fit: contain;
    }
  }
  .community_box {
    width: 30%;
    border: 3px solid pink;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    h2{
      width: 30%;
    }
    div {
      display: flex;
      width: 30%;
      // border: 2px solid red;
      .community_link {
        font-size: 35px;
      }
    }
  }
}
</style>
