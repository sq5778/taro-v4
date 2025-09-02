import React, { useState } from "react";
import { View } from "@tarojs/components";
import {
  Button,
  ConfigProvider,
  TextArea,
  Dialog,
} from "@nutui/nutui-react-taro";
import zhCN from "@nutui/nutui-react-taro/dist/locales/zh-CN";
import "./index.css";
function Index() {
  const [visible, setVisible] = useState(false);
  const translated = {
    welcome: "欢迎使用 NutUI React 开发 Taro 多端项目。",
    open: "点击打开",
  };

  return (
    <ConfigProvider locale={zhCN}>
      <View className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <View className="max-w-md mx-auto">
          {/* 标题区域 */}
          <View className="text-center mb-8">
            <View className="text-2xl font-bold text-gray-800 mb-2">
              Taro + Tailwind CSS
            </View>
            <View className="text-sm text-gray-600">{translated.welcome}</View>
          </View>

          {/* 卡片容器 */}
          <View className="card mb-6">
            <View className="text-lg font-semibold text-gray-700 mb-4">
              组件演示
            </View>

            {/* 按钮区域 */}
            <View className="space-y-3">
              <Button
                type="success"
                onClick={() => setVisible(true)}
                className="w-full"
              >
                {translated.open}
              </Button>

              <Dialog
                visible={visible}
                onConfirm={() => setVisible(false)}
                onCancel={() => setVisible(false)}
              >
                <View className="text-center p-4">
                  <View className="text-lg font-medium text-gray-800 mb-2">
                    欢迎使用 Tailwind CSS!
                  </View>
                  <View className="text-sm text-gray-600">
                    {translated.welcome}
                  </View>
                </View>
              </Dialog>
            </View>
          </View>

          {/* 输入框区域 */}
          <View className="card">
            <View className="text-lg font-semibold text-gray-700 mb-4">
              文本输入
            </View>
            <TextArea
              showCount
              maxLength={20}
              className="w-full"
              placeholder="请输入内容..."
            />
          </View>

          {/* 样式演示 */}
          <View className="mt-6 p-4 bg-white rounded-xl shadow-lg">
            <View className="text-gradient text-xl font-bold text-center mb-3">
              渐变文字效果
            </View>
            <View className="flex justify-center space-x-2">
              <View className="w-4 h-4 bg-red-500 rounded-full"></View>
              <View className="w-4 h-4 bg-yellow-500 rounded-full"></View>
              <View className="w-4 h-4 bg-green-500 rounded-full"></View>
              <View className="w-4 h-4 bg-blue-500 rounded-full"></View>
            </View>
          </View>
        </View>
      </View>
    </ConfigProvider>
  );
}

export default Index;
