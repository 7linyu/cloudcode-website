<template>
  <div class="main">
    <!-- 第一部分：公共福利部分 -->
    <div class="title1">{{ $t('publicWelfare.title') }}</div>
    <div class="content-container">
      <div class="text-content">
        <div class="subtitle">
          <strong>{{ $t('publicWelfare.subtitle') }}</strong>
        </div>
        <!-- 这里保留第一部分的内容 -->
      </div>
      <img src="../img/0001.png" alt="云萌公益" class="aligned-image">
    </div>

    <!-- 第二部分：新闻报道部分 -->
    <div class="news-report">
      <div class="image-container">
        <img :src="$t('newsReport.imageUrl')" alt="Image Description" class="aligned-image">
      </div>
      <div class="text-container">
        <h1 class="title2">{{ $t('newsReport.title') }}</h1>
        <p class="content">{{ $t('newsReport.content') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
/* 公共样式 */
img {
  height: auto;
  width: 100%;
}

/* 统一图片样式 */
.aligned-image {
  width: 45%;
  height: auto;
  border: 1px solid #65A39A;
  border-radius: 20px; /* 添加圆角 */
  max-width: 100%; /* 确保图片在小屏幕上自适应 */
}

/* 公共福利部分的标题样式 */
.title1 {
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 20px;
  color: #65A39A;
  text-align: center;
  /* 标题居中 */
}

/* 公共福利部分的内容容器 */
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  gap: 10px;
  flex-wrap: wrap;
}

.content-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap; /* 添加换行 */
}

.text-content {
  flex: 1;
  color: #65A39A; /* 设置字体颜色 */
  max-width: 50%; /* 确保文本内容不超过一半宽度 */
  font-size: 2em; /* 使用相对单位设置字体大小 */
  font-weight: normal; /* 确保字体不加粗 */
}

/* 新闻报道部分标题样式 */
.title2 {
  font-size: 2em;
  color: #65A39A;
  margin-top: 0;
}

/* 新闻报道部分样式 */
.news-report {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  padding: 20px;
  background-color: white;
  overflow: hidden;
  flex-wrap: wrap; /* 添加换行 */
}

.section-title {
  margin-left: 5%;
  text-align: left;
  font-size: 1.5em;
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
}

.image-container {
  flex-basis: 50%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  /* width: 120%; */
  max-width: 100%; /* 确保图片在小屏幕上自适应 */
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.text-container {
  flex-basis: 42%;
  padding: 2px;
  background-color: #ffffff;
  border-radius: 200px;
  max-width: 100%; /* 确保文本容器在小屏幕上自适应 */
  color: #65A39A; /* 设置字体颜色 */
  font-size: 1em; /* 使用相对单位设置字体大小 */

}

.content {
  font-size: 1em;
  line-height: 1.5;
  color: #65A39A;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .title1 {
    font-size: 3.0rem;
  }

  .title2 {
    font-size: 1.8rem;
  }

  .subtitle,
  .description {
    font-size: 1.4rem;
    color: #65A39A;
  }

  .text-content {
    max-width: 100%; /* 文本内容占满整行 */
  }

  .aligned-image {
    width: 100%; /* 图片占满整行 */
  }

  .news-report {
    flex-direction: column-reverse; /* 在小屏幕上文字在图片上方 */
  }

  .image-container,
  .text-container {
    flex-basis: 100%; /* 图片和文本容器占满整行 */
  }
}

@media (max-width: 768px) {
  .title1 {
    font-size: 2rem;
  }

  .title2 {
    font-size: 1.6rem;
  }

  .subtitle,
  .description {
    font-size: 1.2rem;
  }

  .main {
    flex-direction: column;
    gap: 10px;
  }

  .text-content {
    max-width: 100%; /* 文本内容占满整行 */
  }

  .aligned-image {
    width: 100%; /* 图片占满整行 */
  }

  .news-report {
    flex-direction: column-reverse; /* 在小屏幕上文字在图片上方 */
  }

  .image-container,
  .text-container {
    flex-basis: 100%; /* 图片和文本容器占满整行 */
  }

  .text-container {
    padding: 15px; /* 减少内边距以适应较小的屏幕 */
  }

  .content {
    font-size: 0.9em; /* 减小字体大小以适应较小的屏幕 */
  }
}

@media (max-width: 480px) {
  .title1 {
    font-size: 1.8rem;
  }

  .title2 {
    font-size: 1.4rem;
  }

  .subtitle,
  .description {
    font-size: 1rem;
  }

  .text-content {
    max-width: 100%; /* 文本内容占满整行 */
  }

  .aligned-image {
    width: 100%; /* 图片占满整行 */
  }

  .news-report {
    flex-direction: column-reverse; /* 在小屏幕上文字在图片上方 */
  }

  .image-container,
  .text-container {
    flex-basis: 100%; /* 图片和文本容器占满整行 */
  }

  .text-container {
    padding: 10px; /* 减少内边距以适应更小的屏幕 */
  }

  .content {
    font-size: 0.8em; /* 进一步减小字体大小以适应更小的屏幕 */
  }
}
</style>