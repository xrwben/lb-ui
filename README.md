# webpack4-vue打包单页应用的基本配置

##### 一、安装webpack
   
   + 全局安装 webpack webpack-cli
   
##### 二、初始化项目

   + git init
   + 安装webpack、webpack-dev-server、webpack-merge
   + 配置好本地开发服务webpack-dev-server、配置好package.json启动
   
##### 三、html模板和清空dist

   + html-webpack-plugin
   + clean-webpack-plugin
   
##### 四、js使用babel转码

   + ~~babel-core、babel-loader~~
   + ~~babel-preset-env、babel-plugin-transform-runtime、babel-preset-stage-2~~
   + 当babel升级到7版本后,包名变成了@babel/core、@babel/preset-env

##### 五、（css|sass|less）文件打包、添加前缀、分离、压缩

   + css-loader、style-loader
   + node-sass、sass-loader
   + postcss-loader、autoprefixer
   + mini-css-extract-plugin
   + optimize-css-assets-webpack-plugin
   
##### 六、图片字体等资源打包

   + url-loader

##### 七、html中的图片打包

   + html-loader
   tips: 这个插件会和html-webpack-plugin冲突，造成无法解析html模板参数

##### 八、热更新

   + 配置devServer


##### 九、分离不常变化的文件 比如node_modules引用的第三方库打包成一个单独的js文件

   + uglifyjs-webpack-plugin
   
##### 十、安装vue或react

   + vue、vue-loader、vue-template-compiler
   + react、react-dom、babel-preset-react...
   
##### 十一、eslint代码检测工具

   + eslint：代码检测核心库，然后新建.eslint.js文件去配置
   + babel-eslint 检测babel编译后的代码
   + eslint-config-规则名：此脚手架配置的是eslint-config-bitpower，它是基于airbnb配置，然后根据自己习惯自定义的编码规则插件
   
##### 十二、打包分析

   + webpack-bundle-analyzer
   
   
>这些配置大概满足的开发的需求，如果有特殊需求可以修改配置

------

**使用方式：**

   + git clone https://github.com/xrwben/webpack4-vue.git
   
   + npm install 
   
   + 开发：npm run dev 
   
   + 打包： npm run build
 
 
 
