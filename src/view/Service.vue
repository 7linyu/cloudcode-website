<template>
  <div class="background">
    <!-- 导航栏 -->
    <div class="navbar">
      <img src="src\img\logo.png" alt="logo" class="logo">
      <div class="navbar-left">
        {{ $t('navbar.title') }}
      </div>
      <div class="navbar-right">
        <a href="#" @click.prevent="setLanguage('zh-CN')">简体中文</a> /
        <a href="#" @click.prevent="setLanguage('zh-TW')">繁体中文</a> /
        <a href="#" @click.prevent="setLanguage('en')">English</a>
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
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

// 使用 Vue I18n
const { t, locale } = useI18n();

// 切换语言函数
const setLanguage = (lang) => {
  locale.value = lang;
};

// 初始化逻辑
onMounted(() => {
  // 根据用户的浏览器语言设置默认语言
  const userLang = navigator.language || navigator.userLanguage;
  if (['zh-CN', 'zh-TW', 'en'].includes(userLang)) {
    locale.value = userLang;
  } else {
    locale.value = 'en'; // 默认英文
  }
});

// 导入组件
import PublicWelfareSector from './PublicWelfareSector.vue';
import DreamChaseProject from './DreamChaseProject.vue';
import CoreMembers from './CoreMembers.vue';
import ApplyCooperation from './ApplyCooperation.vue';
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
  box-shadow: 0px 2px 4px #65A49B(0, 0, 0, 0.5);
  flex-wrap: wrap;
}

/* 导航栏左侧 */
.navbar-left {
  font-size: 18px;
  color: #65A49B;
  flex-grow: 1;
  text-align: left;
  font-weight: bolder;
}

/* 导航栏右侧 */
.navbar-right {
  font-size: 14px;
  font-weight: bold;
  color: #65A49B;
  flex-grow: 1;
  text-align: right;
  white-space: nowrap;

}

.navbar-right a {
  color: #65A49B;
  text-decoration: none;
  margin: 0 5px;
  cursor: pointer;
  transition: color 0.3s ease;
  /* 添加平滑过渡效果 */
}

.navbar-right a:hover {
  color: rgb(233, 171, 80);
  /* 鼠标悬停时的颜色 */
  /* text-decoration: underline; */
  font-weight: bold;
  /* 加粗 */
  text-decoration: underline;
}

.navbar-right a.active {
  font-weight: bold;
  text-decoration: underline;
  color: rgb(233, 171, 80);
  /* 激活状态的颜色 */
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
  background-image: url("src/img/cloud.jpg");
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
