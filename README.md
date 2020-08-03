## 简介
本仓库为个人练习wepy开发小程序demo，仅供学习参考之用。

## 技术栈
- wepy 2.0.0-alpha.16

## 体验项目
### 安装
```
npm install
```
### 启动项目
```
npm run dev
```
### 启动mock server
```
npm run serve
```
启动完成后，使用微信小程序开发ide导入项目即可预览应用；
如在小程序预览无数据，请手动勾选小程序开发ide中的免验证https请求；
### 补充
手机微信小程序预览请修改noteService中的domain为本机ip，并保证手机与本机连接统一网络。

### 学习总结
关于目前感受到的优点：
1. 自动转义大部分html标签，且同时兼容小程序标签，对web开发人员友好；
2. 吸收vue优秀的template语法设计和值检测机制；
3. 全局hook对调试log有一定帮助；
4. 支持vuex；

关于目前踩过的坑：
1. 组件的data，vue是function，wepy文档上是object，实际上function也可以；
2. wepy特有的<config/>不被格式化工具支持，需手动缩进其中的json格式，且为空时会被识别为undefined导致编译报错；
3. 编译提示缩进请使用空格，可参考 https://github.com/Tencent/wepy/issues/2498 ，该issue已半年且未修复；
4. mixin优先级与vue相反，令人非常不解；
5. this.setData在该版本无法兼容，会报错；
6. sourcemap无效；
总结不友好之处如下：
1. 类vue而非vue，大体相同而各处不同使得本熟悉vue的开发者反而容易掉到各种小坑中，使用体验不佳；
2. 当前版本的sourcemap无效，调试依赖编译代码，增加调试成本；
3. 编译报错不明，比如组件编译不成功会提示为组件路径解析异常，目前暂无法解决的编译时缩进报错问题；
4. 文档信息不足，有时候需要在vue和wepy的文档来回切换，甚至官网文档有404；
5. 开发工具支持不佳，本人使用的编辑器intellij idea在借用vue模板高亮规则的情况下勉强使用，无法正常使用prettier插件功能，且变量引用解析也部分失效；

