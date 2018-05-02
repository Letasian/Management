import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './app.vue'
const root=document.createElement('div')
document.body.appendChild(root)
import router from './router/index.js'
Vue.use(ElementUI)
new Vue({
    router,
    render:(h)=>h(App)
}).$mount(root)
