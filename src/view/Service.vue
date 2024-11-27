<template>
  <div class="background">
    <!-- 导航栏 -->
    <div class="navbar">
      <img src="../img/logo.png" alt="logo" class="logo">
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

    <!-- 轮播图 -->
    <div class="carousel-container">
      <transition-group name="fade" tag="div">
        <div v-for="(item, index) in items" :key="index" v-show="currentSlide === index" class="carousel-slide">
          <img v-if="item.type === 'image'" :src="item.src" alt="slide image" class="carousel-image" />
          <video v-else autoplay loop muted playsinline class="carousel-video">
            <source :src="item.src" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </transition-group>
    </div>

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

    <!-- Footer 组件 -->
     <div class="Footer">
      <Footer />
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

// 轮播图数据
const items = [
  // { type: 'image', src: 'src/img/cloud.jpg' },
  // { type: 'image', src: 'src/img/9.png' },
  // { type: 'image', src: 'src/img/8.jpeg' },
  { type: 'video', src: 'src/img/mv.mp4' }
];

// 当前幻灯片索引
const currentSlide = ref(0);

// 视频播放器引用
const videoPlayer = ref(null);

// 控制是否自动切换
let autoSwitchEnabled = true;

// 处理视频结束事件
const handleVideoEnded = () => {
  if (autoSwitchEnabled) {
    nextSlide();
  }
};

// 下一张幻灯片
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % items.length;
};

// 自动切换幻灯片
const startCarousel = () => {
  setInterval(() => {
    if (items[currentSlide.value].type !== 'video' && autoSwitchEnabled) {
      nextSlide();
    }
  }, 3000); // 每隔3秒切换一次
};

// 启动轮播
onMounted(startCarousel);


// 导入组件
import PublicWelfareSector from './PublicWelfareSector.vue';
import DreamChaseProject from './DreamChaseProject.vue';
import CoreMembers from './CoreMembers.vue';
import ApplyCooperation from './ApplyCooperation.vue';
import Footer from './Footer.vue';
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
}

.navbar-right a:hover {
  color: rgb(233, 171, 80);
  font-weight: bold;
  text-decoration: underline;
}

.navbar-right a.active {
  font-weight: bold;
  text-decoration: underline;
  color: rgb(233, 171, 80);
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

/* 轮播图容器 */
.carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  aspect-ratio: 16 / 9;
}

/* 幻灯片样式 */
.carousel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* 图片样式 */
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 视频样式 */
.carousel-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 内容区域 */
.content {
  flex: 1;
  padding: 15px;
  margin-top: 15px;
  background-color: #ffffff;
  border-radius: 8px;
}

/* 手机端内容优化 */
@media (max-width: 576px) {
  .content {
    padding: 10px;
    margin-top: 10px;
  }

  .navbar {
    font-size: 14px;
    padding: 8px 10px;
  }

  .navbar-left,
  .navbar-right {
    font-size: 12px;
  }

  .carousel-container {
    aspect-ratio: 4 / 3;
  }
}

/* 过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>



