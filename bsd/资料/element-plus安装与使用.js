//cnpm install element-plus --save

//-------------------------全局引用方式-------------------------------
//main.js
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
//...
app.use(router).use(store).use(ElementPlus).mount('#app')

//------------------------------部分引用方式--------------------------------------
//1、cnpm install babel-plugin-import -D
//2、 修改babel.config.js
module.exports = {
    //...,
    plugins: [
        [
            "import",
            {
                libraryName: 'element-plus',
                customStyleName: (name) => {
                    return `element-plus/lib/theme-chalk/${name}.css`;
                },
            },
        ],
    ],
};
//3、main.js 中添加以下内容：
//...
import 'element-plus/lib/theme-chalk/base.css'
import { ElButton, ElRow } from 'element-plus';
//...
app.component(ElButton.name, ElButton);
app.component(ElRow.name, ElRow);
//...

//----------------------------组件里使用------------------------------------------
`<template>
    <div>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
    </div>
  </template>`