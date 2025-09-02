import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import {
  Button,
  Input,
  ConfigProvider,
  Toast,
  Checkbox,
} from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import zhCN from "@nutui/nutui-react-taro/dist/locales/zh-CN";
import "./index.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
    verifyCode: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [codeButtonText, setCodeButtonText] = useState("获取验证码");
  const [codeDisabled, setCodeDisabled] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGetCode = () => {
    if (!formData.phone.trim()) {
      Toast.show("register-toast", { content: "请输入手机号" });
      return;
    }

    if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      Toast.show("register-toast", { content: "请输入正确的手机号" });
      return;
    }

    // 模拟发送验证码
    setCodeDisabled(true);
    let countdown = 60;
    setCodeButtonText(`${countdown}s`);

    const timer = setInterval(() => {
      countdown--;
      if (countdown > 0) {
        setCodeButtonText(`${countdown}s`);
      } else {
        setCodeButtonText("获取验证码");
        setCodeDisabled(false);
        clearInterval(timer);
      }
    }, 1000);

    Toast.show("register-toast", { content: "验证码已发送" });
  };

  const handleRegister = () => {
    // 表单验证
    if (!formData.username.trim()) {
      Toast.show("register-toast", { content: "请输入用户名" });
      return;
    }
    if (!formData.phone.trim()) {
      Toast.show("register-toast", { content: "请输入手机号" });
      return;
    }
    if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      Toast.show("register-toast", { content: "请输入正确的手机号" });
      return;
    }
    if (!formData.verifyCode.trim()) {
      Toast.show("register-toast", { content: "请输入验证码" });
      return;
    }
    if (!formData.password.trim()) {
      Toast.show("register-toast", { content: "请输入密码" });
      return;
    }
    if (formData.password.length < 6) {
      Toast.show("register-toast", { content: "密码长度不能少于6位" });
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      Toast.show("register-toast", { content: "两次输入的密码不一致" });
      return;
    }
    if (!agreed) {
      Toast.show("register-toast", { content: "请阅读并同意用户协议" });
      return;
    }

    // 模拟注册
    Toast.show("register-toast", {
      content: "注册成功！",
      type: "success",
      onClose: () => {
        // 跳转到登录页
        Taro.navigateBack();
      },
    });
  };

  const handleBack = () => {
    Taro.navigateBack();
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Toast id="register-toast" />
      <View className="register-container">
        {/* 顶部区域 */}
        <View className="register-header">
          <View className="header-content">
            <Text className="back-button" onClick={handleBack}>
              ←
            </Text>
            <Text className="header-title">注册账号</Text>
          </View>
        </View>

        {/* 注册表单 */}
        <View className="register-form">
          <View className="form-title">
            <Text className="title-text">创建新账号</Text>
            <Text className="subtitle-text">加入房屋租赁平台</Text>
          </View>

          <View className="form-content">
            <View className="input-group">
              <Input
                placeholder="请输入用户名"
                value={formData.username}
                onChange={(val) => handleInputChange("username", val)}
                className="register-input"
                clearable
              />
            </View>

            <View className="input-group">
              <Input
                placeholder="请输入手机号"
                value={formData.phone}
                onChange={(val) => handleInputChange("phone", val)}
                type="number"
                className="register-input"
                clearable
              />
            </View>

            <View className="input-group code-group">
              <Input
                placeholder="请输入验证码"
                value={formData.verifyCode}
                onChange={(val) => handleInputChange("verifyCode", val)}
                className="register-input code-input"
                clearable
              />
              <Button
                type="primary"
                size="small"
                onClick={handleGetCode}
                disabled={codeDisabled}
                className="code-button"
              >
                {codeButtonText}
              </Button>
            </View>

            <View className="input-group">
              <Input
                placeholder="请输入密码（至少6位）"
                value={formData.password}
                onChange={(val) => handleInputChange("password", val)}
                type="password"
                className="register-input"
                clearable
              />
            </View>

            <View className="input-group">
              <Input
                placeholder="请确认密码"
                value={formData.confirmPassword}
                onChange={(val) => handleInputChange("confirmPassword", val)}
                type="password"
                className="register-input"
                clearable
              />
            </View>

            <View className="agreement-group">
              <Checkbox checked={agreed} onChange={setAgreed}>
                我已阅读并同意
                <Text className="agreement-link">《用户协议》</Text>和
                <Text className="agreement-link">《隐私政策》</Text>
              </Checkbox>
            </View>

            <Button
              type="primary"
              onClick={handleRegister}
              className="register-button"
              size="large"
            >
              注册
            </Button>
          </View>
        </View>

        {/* 底部说明 */}
        <View className="register-tips">
          <Text className="tips-text">测试时验证码为：123456</Text>
        </View>
      </View>
    </ConfigProvider>
  );
}

export default Register;
