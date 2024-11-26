<template>
  <div class="main">
    <!-- 文本内容 -->
    <div class="text-content">
      <h1>{{ $t('dreamChase.title') }}</h1>
      <br />
      <h3>
        {{ $t('dreamChase.subTitlePart1') }}<br />
        {{ $t('dreamChase.subTitlePart2') }}
      </h3>
      <br />
      <h4>
        {{ $t('dreamChase.statsPart1') }}<br />
        {{ $t('dreamChase.statsPart2') }}<br />
        {{ $t('dreamChase.statsPart3') }}<br />
        {{ $t('dreamChase.statsPart4') }}
      </h4>
    </div>

    <!-- 四个正方形的小图形 -->
    <div class="square-container">
      <div v-for="(item, index) in gridItems" :key="index" class="grid-item">
        <img :src="item.imgSrc" :alt="item.altText" />
        <p>{{ item.title }}</p>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

// 使用 Vue I18n
const { t } = useI18n();

// 图片和文字内容
const gridItems = [
  {
    imgSrc: "src/img/1.png",
    altText: "Image 1",
    title: "Title 1",
    description: "Description 1",
  },
  {
    imgSrc: "src/img/2.png",
    altText: "Image 2",
    title: "Title 2",
    description: "Description 2",
  },
  {
    imgSrc: "src/img/3.png",
    altText: "Image 3",
    title: "Title 3",
    description: "Description 3",
  },
  {
    imgSrc: "src/img/4.png",
    altText: "Image 4",
    title: "Title 4",
    description: "Description 4",
  },
];
</script>

<style scoped>
/* 主容器 */
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

/* 文本内容 */
.text-content {
  flex: 1 1 50%;
  max-width: 600px;
  margin-right: 20px;
}

.text-content h1 {
  font-size: 2.5rem;
}

.text-content h3 {
  font-size: 2rem;
  margin-top: 20px;
}

.text-content h4 {
  font-size: 1.2rem;
  color: #555;
  margin-top: 20px;
}

/* 正方形容器 */
.square-container {
  flex: 1 1 40%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 300px;
  margin: auto;
  
}

/* 小正方形样式 */
.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #32d7b1;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.grid-item img {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}

.grid-item p {
  margin: 5px 0;
  font-size: 14px;
  color: #333;
  line-height: 1.4;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .text-content {
    flex: 1 1 100%;
    margin-right: 0;
    margin-bottom: 20px;
    text-align: center;
  }

  .square-container {
    flex: 1 1 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .grid-item img {
    width: 50px;
    height: 50px;
  }

  .grid-item p {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .square-container {
    grid-template-columns: repeat(1, 1fr);
  }

  .grid-item {
    padding: 10px;
  }
}
</style>
