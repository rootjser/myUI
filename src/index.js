import myButton from "./components/button/index.js";
import mySelect from "./components/select/index.js";

function install(Vue) {
  //外部的Vue.use(MyLib)会执行该方法，完成组件的全局注册。
  Vue.use(myButton);
  Vue.use(mySelect);
}

if (window && window.Vue) {
  //通过`script`标签引入的情况，在组件内部完成组件注册。
  Vue.use(install);
}

export default {
  install,
  myButton,
  mySelect,
};
