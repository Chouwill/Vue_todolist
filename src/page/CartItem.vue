<template>
  <tr>
    <td>
      <img :src="product.imageUrl" alt="" width="50" />
      <h4>{{ product.title }}</h4>
    </td>
    <td>{{ product.price }}</td>
    <td>
      <div class="delebox">
        <font-awesome-icon icon="fa-solid fa-minus" @click="store.minus(product.id)" />
      </div>
      <h3>{{ product.quantity }}</h3>
      <div class="addbox">
        <font-awesome-icon icon="fa-solid fa-plus" @click="store.add(product.id)" />
      </div>
    </td>
    <td>
      <h4 style="text-align: center">{{ product.price * product.quantity }}</h4>
    </td>
    <td>
      <button @click="store.remove(product.id)">刪除</button>
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
    img { flex: 1 }
    h4 { flex: 2 }
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
