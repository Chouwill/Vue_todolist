<template>
  <footer>
    <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus hic
    officia aliquid eaque quis enim magnam architecto nobis minima provident? -->
  </footer>
</template>

<style lang="scss">
footer {
  background-color: #f5e4d0;
  width: 100%;
  display: flex;
  padding: 10px 20px;
  height: 68px;
  justify-content: space-between;
  align-items: center;
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
  }
}
</style>
