/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // 自定义颜色
      colors: {
        primary: {
          DEFAULT: "#3b82f6", // 添加默认值，这样 text-primary 就会使用这个值
          50: "#eff6ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      // 自定义字体
      fontFamily: {
        sans: [
          "PingFang SC",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      // 自定义间距
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      // 自定义屏幕断点
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [
    // 移除可能导致兼容性问题的插件
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
  ],
  // Taro 小程序特定配置
  corePlugins: {
    // 禁用在小程序中不支持的功能
    preflight: false, // 禁用默认的 CSS 重置
    backdropBlur: false, // 禁用 backdrop 相关功能
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    backdropFilter: false, // 添加这个
    // 禁用输入相关功能
    appearance: false,
    // 禁用其他不兼容的功能
    container: false, // 禁用容器功能
    userSelect: false,
  },
  // 微信小程序兼容性设置
  important: false, // 避免使用 !important
  separator: ":", // 使用默认分隔符
};
