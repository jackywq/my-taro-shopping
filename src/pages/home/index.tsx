import { View, Text, Image, ScrollView, Input } from "@tarojs/components";
import "./index.less";

const categories = [
  { name: "水果", icon: "🍉" },
  { name: "蔬菜", icon: "🥬" },
  { name: "肉蛋类", icon: "🥩" },
  { name: "海鲜", icon: "🐟" },
  { name: "粮油调料", icon: "🌾" },
  { name: "奶制品", icon: "🥛" },
  { name: "饮料", icon: "🧃" },
  { name: "冷冻食品", icon: "🧊" },
  { name: "日用洗涤", icon: "🧼" },
  { name: "全部分类", icon: "🗂" },
];

const hotProducts = [
  {
    id: 1,
    name: "江西夏日鲜橙",
    sales: 100,
    price: "30.00",
    img: "https://placehold.co/100x100/orange/white?text=Orange",
  },
  {
    id: 2,
    name: "罗莎绿生菜",
    sales: 100,
    price: "30.00",
    img: "https://placehold.co/100x100/green/white?text=Lettuce",
  },
  {
    id: 3,
    name: "当地散养土鸡蛋",
    sales: 100,
    price: "30.00",
    img: "https://placehold.co/100x100/wheat/white?text=Egg",
  },
];

const products = [
  {
    id: 1,
    name: "猪肉排骨肋骨",
    sales: 100,
    price: "30.00",
    img: "https://placehold.co/300x200/pink/white?text=Meat",
  },
  {
    id: 2,
    name: "红心西柚",
    sales: 100,
    price: "30.00",
    img: "https://placehold.co/300x200/red/white?text=Grapefruit",
  },
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

export default function Home() {
  return (
    <ScrollView className="home-page" scrollY>
      <View className="banner">
        <View className="banner-content">
          <Text className="banner-title">精选果蔬 美味自然</Text>
          <Text className="banner-sub">新客优惠，第二件半价</Text>
        </View>
        <View className="search-bar-wrapper">
          <View className="search-bar">
            <Text className="search-icon">🔍</Text>
            <Input className="search-input" placeholder="搜索商品" />
          </View>
        </View>
      </View>

      <View className="notice">
        <Text className="notice-tag">公告</Text>
        <Text className="notice-text">购物平台正式上线！</Text>
      </View>

      <View className="category-grid">
        {categories.map((cat, index) => (
          <View key={index} className="category-item">
            <View className="category-icon">{cat.icon}</View>
            <Text className="category-name">{cat.name}</Text>
          </View>
        ))}
      </View>

      <View className="hot-recommend">
        <Text className="section-title">热销推荐</Text>
        <ScrollView className="hot-list" scrollX>
          {hotProducts.map((item) => (
            <View key={item.id} className="hot-item">
              <View className="hot-info">
                <Text className="hot-name">{item.name}</Text>
                <Text className="hot-sales">已售{item.sales}</Text>
                <Text className="hot-price">¥ {item.price}</Text>
              </View>
              <Image className="hot-img" src={item.img} mode="aspectFill" />
            </View>
          ))}
        </ScrollView>
      </View>

      <View className="product-section">
        <ScrollView className="product-tabs" scrollX>
          {["全部", "水果", "蔬菜", "海鲜", "肉蛋类", "粮油调料"].map(
            (tab, idx) => (
              <Text
                key={idx}
                className={`tab-item ${idx === 0 ? "active" : ""}`}
              >
                {tab}
              </Text>
            ),
          )}
        </ScrollView>
        <View className="product-list">
          {products.map((item) => (
            <View key={item.id} className="product-card">
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
        </View>
      </View>
    </ScrollView>
  );
}
