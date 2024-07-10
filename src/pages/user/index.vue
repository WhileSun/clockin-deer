<template>
  <view class="demo">
    <view>
      欢迎使用 NutUI 开发 Taro 多端项目user <Dongdong />
    </view>
    <view>{{ count }}</view>
    <view>
      <nut-button type="primary" @click="handleClick">
        Count++
      </nut-button>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted} from 'vue';
import {useLoad,useDidShow,useDidHide,useLaunch,useReady} from '@tarojs/taro';
import { Dongdong } from '@nutui/icons-vue-taro';

const count = ref(0);

const handleClick = () => {
  count.value++;
};
// mounted(()=>{
//   console.log('page mounted');
// });


useLoad(() => {
  console.log('page onLoad')
})
onMounted(()=>{
  console.log('page onMounted')
})
useReady(()=>{
  console.log('page onReady')
})

useDidShow(()=>{
  console.log('page onShow')
})

useLaunch(()=>{
  console.log('page onLaunch')
})

</script>

<style>
.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>