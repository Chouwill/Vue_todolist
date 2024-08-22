<template>
  <tr>
    <td class="product-info">
      <div class="flex-box">
        <img :src="product.imageUrl" alt="" width="50" />
        <h4>{{ product.title }}</h4>
      </div>
    </td>
    <td class="product-price">{{ product.price }}</td>
    <td class="quantity-control">
      <div class="flex-box">
        <div class="delebox">
          <font-awesome-icon icon="fa-solid fa-minus" @click="store.minus(product.id)" />
        </div>
        <h3>{{ product.quantity }}</h3>
        <div class="addbox">
          <font-awesome-icon icon="fa-solid fa-plus" @click="store.add(product.id)" />
        </div>
      </div>
    </td>
    <td class="product-price-total">
      <h4 style="text-align: center">{{ product.price * product.quantity }}</h4>
    </td>
    <td class="product-delete">
      <el-button type="danger" @click="store.remove(product.id)">刪除</el-button>
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
  td.product-info .flex-box {
    // text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    img { flex: 1 }
    h4 { flex: 2 }
  }
  td.product-price {
    // background-color: yellow;
    text-align: center;
  }
  td.quantity-control .flex-box {
    height: 100%;
    // background-color: teal;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
}
</style>
