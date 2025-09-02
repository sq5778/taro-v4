/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // 自定义颜色
      colors: {
        primary: {
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
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
  // Taro 特定配置
  corePlugins: {
    // 禁用一些在小程序中不支持的功能
    preflight: false, // 禁用默认的 CSS 重置
  },
};
