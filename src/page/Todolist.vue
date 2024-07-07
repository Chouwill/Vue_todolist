<template>
  <div class="wrap">
    <div class="banner">
      <h1 class="slogan">
        提升您的時間管理，體驗專屬VIP服務！立即進入商城，解鎖1對1專業秘書、智能聊天機器人和智能提醒，助您高效實現每一個目標！
      </h1>
      <router-link to="/shopping" class="cta-button">
        進入商城
      </router-link>
    </div>
    <div class="services-container">
      <div class="service-item">
        <h2>1對1專業個人秘書</h2>
        <p>獨享私人秘書服務，量身定制時間管理方案，隨時隨地提供專業諮詢。</p>
      </div>
      <div class="service-item">
        <h2>智能聊天機器人</h2>
        <p>
          智能助手隨時待命，提供高效建議和問題解答，優化您的待辦事項和行事曆。
        </p>
      </div>
      <div class="service-item">
        <h2>智能提醒</h2>
        <p>即時提醒重要事件和任務，確保您不再錯過任何關鍵時刻。</p>
      </div>
    </div>
    <div class="Todolist">
      <label for="">請輸入內容</label>
      <el-input v-model="input" style="width: 240px" placeholder="請輸入內容" />
      <label for="">起始時間</label>
      <input type="date" v-model="startDatevalue" />
      <label for="">結束時間</label>
      <input type="date" v-model="endDatevalue" />
      <button @click="sendBtn">送出</button>
    </div>
    <div class="output">
      <div class="output_box" v-for="obj in outText" :key="obj.id">
        <input type="checkbox" />
        <h2>{{ obj.text }}</h2>

        <h2>開始時間{{ obj.startDate }}</h2>
        <h2>結束時間{{ obj.endDate }}</h2>

        <!-- :value="obj.text" ===> 指向第40行.text
             :disabled="obj.disabled"  ===> 指向第42行:disabled -->
        <div class="btn_box">
          <button @click="editBtn(obj)">修改</button>
          <button @click="saveBtn(obj)">儲存</button>
          <button @click="deleteBtn(obj.id)">刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

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
</script>

<style lang="scss">
body {
  font-family: Arial, sans-serif;
  background-color: #f3d19e;
  margin: 0;
  padding: 0;
  text-align: center;
}
.wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .banner {
    background-color: #eebe77;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 30px 0;
  }
  .slogan {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    margin: 0 0 20px 0;
  }
  .cta-button {
    background-color: #d48c3e;
    color: #ffffff;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #b6702e;
    }
  }
}

.services-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #f3d19e;
  .service-item {
    width: 30%;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    h2 {
      font-size: 20px;
      color: #eebe77;
    }
    p {
      font-size: 16px;
      color: #333333;
    }
  }
}
.Todolist {
  margin: 150px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  button {
    display: block;
    padding: 10px 20px;
    margin: 20px auto;
    width: 50%;
    flex: 0 0 auto;
    border: none;
    border-radius: 5px;
    background-color: #d48c3e;
    font-size: 16px;
  }
}
.output_box {
  display: flex;
  // justify-content: space-evenly;
  gap: 15px;
  // align-items: center;
  flex-direction: row;
  border: 5px solid gray;
  padding: 15px;
  input {
    // background-color: orange;
    color: #000;
  }
  h2 {
    color: green;
    font-size: 15px;
  }
  .btn_box {
    display: flex;
    // width: 100%;
    // border: 5px solid red;
    justify-content: center;
    align-items: center;
  }
}
</style>
