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
      <div v-for="(item, index) in gridItems" :key="index" :class="['grid-item', `grid-item-${index + 1}`]">
        <img :src="item.imgSrc" :alt="item.altText" />
        <p>{{ $t(item.title) }}</p>
        <p>{{ $t(item.description) }}</p>
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
    title: 'dreamChase.text1',
    description: 'dreamChase.statsPart2'
  },
  {
    imgSrc: "src/img/2.png",
    altText: "Image 2",
    title: 'dreamChase.text2',
    description: 'dreamChase.statsPart1'
  },
  {
    imgSrc: "src/img/3.png",
    altText: "Image 3",
    title: 'dreamChase.text3',
    description: 'dreamChase.statsPart3'
  },
  {
    imgSrc: "src/img/4.png",
    altText: "Image 4",
    title: 'dreamChase.text4',
    description: 'dreamChase.statsPart4'
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
  margin-left: 5%;
}

.text-content h1 {
  color: #65A39A;
  font-weight: bold;
  font-size: 40px;
}

.text-content h3 {
  font-size: 20px;
  color: #65A39A;
  /* margin-top: 20px; */
}

.text-content h4 {
  color: #65A39A;
  font-size: 15px;
  /* margin-top: 20px; */
}

/* 正方形容器 */
.square-container {
  flex: 1 1 40%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 300px;
  margin-right: 14%;
  /* border-radius: 5px; */
}

/* 通用小正方形样式 */
.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(107, 212, 179);
  /* border-radius: 8px; */
  padding: 16px;
  text-align: center;
}

.grid-item img {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}

.grid-item p {
  margin: 5px 0;
  font-size: 14px;
  color: #ffffff;
  line-height: 1.4;
}

/* 单独小正方体样式 */
.grid-item-1 {
  background-color: #65A39A;
  border-top-left-radius: 5px;
}

.grid-item-2 {
  background-color: #E9AB50;
  border-top-right-radius: 5px
}

.grid-item-3 {
  background-color: #E9AB50;
  border-bottom-left-radius: 5px;
}

.grid-item-4 {
  background-color: #65A39A;
  border-bottom-right-radius: 5px;
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
