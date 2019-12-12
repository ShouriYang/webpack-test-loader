# webpack-test-loader
##### webpack小demo

```
npm init
```

###### **1）安装项目依赖**

```
npm install webpack webpack-cli webpack-dev-server -D
```

###### 2) 创建config文件，加入enrty和output

```
    entry:{
        app : path.join(__dirname,'src/index.js')
    },
    output:{
        filename: 'bundle.js',
        path: path.join(__dirname,'dist')
    }
```

*path.join(path1，path2，path3.......) 将路径片段使用特定的分隔符连接起来形成路径

*path.resolve([from...],to) 把一个路径或路径片段的序列解析为一个绝对路径。相当于执行cd操作。

如果要用resolve拼接则不用**./**而用**/**



###### 3)  创建src文件夹，并创建**index.js**文件(操作reactDom) 和**index.html**文件(存放根div)还有**App.js**(存放react-component)



###### 4）安装并且配置loader

```
npm install babel-loader -D
npm install --save-dev @babel/core @babel/preset @babel/preset-react
```

webpack.config.js

```
rules:
[
  {
  test: /\.(js|jsx)$/,
  exclude: path.join(__dirname,"node_modules"),
  use: ['babel-loader']
  }, 
]
```

.babelrc:是Babel的配置文件

```
{
    "presets": ["@babel/preset-env","@babel/preset-react"]
}
```

**5) 安装并配置plugin**

```
npm install html-webpack-plugin -D
```

webpack.config.js

```
    plugins:[
        new HtmlPlugin({
            filename: 'index.html',
            templete: path.join(__dirname,'src/index.html')
        })
    ]
```

**6）使用webpack命令打包**

**7）下载热替换插件：**

npm install -g webpack-dev-server 但是实际上还是会刷新页面而且不是热替换

```
    devServer:{
        hot: true,
        host: '0.0.0.0',
        port: '3000',
        overlay: true //在屏幕上打印错误信息
    },
```

下载**react-hot-loader**

```
npm install -D react-hot-loader
```

.babelrc

```
    "plugins": ["react-hot-loader/babel"]
```

app.js

```
import {hot} from 'react-hot-loader/root'
export default hot(App)
```

然后访问0.0.0.0:3000就可以实时修改更新打包的项目了

> Question：怎么解决报错
>
> ```
> React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.
> ```
>
> 官方方法：
>
> ```
> yarn add react-dom@npm:@hot-loader/react-dom
> ```
>
> Question2: 今天因为htmlplugin里面的template参数写成templete，然后在控制台中又没有报错，导致浪费了自己和旁边的学姐的时间，以后出错的时候要先找到是否有低级错误

8）在packet.json里面配置start和切换mode命令

```
  "scripts": {
    "start" : "webpack-dev-server",
    "build:dev" : "webpack --mode=development",
    "bulid:pro" : "webpack --mode=production"
  }
```



