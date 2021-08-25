import { createApp } from 'vue'
import App from './App.vue'
import {
    ElForm,
    ElFormItem,
    ElSelect,
    ElOption,
    ElInput,
    ElBreadcrumbItem,
    ElBreadcrumb,
    ElPagination,
    ElCard,
    ElCarousel,
    ElCarouselItem,
    ElSpace,
    ElSubmenu,
    ElMenu,
    ElMenuItem,
    ElButton,
    ElRow,
    ElCol,
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
    ElImage,
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification
} from 'element-plus';

const arr = [
    ElForm,
    ElFormItem,
    ElSelect,
    ElOption,
    ElInput,
    ElBreadcrumbItem,
    ElBreadcrumb,
    ElPagination,
    ElCard,
    ElCarousel,
    ElCarouselItem,
    ElSpace,
    ElSubmenu,
    ElMenu,
    ElMenuItem,
    ElButton,
    ElRow,
    ElCol,
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
    ElImage
]

const app = createApp(App)
arr.forEach(el => {
    app.component(el.name, el)
})

const plugins = [
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
]
plugins.forEach(plugin => {
    app.use(plugin)
})

export default app