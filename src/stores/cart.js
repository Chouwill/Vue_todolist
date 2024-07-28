import { defineStore } from "pinia";
import { ref, computed } from "vue";

// {
//   id: "-O182suwbu2sCGcyoK7-",
//   imageUrl: "https://thumbsnap.com/i/qh5QKKgx.png",
//   title: "不再數錢度日",
//   description: "測試的描述",
//   origin_price: 350,
//   price: 350,
//   quantity: 1,
// }

export const useCartStore = defineStore("cart", () => {
  const shoppingCart = ref([]);
  const counter = ref(0);

  // const save = () => {
  //   localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart.value));
  // };
  // const addCart = () => {
  //   counter.value++;  //我有定義這個
  // };
  // const deleteCart = () => {
  //   counter.value--;
  // };

  const Minquantity = computed(() => {
    // 詢問computed的作用
    return Math.max(counter.value, 0); // (取增加與減少的值 與 0比較，顯示最大值)
  });

  const addToCart = (product) => {
    const existingProduct = shoppingCart.value.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
      // save();
      return;
    }
    shoppingCart.value.push({
      id: product.id,
      imageUrl: product.imageUrl,
      title: product.title,
      description: product.description,
      origin_price: product.origin_price,
      price: product.price,
      quantity: 1,
    });
    // save();
  };

  return {
    shoppingCart,
    // addCart,
    // addCount,
    // deleteCart,
    Minquantity,
    addToCart,
    counter,
  };
});
