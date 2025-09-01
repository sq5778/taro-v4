import { View, Text } from '@tarojs/components'
import { Input, Button, Form, Toast } from '@nutui/nutui-react-taro'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './register.scss'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    if (username && password) {
      Toast.show({ content: '注册成功', type: 'success', duration: 2 })
      setTimeout(() => {
        Taro.redirectTo({ url: '/pages/login/login' })
      }, 1200)
    } else {
      Toast.show({ content: '请输入账号和密码', type: 'fail', duration: 2 })
    }
  }

  return (
    <View className="register">
      <Text className="title">注册</Text>
      <Form>
        <Input
          label="用户名"
          placeholder="请输入用户名"
          value={username}
          onChange={setUsername}
        />
        <Input
          label="密码"
          type="password"
          placeholder="请输入密码"
          value={password}
          onChange={setPassword}
        />
        <Button
          type="primary"
          block
          onClick={handleRegister}
          className="register-btn"
        >
          注册
        </Button>
        <Button
          block
          plain
          onClick={() => Taro.redirectTo({ url: '/pages/login/login' })}
          className="login-btn"
        >
          返回登录
        </Button>
      </Form>
    </View>
  )
}
