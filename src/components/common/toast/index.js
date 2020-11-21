import Toast from "./Toast"
const obj = {}
obj.install = function(Vue) {
  // 创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 创建组件实例
  const toast = new toastConstructor()
  // 将组件对象挂载到某一个元素上面
  toast.$mount(document.createElement('div'))
  // 添加到body当中去
  document.body.appendChild(toast.$el)
  // 挂载到vue原型上
  Vue.prototype.$toast = toast
}
export default obj