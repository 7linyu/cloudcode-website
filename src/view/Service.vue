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

    <!-- 响应式背景图 -->
    <div class="hero-image"></div>
    <!-- PublicWelfareSector 组件 -->
     <div class="content">
      <PublicWelfareSector />
    </div>
    <!-- DreamChaseProject 组件 -->
    <div class="content">
      <DreamChaseProject />
    </div>

    <!-- CoreMembers 组件 -->
    <div class="content">
      <CoreMembers />
    </div>
    <!-- ApplyCooperation 组件 -->
     <div class="content">
      <ApplyCooperation />
    </div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue';
// import DreamChaseProject from './DreamChaseProject.vue'; // 确保路径正确
import DreamChaseProject from './DreamchaseProject.vue';

import CoreMembers from './CoreMembers.vue'; // 调整路径以适应实际项目结构
import ApplyCooperation from './ApplyCooperation.vue';

import PublicWelfareSector from './PublicWelfareSector.vue';
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


/* 响应式背景图 */
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
  padding: 10px 15px;
  /* 减少间距 */
  background-color: #ffffff;
  color: #65A49B;
  font-size: 16px;
  font-weight: bold;
  height: 60px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-left {
  font-size: 16px;
  /* 手机端字体稍微缩小 */
  color: #65A49B;
  text-align: left;
}

.navbar-right {
  font-size: 14px;
  color: #65A49B;
  text-align: right;
}

/* logo 图片 */
.logo {
  max-width: 40px;
  /* 减少尺寸以适应小屏幕 */
  max-height: 40px;
  margin-right: 10px;
}

/* 绿色盒子 */
.green-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  /* 减小高度 */
  background-color: #65A49B;
  z-index: 1000;
}

/* 响应式背景图 */
.hero-image {
  width: 100%;
  background-image: url("../assets/img/cloud.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  aspect-ratio: 16 / 9;
  /* 维持宽高比例 */
  min-height: 300px;
  /* 手机端最小高度 */
}

@media (max-width: 768px) {
  .hero-image {
    aspect-ratio: 4 / 3;
    min-height: 250px;
    /* 适应更小屏幕 */
  }
}

@media (max-width: 576px) {
  .hero-image {
    aspect-ratio: 1 / 1;
    min-height: 200px;
  }
}

/* 内容区域 */
.content {
  flex: 1;
  padding: 15px;
  /* 减少间距 */
  margin-top: 15px;
  background-color: #ffffff;
  /* box-shadow: 0px 2px 4px rgba(15, 189, 128, 0.046); */
  border-radius: 8px;
}

/* 手机端内容优化 */
@media (max-width: 576px) {
  .content {
    padding: 10px;
    /* 更紧凑的内容排布 */
    margin-top: 10px;
  }

  .navbar {
    font-size: 14px;
    /* 导航栏字体更小 */
    padding: 8px 10px;
  }

  .navbar-left,
  .navbar-right {
    font-size: 12px;
    /* 字体适配手机端 */
  }
}


/* 内容区域
.content {
  flex: 1;
  padding: 20px;
  margin-top: 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
} */
</style>






