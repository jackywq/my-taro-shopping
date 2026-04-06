import { View, Text, Image, ScrollView } from "@tarojs/components";
import { useState } from "react";
import "./index.less";

const initialCart = [
  {
    id: 1,
    name: "猪肉排骨肋骨猪肉排骨肋骨",
    sales: 100,
    price: 30.0,
    img: "https://placehold.co/160x160/pink/white?text=Meat",
    count: 1,
    checked: true,
  },
  {
    id: 2,
    name: "猪肉排骨肋骨猪肉排骨肋骨",
    sales: 100,
    price: 30.0,
    img: "https://placehold.co/160x160/pink/white?text=Meat",
    count: 1,
    checked: true,
  },
];

const recommendProducts = [
  {
    id: 3,
    name: "猪肉排骨肋骨",
    sales: 100,
    price: "30.00",
    img: "https://placehold.co/300x200/pink/white?text=Meat",
  },
  {
    id: 4,
    name: "红心西柚",
    sales: 100,
    price: "30.00",
    img: "https://placehold.co/300x200/red/white?text=Grapefruit",
  },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);

  const toggleCheck = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const toggleAll = () => {
    const allChecked = cart.every((item) => item.checked);
    setCart(cart.map((item) => ({ ...item, checked: !allChecked })));
  };

  const changeCount = (id: number, delta: number) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          const newCount = Math.max(1, item.count + delta);
          return { ...item, count: newCount };
        }
        return item;
      }),
    );
  };

  const isAllChecked = cart.length > 0 && cart.every((item) => item.checked);
  const totalAmount = cart
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <View className="cart-page">
      <ScrollView className="cart-content" scrollY>
        <View className="cart-list">
          {cart.map((item) => (
            <View key={item.id} className="cart-item">
              <View
                className={`checkbox ${item.checked ? "checked" : ""}`}
                onClick={() => toggleCheck(item.id)}
              >
                {item.checked && <Text className="check-mark">✓</Text>}
              </View>
              <Image className="item-img" src={item.img} mode="aspectFill" />
              <View className="item-info">
                <Text className="item-name">{item.name}</Text>
                <Text className="item-sales">已售{item.sales}</Text>
                <View className="item-bottom">
                  <Text className="item-price">¥ {item.price.toFixed(2)}</Text>
                  <View className="stepper">
                    <Text
                      className="step-btn"
                      onClick={() => changeCount(item.id, -1)}
                    >
                      -
                    </Text>
                    <Text className="step-val">{item.count}</Text>
                    <Text
                      className="step-btn add"
                      onClick={() => changeCount(item.id, 1)}
                    >
                      +
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View className="recommend-section">
          <View className="section-title">
            <Text className="title-text">为您推荐</Text>
          </View>
          <View className="product-list">
            {recommendProducts.map((item) => (
              <View key={item.id} className="product-card">
                <Image
                  className="product-img"
                  src={item.img}
                  mode="aspectFill"
                />
                <View className="product-info">
                  <Text className="product-name">{item.name}</Text>
                  <Text className="product-sales">已售{item.sales}</Text>
                  <View className="product-bottom">
                    <Text className="product-price">¥ {item.price}</Text>
                    <View className="add-cart">🛒</View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View className="bottom-bar">
        <View className="check-all" onClick={toggleAll}>
          <View className={`checkbox ${isAllChecked ? "checked" : ""}`}>
            {isAllChecked && <Text className="check-mark">✓</Text>}
          </View>
          <Text>全选</Text>
        </View>

        <View className="total-info">
          <View className="total-price-wrap">
            <Text>合计：</Text>
            <Text className="total-price">¥ {totalAmount.toFixed(2)}</Text>
          </View>
          <Text className="freight">运费：¥ 0</Text>
        </View>

        <View className="submit-btn">
          <Text>提交订单</Text>
        </View>
      </View>
    </View>
  );
}
