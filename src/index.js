import Loading from '../packages/loading/index.js';
import ScrollBar from '../packages/scrollbar/index.js';
import LoopScroll from '../packages/loopscroll/index.js';
import Barrage from '../packages/barrage/index.js';

const components = [
  Loading,
  ScrollBar,
  LoopScroll,
  Barrage
];

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Loading,
  ScrollBar,
  LoopScroll,
  Barrage
};