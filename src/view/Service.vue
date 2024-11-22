<template>
  <div class="background">
    <!-- 导航栏 -->
    <div class="navbar">
      <img src="../assets/img/logo.png" alt="logo" class="logo">
      <div class="navbar-left">
        云萌工作室
      </div>
      <div class="navbar-right">
        简体中文 / 繁體中文 / English
      </div>
    </div>

    <!-- 固定绿色盒子 -->
    <div class="green-box"></div>

    <!-- 背景图 -->
    <div class="hero-image"></div>

    <!-- DreamChaseProject 组件 -->
    <div class="content">
      <DreamChaseProject />
    </div>

    <!-- CoreMembers 组件 -->
    <div class="content">
      <CoreMembers />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import DreamChaseProject from './DreamChaseProject.vue'; // 调整路径以适应实际项目结构
import CoreMembers from './CoreMembers.vue'; // 调整路径以适应实际项目结构

onMounted(() => {
  // 初始化逻辑（如动画）
});
</script>

<style scoped>
/* 背景容器 */
.background {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  background-color: #f8f9fa;
}

/* 导航栏样式 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffffff;
  color: #65A49B;
  font-size: 16px;
  font-weight: bold;
  height: 60px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
}

/* 导航栏左侧 */
.navbar-left {
  font-size: 18px;
  color: #65A49B;
  flex-grow: 1;
  text-align: left;
}

/* 导航栏右侧 */
.navbar-right {
  font-size: 14px;
  color: #65A49B;
  flex-grow: 1;
  text-align: right;
  white-space: nowrap;
}

/* logo 图片 */
.logo {
  max-width: 50px;
  max-height: 50px;
  width: auto;
  height: auto;
  margin-right: 10px;
}

/* 绿色盒子 */
.green-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background-color: #65A49B;
  z-index: 1000;
}

/* 背景图 */
.hero-image {
  width: 100%;
  height: 800px;
  background-image: url("../assets/img/cloud.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* 内容区域 */
.content {
  flex: 1;
  padding: 20px;
  margin-top: 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
