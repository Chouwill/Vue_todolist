<script setup>
import { ref, computed, defineEmits } from "vue";
import { ElMessageBox } from "element-plus";
import dayjs from "dayjs";
import { useReserveStore } from "../stores/Reserve.js";
const props = defineProps({
  product: {
    type: Object,
    default: () => ({ title: "", imageUrl: "", content: "" }), // 提供預設值
  },
});
const dialogVisible = ref(false);
// 計算屬性以根據螢幕寬度動態設置對話框寬度
const dialogWidth = computed(() => {
  return window.innerWidth < 414 ? "90%" : "700px"; // 小於 414px 時設為 90%
});

// 動態設置對話框的行內樣式
const dialogStyle = computed(() => {
  return {
    maxWidth: "700px",
    width: window.innerWidth < 414 ? "90%" : "100%",
  };
});

const handleClose = (done) => {
  ElMessageBox.confirm("確定要關閉此對話框嗎？")
    .then(() => {
      done();
    })
    .catch(() => {
      // 捕獲錯誤
    });
};

// 日期陣列
const f = "YYYY/MM/DD";
const dates = ref([dayjs().format(f), dayjs().add(1, 'day').format(f), dayjs().add(2, 'day').format(f), dayjs().add(3, 'day').format(f)]);
const BookDated = ref(null);
const store = useReserveStore();

const BookDate = (index) => {
  // 選訂日期
  BookDated.value = dates.value[index];
  console.log(BookDated.value);
  // alert( BookDated.value)  //  想要帶入變數' Date的變數
  // store.CustomerDate.value = BookDated.value;  // 存入Pinia
};

// const SendDate = () => {
//   store.CustomerDate.value = props.product.title;
//   store.CustomerDate.value = BookDated.value; // 存入Pinia
//   console.log("現在存入日期", store.CustomerDate.value);
// };

const submit = (product) => {
  store.buyProduct(product, BookDated.value);
  dialogVisible.value = false;
}
</script>
<template>

<li>
  <h4>{{ props.product.title }}</h4>
  <img :src="props.product.imageUrl" alt="" />
  <a href="#" @click.prevent="dialogVisible = true">查看活動</a>
  <el-dialog
    v-model="dialogVisible"
    :title="props.product.title || '無標題'"
    :width="500"
    height="auto"
    :class="['custom-dialog']"
    :style="dialogStyle"
  >
    <div class="Reserve_box" v-if="props.product">
      <div class="img_box">
        <img :src="props.product.imageUrl" />
      </div>
      <div class="column">
        <div class="Reserve_product">
          <p>{{ props.product.content }}</p>
        </div>
        <h2>選擇訂購日期</h2>
        <ul class="Day_Select">
          <li v-for="(item, index) in dates" :key="item.id">
            <a href="#" @click.prevent="BookDate(index)">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="button-container">
      <button @click="submit(props.product)">送出</button>
    </div>
  </el-dialog>
</li>

</template>

<style lang="scss" scoped>
li {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // border: 5px solid red;
  position: relative;
  @media (max-width: 768px) {
    width: 40%;
    flex-wrap: wrap;
    // border: 5px solid rgb(25, 0, 255);

    // height: 500px;
  }
  @media (max-width: 414px) {
    width: 75%;
    flex-wrap: wrap;
    // height: 500px;
    // border: 5px solid orange;
  }
  h4 {
    text-align: center;
  }
  img {
    // max-width: 50%;
    width: 200px;
    height: 300px;
    // height: 50%;
    object-fit: cover;
  }
  a {
    width: 200px;
    position: absolute;
    background-color: #4ba0d7;
    bottom: 0;
    text-align: center;
    font-weight: 700;
    font-size: 15px;
    padding: 10px 0;
    @media (max-width: 768px) {
      width: 200px;
      flex-wrap: wrap;
      // height: 500px;
    }
    @media (max-width: 414px) {
      width: 200px;
      flex-wrap: wrap;
      // height: 500px;
    }
  }
}
.custom-dialog {
  .el-dialog__header {
    background-color: #f5f5f5; // 標題背景顏色
  }

  .el-dialog__body {
    padding: 20px; // 身體內邊距
  }

  .el-dialog__footer {
    background-color: #f5f5f5; // 底部背景顏色
  }
}

.Reserve_box {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
    }
    @media (max-width: 414px) {
      width: 400px;
      flex-direction: column;
      // border: 2px solid gold;
    }

    .img_box {
      flex: 0 0 50%; // 設置為 50% 寬度
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        object-fit: cover;
        width: 100%;
        height: 450px;
        @media (max-width: 768px) {
          max-width: 50%;
          height: 350px;
        }
        @media (max-width: 414px) {
          max-width: 70%;
          height: 350px;
        }
      }
    }

    .column {
      flex: 0 0 50%; // 設置為 50% 寬度
      // border: 2px solid orange;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .Reserve_product {
        width: 290px;
        // border: 2px solid red;
        @media (max-width: 768px) {
          width: 80%;
        }
        @media (max-width: 414px) {
          max-width: 70%;
          // height: 350px;
        }
      }

      .Day_Select {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        @media (max-width: 768px) {
          // border: 5px solid #000;
          display: flex;
          width: 80%;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 414px) {
          max-width: 100%;
          // height: 350px;
        }
        li {
          list-style: none;
          width: 85%;
          height: 50px;
          background-color: olivedrab;
          background-color: #a0d8f0;
          display: flex;
          justify-content: center;
          align-items: center;

          @media (max-width: 768px) {
            display: flex;
            width: 60%;
            justify-content: center;
            align-items: center;
          }
          @media (max-width: 414px) {
            max-width: 100%;
            // height: 350px;
          }
          a {
            text-align: center;
            font-size: 25px;
            background-color: #a0d8f0;
          }
        }
      }
    }
  }

  .button-container {
    display: flex;
    justify-content: center; // 水平置中
    margin-top: 20px; // 可以根據需要調整間距

    button {
      width: 100px;
      height: 50px;
      padding: 10px 35px;
      background-color: #a0d8f0;
      border: none; /* 移除邊框 */
      border-radius: 4px; /* 添加圓角 */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 初始陰影 */
      transition: background-color 0.3s, transform 0.1s, box-shadow 0.2s; /* 增加過渡效果 */
      &:hover {
        background-color: #6aa3b9;
      }
      &:active {
        background-color: #6aa3b9;
        transform: translateY(4px); /* 向下移動 4px */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 按壓時的陰影 */

      }
    }
  }
</style>
