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
  const shoppingCart = ref(JSON.parse(localStorage.getItem("shoppingCart")) || []);
  const counter = ref(0);

  const save = () => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart.value));
  };

  const Minquantity = computed(() => {
    // 詢問computed的作用
    return Math.max(counter.value, 0); // (取增加與減少的值 與 0比較，顯示最大值)
    // counter.value < 0 ? 0 : counter.value
    // if (counter.value < 0) return 0
  });

  const removeAll = () => {
    shoppingCart.value = []
    save()
  }

  const total = computed(() => {
    return shoppingCart.value.map(p => p.price * p.quantity).reduce((acc, current) => acc +  current, 60)
  })

  const remove = (id) => {
    // product是shoppingCart.value的element, product是自定義參數
    shoppingCart.value = shoppingCart.value.filter(product => product.id !== id)
    save()
  }

  const add = (id) => {
    const target = shoppingCart.value.find((p) => p.id === id);
    target.quantity++
    save()
  }
  const minus = (id) => {
    const target = shoppingCart.value.find((p) => p.id === id);
    if (target.quantity > 0) target.quantity--
    save()
  }

  const addToCart = (product) => {
    const existingProduct = shoppingCart.value.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
      save();
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
    save();
  };

  return {
    shoppingCart,
    Minquantity,
    addToCart,
    counter,
    add,
    minus,
    remove,
    total,
    removeAll
  };
});
