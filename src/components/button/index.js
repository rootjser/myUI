import myButton from "./button.vue";

myButton.install = function (Vue) {
  Vue.component("myButton", myButton);
};

export default myButton;
