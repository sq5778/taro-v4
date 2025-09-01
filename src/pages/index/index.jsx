import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import {
  useLoad,
  useReady,
  useDidShow,
  useError,
  usePullDownRefresh,
  useResize,
} from '@tarojs/taro'
import './index.scss'

export default function Index() {
  // 登录判断
  if (!Taro.getStorageSync('isLogin')) {
    Taro.redirectTo({ url: '/pages/login/login' })
    return null
  }

  useLoad(() => {
    console.log('Page loaded.')
  })

  useDidShow(() => {
    console.log('Page is show.')
  })
  useReady(() => {
    console.log('Page is ready.')
  })
  useError((error) => {
    console.log(error)
  })
  useResize((res) => {
    console.log(res.size.windowWidth)
    console.log(res.size.windowHeight)
  })

  usePullDownRefresh(() => {
    console.log('onPullDownRefresh')
  })

  return (
    <View className="index">
      <Text>Hello world!111211</Text>
      <View
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          textAlign: 'center',
          background: '#fff',
          padding: '10px 0',
        }}
      >
        <Text>tar八日</Text>
      </View>
    </View>
  )
}
