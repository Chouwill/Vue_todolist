<template>
  <div class="wrap">
    <h2>設計計畫</h2>
    <main>
      <h2>開始制定計畫</h2>
      <div class="todolist_event">
        <el-form :model="newEvent" :label-width="120">
          <el-form-item>
            {{ formType === "create" ? "創建事件" : "編輯事件" }}
          </el-form-item>
          <el-form-item v-show="formType === 'edit'" label="ID">
            <el-input v-model="newEvent.id" disabled />
          </el-form-item>
          <el-form-item label="Event Title">
            <el-input v-model="newEvent.title" />
          </el-form-item>
          <el-form-item label="Date">
            <el-date-picker
              v-model="newEvent.date"
              type="datetimerange"
              start-placeholder="Start date"
              end-placeholder="End date"
              format="YYYY-MM-DD HH:mm"
              date-format="YYYY/MM/DD ddd"
              time-format="HH:mm"
              value-format="YYYY-MM-DD HH:mm"
            />
          </el-form-item>
          <el-form-item label="Description">
            <el-input
              v-model="newEvent.description"
              :rows="2"
              type="textarea"
              resize="none"
            />
          </el-form-item>
          <el-form-item class="form-item">
            <el-button type="primary" @click="resetEvent">取消</el-button>
            <el-button type="primary" @click="addEvent">送出</el-button>
          </el-form-item>
        </el-form>
        <div class="calendar">
          <Qalendar
            :selected-date="new Date()"
            :events="events"
            :config="config"
            @edit-event="editEvent"
            @delete-event="deleteEvent"
          />
        </div>
      </div>
      <h2>付費會員獨享特殊挑戰和專屬訓練計畫，讓閱讀更具挑戰性。</h2>
      <router-link>
        了解更多
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </router-link>
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
// ------------------------------------------------------------------------------------------------------------------
// 主要JS

const initObj = {
  id: "",
  title: "",
  date: [new Date(), new Date()],
  description: "",
};
const newEvent = ref(initObj); //  儲存預設樣式
const formType = ref("create"); // 'create' | 'edit' // 定義字串
const events = ref(
  JSON.parse(localStorage.getItem("calendarEvents") || "[]") || []
);

const config = ref({
  // ...existing config
});

const saveStorage = () => {
  localStorage.setItem("calendarEvents", JSON.stringify(events.value));
};

// 創建事件/編輯事件
const addEvent = () => {
  const { id, title, date, description } = newEvent.value; // 只能用原本的參數
  const [start = "", end = ""] = date;
  const newEventObj = {
    title, // 當key與value相同時, 可以省略:value 原始為{title: title}
    time: { start, end },
    color: "blue", // Example color
    isEditable: true,
    id: id || Date.now().toString(), // Simple ID generation
    description,
  };
  console.log(newEventObj);

  if (formType.value === "create") {
    events.value.push(newEventObj);
  } else {
    const idx = events.value.findIndex((ev) => ev.id === id);
    events.value.splice(idx, 1, newEventObj);
  }
  saveStorage();
  newEvent.value = initObj; // Reset form
  formType.value = "create";
};

// 編輯事件
const editEvent = (id) => {
  formType.value = "edit"; //  變成修改狀態
  const event = events.value.find((ev) => ev.id === id);
  console.log("event: ", event);
  const { time, ...rest } = event;
  newEvent.value = {
    ...rest,
    date: time ? [time.start, time.end] : [],
  };
};

// reset   取消功能
const resetEvent = () => {
  if (formType.value === "edit") {
    formType.value = "create";
  }
  newEvent.value = initObj; // Reset form
};

// 刪除事件
const deleteEvent = (id) => {
  console.log(events.value.find((ev) => ev.id === id)); // find
  events.value = events.value.filter((ev) => ev.id !== id); //  ev  =  一個events的子項目
  saveStorage();
};
</script>

<style lang="scss" scoped>
@import "qalendar/dist/style.css";
/* 這裡吃不到，所以改放全域CSS */
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  main {
    width: 100%;
    // display: flex;
    // border: 2px solid red;
    h2 {
    }
    @media (max-width: 768px) {
      // background-color: rgb(0, 255, 89);
      width: 100%;
      // display: none;
    }
    .todolist_event {
      display: flex;
      form {
        // background-color: #0176c3;
        width: 40vw; // 螢幕寬度的40%
        max-width: 1200px;
        padding: 5%;

        .form_item {
          display: flex;
          gap: 8px;
          // border: 50px solid palegreen;
          margin-bottom: 10px;
          .form_label {
            display: inline-block;
            flex: 1;
          }
          .form_input {
            width: 80%;
            flex: 2;
          }
        }
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
          @media (max-width: 768px) {
            // background-color: rgb(0, 255, 89);
            width: 70%;
            // flex-direction: row;
          }
          li {
            width: 100%;
            // border: 2px solid red;
            input {
              width: 80%;
              padding: 10px;
              border-radius: 20px;
            }
          }
        }
        button {
          padding: 10px 30px;
          // background-color: #4a4ab1;
          // border-radius: 40px;
          font-size: 14px;
          &:nth-child(1) {
            padding: 10px 30px;
            // background-color: red;
            // border-radius: 40px;
            font-size: 14px;
          }
        }
      }
      .calendar {
        width: 40vw;
        // border: 5px solid palegreen;
        height: 500px;
        @media (max-width: 768px) {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          // background-color: rgb(0, 255, 89);
          width: 80%;
          margin: 0 auto;
          // flex-direction: row;
        }
      }
    }
    h2 {
      text-align: center;
    }
    a {
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 40px; /* 內邊距 */
      // background-color: #40b9a9; /* 背景顏色 */
      color: #000; /* 字體顏色 */
      border: none; /* 去掉邊框 */
      border-radius: 20px; /* 圓角 */
      font-size: 24px; /* 字體大小 */
      cursor: pointer; /* 游標樣式 */
      margin: 20px auto;
    }
  }
}
</style>
