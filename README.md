# Stylus-Playground

> Stylus environment for practice and testing.

用于实践和测试 Stylus 的简易开发环境。

## 背景

Stylus 是一款 CSS 预处理器，与 Sass 和 Less 相比，Stylus 更像是一门编程语言，功能强大，语法灵活。同时，Stylus 完全由 JavaScript 实现，对 Node.js 工具链极为友好。

## 使用方法

> **注意**：以下使用方法可用，但将来有可能会有变化。建议你在升级之后重新阅读 README。

### 如何上手

0. 把这个 repo 克隆到你本地的工作目录下，安装必要的依赖：

	```sh
	$ git clone https://github.com/cssmagic/stylus-playground.git
	$ cd stylus-playground
	$ npm install
	```

0. 运行以下命令启动服务（请不要关闭终端窗口）：

	```sh
	$ npm start
	```

	此时你的默认浏览器会自动打开 `index.html` 页面。

0. 编辑 `src/index.html` 和 `src/css/index.styl` 文件，每次保存时浏览器都会自动更新，无需手动刷新。

	> **注意**：强烈建议你新开一个开发分支，随便折腾无压力。

0. 如果需要终止服务，在终端窗口按 `Ctrl + C` 即可。

### 如何升级

> **注意**：在升级之前需要先终止服务。升级后请再次启动服务。

* 如果你写的代码没有保留价值，直接删掉 `stylus-playground` 目录，然后重新走一遍上述 “如何上手” 步骤。
	
* 如果想保留你在开发分支上写的代码，则可以先切回 `master` 分支，拉取最新代码，然后 rebase 你的开发分支即可。

## 鸣谢

* [Gulp 4](https://github.com/gulpjs/gulp/tree/4.0)：任务调度。
* [gulp-stylus](https://github.com/stevelacy/gulp-stylus)：Stylus 编译。
* [BrowserSync](https://www.browsersync.io/)：浏览器自动刷新服务。
* [Normalize.css](https://github.com/necolas/normalize.css)：消灭各大浏览器默认样式的缺陷和差异。
* [Zero](https://github.com/CMUI/zero)：CSS reset。
* [Autoprefixer](https://github.com/postcss/autoprefixer)：为 CSS 代码添加浏览器前缀。

***

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
