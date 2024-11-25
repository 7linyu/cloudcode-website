<template>
  <div class="main">
    <div class="text-content">
      <h1>{{ $t('dreamChase.title') }}</h1>
      <br>
      <h3>
        {{ $t('dreamChase.subTitlePart1') }}<br>
        {{ $t('dreamChase.subTitlePart2') }}
      </h3>
      <br>
      <h4>
        {{ $t('dreamChase.statsPart1') }}<br>
        {{ $t('dreamChase.statsPart2') }}<br>
        {{ $t('dreamChase.statsPart3') }}<br>
        {{ $t('dreamChase.statsPart4') }}
      </h4>
    </div>

    <!-- 正方形容器 -->
    <div class="square-container">
      <div class="grid-item green g001">
        <img src="../img/1.png" :alt="$t('dreamChase.altText1')">
        <p>{{ $t('dreamChase.text1') }}</p>
      </div>
      <div class="grid-item yellow g002">
        <img src="../img/2.png" :alt="$t('dreamChase.altText2')">
        <p>{{ $t('dreamChase.text2') }}</p>
      </div>
      <div class="grid-item yellow g003">
        <img src="../img/3.png" :alt="$t('dreamChase.altText3')">
        <p>{{ $t('dreamChase.text3') }}</p>
      </div>
      <div class="grid-item green g004">
        <img src="../img/4.png" :alt="$t('dreamChase.altText4')">
        <p>{{ $t('dreamChase.text4') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

// 使用 Vue I18n
const { t } = useI18n();
</script>

<style scoped>
/* 文本样式 */
body {
  font-family: 'Microsoft YaHei', sans-serif; /* 使用微软雅黑字体 */
}

.text-content h1, .text-content h3, .text-content h4 {
  color: #65A39A; /* 设置标题的颜色 */
}

.text-content h1 {
  font-size: 50px; /* 设置一级标题的大小 */
}

.text-content h3 {
  font-size: 40px; /* 设置三级标题的大小 */
}

.text-content h4 {
  font-size: 20px; /* 设置四级标题的大小 */
}

.main {
  margin-left: 2%;
  display: flex;
  width: 100%;
  padding: 50px;
}

.text-content {
  font-size: 1.5rem;
  flex: 1 1 50%;
  margin-right: 5%;
}

/* 正方形容器 */
.square-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr)); /* 增加每个格子的最小宽度 */
  grid-template-rows: 1fr 1fr;
  gap: 20px; /* 增加间距 */
  aspect-ratio: 1;
  max-width: 700px; /* 调整最大宽度 */
  margin: 0 auto; /* 居中显示 */
}

/* 每个格子的样式 */
.grid-item {
  text-align: center;
  background-color: #f0f0f0;
  padding: 24px; /* 增加内边距 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px; /* 统一圆角处理 */
}

.grid-item img {
  width: 80px; /* 增加图片大小 */
  height: 80px; /* 增加图片大小 */
  margin-bottom: 16px; /* 增加间距 */
}

.grid-item p {
  margin: 0;
  color: #333;
  font-size: 18px; /* 增加字体大小 */
  min-height: 3em; /* 确保有至少三行文本空间 */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: translateY(-60px); /* 向上移动10px */
}

/* 颜色块 */
.yellow {
  background-color: #E9B058;
}

.green {
  background-color: #65A39A;
}

/* 响应式设计 */
@media (max-width: 992px) {
  h1 {
    font-size: 2rem;
  }

  h3,
  h4 {
    font-size: 1.2rem;
  }

  .square-container {
    width: 180px;
  }

  .grid-item img {
    width: 50px;
    height: 50px;
  }

  .grid-item p {
    font-size: 14px;
    min-height: 2.5em;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
  }

  h3,
  h4 {
    font-size: 1rem;
  }

  .square-container {
    width: 160px;
  }

  .grid-item img {
    width: 45px;
    height: 45px;
  }

  .grid-item p {
    font-size: 13px;
    min-height: 2.5em;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }

  h3,
  h4 {
    font-size: 0.9rem;
  }

  .text-content,
  .square-container {
    flex: 1 1 100%;
    margin: 0;
  }

  .square-container {
    width: 120px;
  }

  .grid-item img {
    width: 35px;
    height: 35px;
  }

  .grid-item p {
    font-size: 11px;
    min-height: 2.5em;
  }
}
</style>