import { View, Text } from '@tarojs/components'
import { Input, Button, Form, Toast, Cell } from '@nutui/nutui-react-taro'
import { Jd } from '@nutui/icons-react-taro'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './login.scss'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (username && password) {
      Taro.setStorageSync('isLogin', true)
      setTimeout(() => {
        Taro.redirectTo({ url: '/pages/index/index' })
      }, 1200)
    } else {
      Toast.show('test', {
        title: '请输入账号和密码',
        content: '',
        duration: 2,
        icon: <Jd color="#ffffff" />,
        lockScroll: true,
        type: 'fail',
        onClose: () => {
          console.log('close')
        },
      })
      //   Toast.show({ content: '请输入账号和密码', type: 'fail', duration: 2 })
    }
  }

  return (
    <View className="login">
      <Toast id="test" />
      <Cell
        title="函数调用"
        onClick={() => {
          Toast.show('test', {
            title: '函数调用函数调用',
            content: '函数调用函数调用函数调用函数调用函数',
            duration: 2,
            icon: <Jd color="#ffffff" />,
            lockScroll: true,
            onClose: () => {
              console.log('close')
            },
          })
        }}
      />
      <Text className="title">登录</Text>
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
          onClick={handleLogin}
          className="login-btn"
        >
          登录
        </Button>
        <Button
          block
          plain
          onClick={() => Taro.redirectTo({ url: '/pages/register/register' })}
          className="register-btn"
        >
          注册
        </Button>
      </Form>
    </View>
  )
}
