<template>
  <div class="wrap">
    <h2>設計計畫</h2>
    <main>
      <h2>開始制定計畫</h2>
      <div class="todolist_event">
        <el-form :model="newEvent" :label-width="120">
          <div class="form_item">
            <el-form-item>
              {{ formType === "create" ? "創建事件" : "編輯事件" }}
            </el-form-item>
            <el-form-item
              v-show="formType === 'edit' && newEvent.id"
              label="ID"
            >
              <el-input v-model="newEvent.id" disabled />
            </el-form-item>
            <el-form-item label="Event Title" class="title">
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
            <!-- <el-form-item class="form-item">
            <el-button type="primary" @click="addEvent">送出</el-button>
            <el-button type="primary" @click="resetEvent">取消</el-button>
          </el-form-item> -->
            <div class="form-item_oth">
              <el-button type="primary" @click="addEvent">送出</el-button>
              <el-button type="primary" @click="resetEvent">取消</el-button>
            </div>
          </div>
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
      <router-link to="/shopping">
        了解更多
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </router-link>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
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
  console.log(start, end);
  const newEventObj = {
    title, // 當key與value相同時, 可以省略:value 原始為{title: title}
    time: {
      start: dayjs(start).isValid()
        ? dayjs(start).format("YYYY-MM-DD HH:mm")
        : "",
      end: dayjs(end).isValid() ? dayjs(end).format("YYYY-MM-DD HH:mm") : "",
    },
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
  // background-color: #a0aff0;
  height: 900px;
  @media (max-width: 768px) {
    height: 150vh;
    margin: 40px 0;
  }
  @media (max-width: 768px) {
    
  }

  main {
    width: 100%;
    h2 {
      text-align: center;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
    .todolist_event {
      display: flex;
      flex-direction: row;
      align-items: center;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      form {
        width: 40vw; // 螢幕寬度的40%
        max-width: 1200px;
        padding: 5%;
        border: 5px solid rgb(195, 103, 21);
        @media (max-width: 768px) {
          width: 650px;
          // border: 5px solid rgb(195, 103, 21);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 414px) {
          width: 350px;
          // border: 5px solid rgb(195, 103, 21);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .form_item {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border: 2px solid rgb(176, 20, 155);
          margin-bottom: 10px;
          @media (max-width: 768px) {
            width: 300px;
            justify-content: start;
            align-items: start;
          }
          .el-form-item {
            width: 100%;
            // border: 2px solid rgb(15, 17, 156);
            @media (max-width: 768px) {
              width: 500px;
            }
            @media (max-width: 414px) {
              width: 300px;
            }
            label {
              font-weight: bold;
              color: #333;
            }
            .el-input__inner {
              border-radius: 5px;
              border: 1px solid #ccc;
              &:focus {
                border-color: #409eff;
              }
            }
            .el-date-editor--datetimerange {
              width: 100%;
              .el-input__inner {
                width: 100%;
              }
            }
            .el-textarea__inner {
              border-radius: 5px;
              border: 1px solid #ccc;
              &:focus {
                border-color: #409eff;
              }
            }
          }
          .form-item_oth {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
            .el-button {
              border-radius: 5px;
              padding: 10px 20px;
              &:first-child {
                background-color: #409eff;
                color: #fff;
              }
              &:last-child {
                background-color: #f56c6c;
                color: #fff;
              }
            }
          }
        }
      }
      .calendar {
        width: 40vw;
        height: 500px;
        @media (max-width: 768px) {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 80%;
          margin: 0 auto;
        }
      }
    }
    a {
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 40px; /* 內邊距 */
      background-color: #60a6cf;
      color: #000; /* 字體顏色 */
      border: none; /* 去掉邊框 */
      border-radius: 20px; /* 圓角 */
      font-size: 24px; /* 字體大小 */
      cursor: pointer; /* 游標樣式 */
      margin: 20px auto;
    }
  }
}

/* 只在 768px 寬度以下調整樣式 */
@media (max-width: 768px) {
  .wrap main form {
    width: 90%; /* 調整表格寬度 */
    font-size: 14px; /* 調整字體大小 */
  }
  .wrap main .form_item .el-form-item,
  .wrap main .form_item .form-item_oth {
    font-size: 14px; /* 調整字體大小 */
    padding: 5px; /* 調整內邊距 */
    height: auto; /* 調整高度 */
  }
  .wrap main .form-item_oth .el-button {
    padding: 10px 20px; /* 調整按鈕內邊距 */
    font-size: 14px; /* 調整字體大小 */
  }
}
</style>
