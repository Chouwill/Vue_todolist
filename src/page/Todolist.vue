<template>
  <div class="wrap">
    <h2>設計計畫</h2>
    <main>
      <form action="">
        <ul class="todo_box_row_One">
          <li>
            <label for="">主題名稱</label>
            <input type="text" />
          </li>
          <li>
            <label for="">計畫名稱</label>
            <input type="text" />
          </li>
          <li>
            <label for="">開始時間</label>
            <input type="date" />
          </li>
          <li>
            <label for="">結束時間</label>
            <input type="date" />
          </li>
        </ul>
        <ul class="todo_box_row_two">
          <li>
            <label for="">單元名稱</label>
            <input type="text" />
          </li>
          <li>
            <label for="">單元目標</label>
            <input type="text" />
          </li>
        </ul>
        <button>送出</button>
      </form>
      <div class="calendar_box">
        <Qalendar
          :selected-date="new Date(2022, 0, 8)"
          :events="events"
          :config="config"
        />
      </div>
      <router-link>
        了解更多
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </router-link>
      <h2>付費會員獨享特殊挑戰和專屬訓練計畫，讓閱讀更具挑戰性。</h2>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import { Qalendar } from "qalendar";

const modules = ref(null); // 使用 ref 創建一個響應式變量

const isShow = ref(false);
const input = ref("");
const startDatevalue = ref("");
const endDatevalue = ref("");

const outText = ref([]);

const sendBtn = () => {
  //送出功能
  if (input.value.trim() === "") {
    //判斷欄位是否為空，包含空格有=>被警告請不要空白
    alert("請不要空白");
    return; //中斷
  }
  outText.value.push({
    id: uuidv4(), //  用ID尋找:key="idx"
    text: input.value.trim(),
    startDate: startDatevalue.value,
    endDate: endDatevalue.value,
    disabled: true, //項目欄位是否可修改
    status: 0, //狀態: 0未完成，1完成
  });

  input.value = "";
  startDatevalue.value = "";
  endDatevalue.value = "";
};

const editBtn = (obj) => {
  input.value = obj.text; //  共用input，被點擊時會返回原input
  startDatevalue.value = obj.startDate;
  endDatevalue.value = obj.endDate;
  // const editindex = outText.value.findIndex((item) => item.id === obj.id);
  // console.log(editindex);
  // const newvalue = {
  //   ...obj,
  //   disabled: false,
  // };
  // console.log(newvalue);
  // outText.value.splice(editindex, 1, newvalue); // (索引值,  刪除個數,  替代新值，或新增)
};

const saveBtn = (obj) => {
  const saveIndex = outText.value.findIndex((item) => item.id === obj.id);
  if (saveIndex !== -1) {
    outText.value[saveIndex] = {
      ...outText.value[saveIndex],
      text: input.value,
      startDate: startDatevalue.value,
      endDate: endDatevalue.value,
      disabled: true,
    };
    input.value = "";
    startDatevalue.value = "";
    endDatevalue.value = "";
  }
};

// saveBtn 與 editBTN 邏輯功能不清楚

const deleteBtn = (id) => {
  //參數不能.
  const idx = outText.value.findIndex((item) => item.id === id); //  item.id 陣列所有的id , id 目前被選中
  outText.value.splice(idx, 1);
};

const openService = () => {
  isShow.value = !isShow.value;
};

// ------------------
// import { ref } from 'vue';

// 定義響應式數據
const photo = ref([
  "https://picsum.photos/300/200/?random=1",
  "https://picsum.photos/300/200/?random=2",
  "https://picsum.photos/300/200/?random=3",
  "https://picsum.photos/300/200/?random=4",
  "https://picsum.photos/300/200/?random=5",
  "https://picsum.photos/300/200/?random=6",
  "https://picsum.photos/300/200/?random=7",
]);

const newEvent = ref({
  title: "",
  start: "",
  end: "",
});

const events = ref([
  // ...existing events
]);

const config = ref({
  // ...existing config
});

const addEvent = () => {
  const { title, start, end } = newEvent.value;
  const newEventObj = {
    title: title,
    time: { start: start, end: end },
    color: "blue", // Example color
    isEditable: true,
    id: Date.now().toString(), // Simple ID generation
  };
  events.value.push(newEventObj);
  newEvent.value = { title: "", start: "", end: "" }; // Reset form
};
</script>

<style lang="scss" scoped>
@import "qalendar/dist/style.css"; //這裡吃不到，所以改放全域CSS
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  form {
    background-color: #0176c3;
    width: 40vw;
    height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0;
    // flex-direction: column;
    .todo_box_row_One {
      // border: 5px solid #000;
      display: flex;
      flex-direction: column;
      width: 50%;
      justify-content: center;
      align-items: center;
      height: 500px;
      list-style: none;
      gap: 20px;
      li {
        width: 100%;
        // border: 2px solid red;
        input {
          width: 80%;
          padding: 10px 0;
          border-radius: 20px;
        }
      }
    }
    .todo_box_row_two {
      // border: 5px solid #000;
      display: flex;
      flex-direction: column;
      width: 50%;
      justify-content: center;
      align-items: center;
      height: 500px;
      list-style: none;
      gap: 20px;
      li {
        width: 100%;
        // border: 2px solid red;
        input {
          width: 80%;
          padding: 10px 0;
          border-radius: 20px;
        }
      }
    }
    button {
      padding: 20px 50px;
      background-color: #d9d9d9;
      border-radius: 40px;
    }
  }
  .calendar_box {
    width: 40vw;
    border: 5px solid palegreen;
    height: 500px;
  }
  a {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 40px; /* 內邊距 */
    background-color: #40b9a9; /* 背景顏色 */
    color: #000; /* 字體顏色 */
    border: none; /* 去掉邊框 */
    border-radius: 20px; /* 圓角 */
    font-size: 24px; /* 字體大小 */
    cursor: pointer; /* 游標樣式 */
    margin: 20px auto;
  }
  h2{
    text-align: center;
  }
}
</style>
