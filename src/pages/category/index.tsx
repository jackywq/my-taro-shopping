import { View, Text, Image, ScrollView, Input } from "@tarojs/components";
import { useState } from "react";
import "./index.less";

const categories = [
  "全部",
  "水果",
  "蔬菜",
  "肉蛋类",
  "海鲜",
  "粮油调料",
  "奶制品",
  "饮料",
  "冷冻食品",
  "日用洗涤",
];

const products = [
  {
    id: 1,
    name: "猪肉排骨肋骨猪肉排骨肋骨",
    sales: 100,
    price: "30.00",
    img: "https://placehold.co/160x160/pink/white?text=Meat",
  },
  {
    id: 2,
    name: "红心西柚红心西柚",
    sales: 100,
    price: "30.00",
    img: "https://placehold.co/160x160/red/white?text=Grapefruit",
  },
  {
    id: 3,
    name: "猪肉排骨肋骨猪肉排骨肋骨",
    sales: 100,
    price: "30.00",
    img: "https://placehold.co/160x160/pink/white?text=Meat",
  },
  {
    id: 4,
    name: "红心西柚红心西柚",
    sales: 100,
    price: "30.00",
    img: "https://placehold.co/160x160/red/white?text=Grapefruit",
  },
  {
    id: 5,
    name: "猪肉排骨肋骨猪肉排骨肋骨",
    sales: 100,
    price: "30.00",
    img: "https://placehold.co/160x160/pink/white?text=Meat",
  },
];

export default function Category() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <View className="category-page">
      <View className="search-bar-container">
        <View className="search-bar">
          <Text className="search-icon">🔍</Text>
          <Input className="search-input" placeholder="搜索商品" />
        </View>
      </View>

      <View className="content">
        <ScrollView className="left-nav" scrollY>
          {categories.map((cat, idx) => (
            <View
              key={idx}
              className={`nav-item ${idx === activeIdx ? "active" : ""}`}
              onClick={() => setActiveIdx(idx)}
            >
              <Text>{cat}</Text>
            </View>
          ))}
        </ScrollView>

        <ScrollView className="right-list" scrollY>
          {products.map((item) => (
            <View key={item.id} className="product-item">
              <Image className="product-img" src={item.img} mode="aspectFill" />
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
        </ScrollView>
      </View>
    </View>
  );
}
