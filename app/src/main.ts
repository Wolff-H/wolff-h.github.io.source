// 1、语言基础，框架
import { createApp } from "vue"
import ElementPlus from "element-plus"
import InlineSVG from "vue-inline-svg"
// import HighlightJS from "highlight.js"

// 2、类库

// 3、逻辑代码(一般是模块)
import App from "./App.vue"
import store from "./core/store"
import router from "./core/router"

// 4、工具代码（一般是工具库）

// 5、样式
import "./assets/stylesheets/element-plus-customized/index.scss"
import "./assets/stylesheets/element-plus-override/index.styl"
import "highlight.js/styles/atom-one-light.css"
import "@icon-park/vue-next/styles/index.css"

/**********************************************************************************************************************/

const app = createApp(App)

app
    .component("inline-svg", InlineSVG)
    .use(ElementPlus)
    .use(router)
    .use(store)
    // .use(HighlightJS.vuePlugin)
    .mount('body')
