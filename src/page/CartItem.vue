<template>
  <tr>
    <td>
      <input type="checkbox" />
      <img :src="product.imageUrl" alt="" width="50" />
      <h4>{{ product.title }}</h4>
    </td>
    <td>{{ product.price }}</td>
    <td>
      <div class="delebox">
        <font-awesome-icon icon="fa-solid fa-minus" @click="clickDelete" />
      </div>
      <h3>{{ Minquantity }}</h3>
      <div class="addbox">
        <font-awesome-icon icon="fa-solid fa-plus" @click="clickAdd" />
      </div>
    </td>
    <td>
      <h4 style="text-align: center">{{ Total }}</h4>
    </td>
    <td>
      <button>刪除</button>
    </td>
  </tr>
</template>

<script setup>
import { useCartStore } from "../stores/cart.js";
import { ref, computed } from "vue";

const productquantity = ref(1);

// const

// const store = useCartStore();
// defineProps({
//   product: {
//     id: String,
//     imageUrl: String,
//     title: String,
//     description: String,
//     origin_price: Number,
//     price: Number,
//     quantity: Number,
//   },
// });

const store = useCartStore();
const props = defineProps({
  product: {
    id: String,
    imageUrl: String,
    title: String,
    description: String,
    origin_price: Number,
    price: Number,
    quantity: Number,
  },
});

const TotalCalculator = () => {
  if (productquantity.value === 0) {
    Total.value = 0;
  } else {
    Total.value = productquantity.value * props.product.price;
  }
};

// return Math.max(counter.value, 0); // (取增加與減少的值 與 0比較，顯示最大值)

const clickAdd = () => {
  productquantity.value++;
  TotalCalculator();
};

const clickDelete = () => {
  // if (productquantity.value > 0) {
  //   productquantity.value--;
  // }
  if (productquantity.value === 0) {
    return; //如果數量為 0，提前結束函數，不做任何操作
  }
  productquantity.value--;
  TotalCalculator();
};

const Minquantity = computed(() => {
  // 詢問computed的作用
  return Math.max(productquantity.value, 0); // (取增加與減少的值 與 0比較，顯示最大值)
});

const Total = ref();

TotalCalculator();





</script>

<style lang="scss" scoped>
tr {
  td:first-child {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  td:nth-child(2) {
    background-color: yellow;
    text-align: center;
  }
  td:nth-child(3) {
    background-color: teal;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
}
</style>
