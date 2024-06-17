<!-- <template>
  <h4>Todolist</h4>
  <div class="box">
    <div class="todolist">
      <label for="">請輸入</label>
      <input
        type="text"
        v-model="input"
        v-on:keyup.enter="sendText"
      />
      <input @keyup.enter="sendText"縮寫>    -->
      <!-- <button @click="sendText">送出</button>
    </div>
    <div class="output">
      <div v-for="(item, idx) in outputText" :key="idx">
        <p>{{ item }}</p>
        <button>修改</button>
        <button @click="deletebtn(idx)">刪除</button>
      </div>
    </div>
  </div>
</template> -->

<script setup>
import { ref } from "vue";

const input = ref("");

const outputText = ref([]); // 這樣與ref([})的差別
// ref("")空字串
// ref([])初始化為一個空陣列

const sendText = () => {
  //   outputText.value = input.value;
  outputText.value.push(input.value);
  console.log(outputText);
  //   input.value = "";
};

const deletebtn = (idx) => {
  outputText.value.splice(idx, 1);
};
</script>

<style>
h4 {
  text-align: center;
}

.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>



