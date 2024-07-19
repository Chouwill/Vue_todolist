<template>
  <footer>
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
  height: 68px;
  justify-content: center;
  align-items: center;
  h2 {
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
