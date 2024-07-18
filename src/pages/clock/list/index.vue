<template>
  <view class="clock-list">
    <view class="ws-card">

    </view>
    <view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<style lang="scss">
.clock-list{
  .ws-card{
    width: 100%;
    min-height: 100px;
    background: #ccc;
    border-radius: 10px;
  }

}
</style>