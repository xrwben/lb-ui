import LoopScroll from './src/index.vue';

LoopScroll.install = function (Vue) {
  Vue.component(LoopScroll.name, LoopScroll);
};

export default LoopScroll;