#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// 微信开发者工具可能的安装路径
const possiblePaths = [
  "D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat",
];

// 项目配置
const projectPath = path.resolve(__dirname, "../dist/weapp");

function findWechatDevTool() {
  // 首先尝试从环境变量获取
  if (process.env.WECHAT_DEVTOOL_PATH) {
    return process.env.WECHAT_DEVTOOL_PATH;
  }

  // 然后尝试常见路径
  for (const toolPath of possiblePaths) {
    try {
      if (fs.existsSync(toolPath)) {
        return toolPath;
      }
    } catch (error) {
      continue;
    }
  }

  return null;
}

function openWechatDevTool() {
  console.log("🔍 正在查找微信开发者工具...");

  const toolPath = findWechatDevTool();

  if (!toolPath) {
    console.error("❌ 未找到微信开发者工具");
    console.log(
      "📝 请确保微信开发者工具已安装，或设置环境变量 WECHAT_DEVTOOL_PATH"
    );
    console.log(
      '例如: set WECHAT_DEVTOOL_PATH="C:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat"'
    );
    process.exit(1);
  }

  console.log(`✅ 找到微信开发者工具: ${toolPath}`);

  // 检查项目目录是否存在
  if (!fs.existsSync(projectPath)) {
    console.error(`❌ 项目目录不存在: ${projectPath}`);
    console.log("💡 请先执行 npm run build:weapp 构建项目");
    process.exit(1);
  }

  try {
    console.log("🚀 正在打开微信开发者工具...");
    const command = `"${toolPath}" open --project "${projectPath}"`;
    execSync(command, { stdio: "inherit" });
    console.log("✨ 微信开发者工具已启动！");
  } catch (error) {
    console.error("❌ 启动微信开发者工具失败:", error.message);
    console.log("💡 请尝试手动打开微信开发者工具并导入项目目录:");
    console.log(`   ${projectPath}`);
    process.exit(1);
  }
}

openWechatDevTool();
