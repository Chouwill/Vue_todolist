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
      <h3>{{ productquantity }}</h3>
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
import { ref } from "vue";

const productquantity = ref(1);

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
  Total.value = productquantity.value * props.product.price;
};

const clickAdd = () => {
  productquantity.value++;
  TotalCalculator();
};

const clickDelete = () => {
  productquantity.value--;
  TotalCalculator();
};

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
