import Barrage from './src/index.vue';

Barrage.install = function (Vue) {
  Vue.component(Barrage.name, Barrage);
};

export default Barrage;