import React, { useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import { Button, Input, ConfigProvider, Toast } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import zhCN from "@nutui/nutui-react-taro/dist/locales/zh-CN";
import "./index.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 验证输入
    if (!username.trim()) {
      Toast.show("请输入用户名");
      return;
    }
    if (!password.trim()) {
      Toast.show("请输入密码");
      return;
    }

    // 模拟登录验证
    if (username === "admin" && password === "123456") {
      // 登录成功，保存登录状态
      Taro.setStorageSync("isLogin", true);
      Taro.setStorageSync("userInfo", { username });

      Toast.show({
        content: "登录成功！",
        icon: "success",
        onClose: () => {
          // 跳转到首页
          Taro.redirectTo({
            url: "/pages/index/index",
          });
        },
      });
    } else {
      Toast.show({
        content: "用户名或密码错误",
        icon: "fail",
      });
    }
  };

  const handleRegister = () => {
    // 跳转到注册页
    Taro.navigateTo({
      url: "/pages/register/index",
    });
  };

  return (
    <ConfigProvider locale={zhCN}>
      <View className="login-container">
        {/* 顶部装饰区域 */}
        <View className="login-header">
          <View className="header-bg">
            <View className="city-info">
              <Text className="city-name">济南市</Text>
              <View className="city-arrow">▼</View>
            </View>
          </View>
        </View>

        {/* 登录表单区域 */}
        <View className="login-form">
          <View className="form-title">
            <Text className="title-text">欢迎登录</Text>
            <Text className="subtitle-text">房屋租赁平台</Text>
          </View>

          <View className="form-content">
            <View className="input-group">
              <Input
                placeholder="请输入用户名"
                value={username}
                onChange={(val) => setUsername(val)}
                className="login-input"
                clearable
              />
            </View>

            <View className="input-group">
              <Input
                placeholder="请输入密码"
                value={password}
                onChange={(val) => setPassword(val)}
                type="password"
                className="login-input"
                clearable
              />
            </View>

            <Button
              type="primary"
              onClick={handleLogin}
              className="login-button"
              size="large"
            >
              登录
            </Button>

            <View className="form-footer">
              <Text className="register-link" onClick={handleRegister}>
                还没有账号？立即注册
              </Text>
            </View>
          </View>
        </View>

        {/* 底部说明 */}
        <View className="login-tips">
          <Text className="tips-text">测试账号：admin，密码：123456</Text>
        </View>
      </View>
    </ConfigProvider>
  );
}

export default Login;
