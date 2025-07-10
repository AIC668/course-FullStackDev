# 使用 Node.js 13 作为基础镜像
FROM node:13

# 设置工作目录
WORKDIR /app

# 拷贝 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 拷贝全部代码
COPY . .

# 对外暴露端口
EXPOSE 3000

# 启动 React 应用
CMD ["npm", "start"]
