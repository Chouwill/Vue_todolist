import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";

export const useReserveStore = defineStore("reserve", () => {
  // 全部活動
  const reseveArr = ref([]);
  // console.log(reseveArr)

  const reseveId = ref(0);

  // 客訂活動日期
  const CustomerDate = ref([]);
  console.log("######",CustomerDate.value);

  const IdTitle = computed(() => `當前 ID: ${reseveId.value}`);

  const reseveItem = computed(() => reseveArr.value[reseveId.value]);

  const getDataList = async () => {
    const res = await axios.get(
      "https://vue3-course-api.hexschool.io/api/enjoylife_detail/products"
      // "https://vue-lessons-api.vercel.app/courses/list"
    );
    reseveArr.value = res.data;
    // console.log(reseveArr.value);
  };

  // 已購買的活動
  const buyProductList = ref([])

  const buyProduct = (product, date) => {
    buyProductList.value.push({ ...product, date });
  };

  return { reseveArr, reseveId, IdTitle, reseveItem, getDataList,CustomerDate, buyProductList, buyProduct };
});
