import { createApp } from 'vue'
import './app.scss'

const App = createApp({
  beforeCreate(){
    console.log('app beforeCreate');
  },
  created(){
    console.log('app created');
  },
  beforeMount(){
    console.log('app beforeMount');
  },
  // 可以使用所有的 Vue 生命周期方法
  mounted () {
    console.log('app mounted');
  },

  // 对应 onLaunch
  onLaunch () {
    console.log('app onLaunch');
  },
  onLoad(){
    console.log('app onLoad');
  },

  // 对应 onShow
  onShow (options) {
    console.log('app onShow');
  },

  // 对应 onHide
  onHide () {
    console.log('app onHide');
  },
})

export default App
