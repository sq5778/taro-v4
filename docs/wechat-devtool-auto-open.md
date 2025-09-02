# 自动打开微信开发者工具

本项目已配置了构建完成后自动打开微信开发者工具的功能。

## 使用方法

### 方法一：构建并自动打开微信开发者工具

```bash
npm run build:weapp:open
```

### 方法二：分步执行

```bash
# 1. 先构建项目
npm run build:weapp

# 2. 然后打开微信开发者工具
npm run open:weapp
```

## 配置说明

脚本会自动查找微信开发者工具的安装路径，支持以下常见路径：

- `D:\Program Files (x86)\Tencent\微信web开发者工具\cli.bat`
- `C:\Program Files\Tencent\微信web开发者工具\cli.bat`
- `%USERPROFILE%\AppData\Local\微信web开发者工具\cli.bat`

### 自定义微信开发者工具路径

如果微信开发者工具安装在其他位置，可以通过设置环境变量来指定：

**PowerShell:**

```powershell
$env:WECHAT_DEVTOOL_PATH="你的微信开发者工具路径\cli.bat"
npm run build:weapp:open
```

**CMD:**

```cmd
set WECHAT_DEVTOOL_PATH="你的微信开发者工具路径\cli.bat"
npm run build:weapp:open
```

**永久设置环境变量:**

1. 右键"此电脑" → "属性" → "高级系统设置" → "环境变量"
2. 在"用户变量"中新建变量：
   - 变量名：`WECHAT_DEVTOOL_PATH`
   - 变量值：你的微信开发者工具 cli.bat 的完整路径

## 故障排除

### 问题：找不到微信开发者工具

**解决方案：**

1. 确认微信开发者工具已正确安装
2. 检查工具路径是否正确
3. 设置正确的环境变量 `WECHAT_DEVTOOL_PATH`

### 问题：项目目录不存在

**解决方案：**

1. 确保先执行了 `npm run build:weapp`
2. 检查 `dist/weapp` 目录是否存在

### 问题：权限不足

**解决方案：**

1. 以管理员身份运行命令行工具
2. 或者手动打开微信开发者工具并导入项目

## 手动导入项目

如果自动打开失败，可以手动在微信开发者工具中导入项目：

1. 打开微信开发者工具
2. 点击"导入项目"
3. 选择项目目录：`d:\study\taro\taro-v4\dist\weapp`
4. 填写 AppID（可使用测试号：`touristappid`）
