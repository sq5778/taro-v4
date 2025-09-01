import { useLaunch, usePageNotFound, useUnhandledRejection } from '@tarojs/taro'

import './app.scss'
import '@nutui/nutui-react-taro/dist/style.css'

function App({ children }) {
  useLaunch(() => {
    console.log('App launched.')
  })
  usePageNotFound((res) => {
    Taro.redirectTo({
      url: 'pages/...',
    }) // 如果是 tabbar 页面，请使用 Taro.switchTab
  })
  useUnhandledRejection((res) => {
    console.log(res.reason, res.promise)
  })

  // children 是将要会渲染的页面
  return children
}

export default App
