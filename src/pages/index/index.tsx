import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "@tarojs/components";
import { ConfigProvider, Toast } from "@nutui/nutui-react-taro";
import Taro, { useDidShow } from "@tarojs/taro";
import zhCN from "@nutui/nutui-react-taro/dist/locales/zh-CN";
import "./index.css";

function Index() {
  const [userInfo, setUserInfo] = useState<any>(null);

  useDidShow(() => {
    // 检查登录状态
    const isLogin = Taro.getStorageSync("isLogin");
    if (!isLogin) {
      // 未登录，跳转到登录页
      Taro.redirectTo({
        url: "/pages/login/index",
      });
      return;
    }

    // 获取用户信息
    const user = Taro.getStorageSync("userInfo");
    setUserInfo(user);
  });

  const handleLogout = () => {
    Taro.showModal({
      title: "提示",
      content: "确定要退出登录吗？",
      success: (res) => {
        if (res.confirm) {
          // 清除登录状态
          Taro.removeStorageSync("isLogin");
          Taro.removeStorageSync("userInfo");
          // 跳转到登录页
          Taro.redirectTo({
            url: "/pages/login/index",
          });
        }
      },
    });
  };

  const handleMenuClick = (type: string) => {
    Toast.show("index-toast", { content: `点击了${type}` });
  };

  const handleHouseClick = () => {
    Toast.show("index-toast", { content: "查看房源详情" });
  };

  const menuItems = [
    { icon: "🏠", text: "快速找房", color: "#ff6b6b" },
    { icon: "🤝", text: "合租", color: "#4dabf7" },
    { icon: "🏢", text: "整租", color: "#ffd43b" },
    { icon: "📹", text: "短租", color: "#ff8cc8" },
    { icon: "👥", text: "长租", color: "#51cf66" },
    { icon: "🏫", text: "学生公寓", color: "#ffa94d" },
    { icon: "🏭", text: "员工宿舍", color: "#339af0" },
    { icon: "💰", text: "低价好房", color: "#ff6b6b" },
  ];

  const myServices = [
    { icon: "❤️", text: "我的收藏", color: "#ff6b6b" },
    { icon: "🏠", text: "我的预约", color: "#51cf66" },
    { icon: "📋", text: "我的预定", color: "#ffa94d" },
    { icon: "📄", text: "我的合同", color: "#339af0" },
  ];

  return (
    <ConfigProvider locale={zhCN}>
      <Toast id="index-toast" />
      <ScrollView className="index-container" scrollY>
        {/* 顶部区域 */}
        <View className="header-section">
          <View className="header-content">
            <View className="location">
              <Text className="city-name">济南市</Text>
              <Text className="dropdown-icon">▼</Text>
            </View>
            <View className="header-actions">
              <Text className="menu-dots">⋯</Text>
              <Text className="user-avatar" onClick={handleLogout}>
                👤
              </Text>
            </View>
          </View>

          {/* Banner区域 */}
          <View className="banner-section">
            <View className="banner-content">
              <View className="banner-left">
                <Text className="banner-version">NutUI 3.1 正式发布</Text>
                <Text className="banner-title">开启多端开发之路～</Text>
              </View>
              <View className="banner-right">
                <View className="banner-3d">🏠</View>
              </View>
            </View>
          </View>
        </View>

        {/* 功能菜单 */}
        <View className="menu-section">
          {menuItems.map((item, index) => (
            <View
              key={index}
              className="menu-item"
              onClick={() => handleMenuClick(item.text)}
            >
              <View
                className="menu-icon"
                style={{ backgroundColor: item.color }}
              >
                <Text className="icon-text">{item.icon}</Text>
              </View>
              <Text className="menu-text">{item.text}</Text>
            </View>
          ))}
        </View>

        {/* 我的服务 */}
        <View className="my-services">
          {myServices.map((item, index) => (
            <View
              key={index}
              className="service-item"
              onClick={() => handleMenuClick(item.text)}
            >
              <View
                className="service-icon"
                style={{ backgroundColor: item.color }}
              >
                <Text className="service-icon-text">{item.icon}</Text>
              </View>
              <Text className="service-text">{item.text}</Text>
            </View>
          ))}
        </View>

        {/* 精选好房 */}
        <View className="featured-section">
          <View className="section-header">
            <Text className="section-title">精选好房</Text>
            <Text className="view-all">查看全部</Text>
          </View>

          <View className="house-card" onClick={handleHouseClick}>
            <View className="house-image">
              <View className="house-placeholder">🏠</View>
            </View>
            <View className="house-info">
              <Text className="house-title">整租诚基中心</Text>
              <Text className="house-desc">1室一厅 100m² 南北</Text>
              <Text className="house-location">
                济南市历下区和平路诚基中心9...
              </Text>
              <View className="house-price">
                <Text className="price-amount">¥ 10000 元/月</Text>
                <Text className="price-daily">(¥ 30元/天)</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 底部导航占位 */}
        <View className="bottom-placeholder"></View>
      </ScrollView>

      {/* 底部导航栏 */}
      <View className="bottom-nav">
        <View className="nav-item active">
          <Text className="nav-icon">🏠</Text>
          <Text className="nav-text">首页</Text>
        </View>
        <View className="nav-item">
          <Text className="nav-icon">🔍</Text>
          <Text className="nav-text">快速找房</Text>
        </View>
        <View className="nav-item">
          <Text className="nav-icon">💬</Text>
          <Text className="nav-text">社区</Text>
        </View>
        <View className="nav-item" onClick={handleLogout}>
          <Text className="nav-icon">👤</Text>
          <Text className="nav-text">我的</Text>
        </View>
      </View>
    </ConfigProvider>
  );
}

export default Index;
