import ScrollBar from './src/index.vue';

ScrollBar.install = function (Vue) {
  Vue.component(ScrollBar.name, ScrollBar);
};

export default ScrollBar;