import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import './home/assets/css/bootstrap.css';
import './home/assets/css/style.css';
import './home/assets/css/shortcodes.css';
import './home/assets/css/font-swesome.css';
import './home/assets/js/jquery.min.js';
import './home/assets/js/bootstrap.min.js';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VideoPlayer from 'vue-video-player'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.prototype.HOST='/api'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
