/* eslint-disable jsx-quotes */
import { View, Text, Image, ScrollView } from "@tarojs/components";
import "./index.less";

export default function Profile() {
  return (
    <ScrollView className="profile-page" scrollY>
      <View className="header">
        <View className="user-info">
          <Image
            className="avatar"
            src="https://placehold.co/120x120/orange/white?text=Avatar"
            mode="aspectFill"
          />
          <Text className="username">手可摘棉花</Text>
          <Text className="signature">今天是个好天气~</Text>
        </View>
      </View>

      <View className="assets-card">
        <View className="asset-item">
          <Text className="asset-val">234.00</Text>
          <Text className="asset-label">账户余额</Text>
        </View>
        <View className="asset-divider" />
        <View className="asset-item">
          <Text className="asset-val">10</Text>
          <Text className="asset-label">优惠券</Text>
        </View>
        <View className="asset-divider" />
        <View className="asset-item">
          <Text className="asset-val">29</Text>
          <Text className="asset-label">我的足迹</Text>
        </View>
      </View>

      <View className="orders-section">
        <View className="section-header">
          <Text className="title">我的订单</Text>
          <View className="more">
            <Text>全部</Text>
            <Text className="arrow">&gt;</Text>
          </View>
        </View>
        <View className="order-types">
          <View className="type-item">
            <Text className="type-icon">👛</Text>
            <Text className="type-name">待付款</Text>
          </View>
          <View className="type-item">
            <Text className="type-icon">📦</Text>
            <Text className="type-name">待发货</Text>
          </View>
          <View className="type-item">
            <Text className="type-icon">🚚</Text>
            <Text className="type-name">待收货</Text>
          </View>
          <View className="type-item">
            <Text className="type-icon">✅</Text>
            <Text className="type-name">已完成</Text>
          </View>
        </View>
      </View>

      <View className="menu-list">
        <View className="menu-item">
          <View className="menu-left">
            <Text className="menu-icon">📍</Text>
            <Text className="menu-name">我的地址</Text>
          </View>
          <Text className="menu-arrow">&gt;</Text>
        </View>
        <View className="menu-item">
          <View className="menu-left">
            <Text className="menu-icon">🎧</Text>
            <Text className="menu-name">联系客服</Text>
          </View>
          <Text className="menu-arrow">&gt;</Text>
        </View>
        <View className="menu-item">
          <View className="menu-left">
            <Text className="menu-icon">❓</Text>
            <Text className="menu-name">常见问题</Text>
          </View>
          <Text className="menu-arrow">&gt;</Text>
        </View>
        <View className="menu-item">
          <View className="menu-left">
            <Text className="menu-icon">⚙️</Text>
            <Text className="menu-name">设置</Text>
          </View>
          <Text className="menu-arrow">&gt;</Text>
        </View>
        <View className="menu-item">
          <View className="menu-left">
            <Text className="menu-icon">🚪</Text>
            <Text className="menu-name">退出登录</Text>
          </View>
          <Text className="menu-arrow">&gt;</Text>
        </View>
      </View>
    </ScrollView>
  );
}
