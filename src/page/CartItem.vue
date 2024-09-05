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
          <font-awesome-icon
            icon="fa-solid fa-minus"
            @click="store.minus(product.id)"
          />
        </div>
        <h3>{{ product.quantity }}</h3>
        <div class="addbox">
          <font-awesome-icon
            icon="fa-solid fa-plus"
            @click="store.add(product.id)"
          />
        </div>
      </div>
    </td>
    <td class="product-price-total">
      <h4 style="text-align: center">{{ product.price * product.quantity }}</h4>
    </td>
    <td class="product-delete">
      <el-button type="danger" @click="store.remove(product.id)"
        >刪除</el-button
      >
    </td>
  </tr>
</template>

<script setup>
import { useCartStore } from "../stores/cart.js";
import { ref, defineProps, defineEmits, watch, defineExpose,onMounted } from "vue";

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

const emit = defineEmits(["checkCart"]);

const checkProduct = () => {
  console.log("checkProduct 被調用"); // 添加日誌
  if (!props.product || Object.keys(props.product).length === 0) {
    emit("checkCart", "購物車為空");
    alert("購物車為空");
  } else {
    emit("checkCart", "請繼續結帳");
    alert("請繼續結帳");
  }
};
// onMounted(() => {
//   checkProduct();  //那我要重複檢查觸發
// });

watch(
  () => props.product,
  (newVal, oldVal) => {
    console.log("props.product 變化了", newVal, oldVal); // 添加日誌
    checkProduct();
  },
  { deep: true }
);

// 將 checkProduct 方法暴露給父組件
defineExpose({
  checkProduct,
});
</script>

<style lang="scss" scoped>
tr {
  td.product-info .flex-box {
    // text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    img {
      flex: 1;
    }
    h4 {
      flex: 2;
    }
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
