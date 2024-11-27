<template>
  <div class="main">
    <!-- 第一部分：公共福利部分 -->
    <div class="title1">{{ $t('publicWelfare.title') }}</div>
    <div class="content-container">
      <img src="../img/8.jpeg" alt="云萌公益" class="align-left">
      <div class="text-content">
        <div class="subtitle">
          <strong>{{ $t('publicWelfare.subtitle') }}</strong>
        </div>
        <!-- 这里保留第一部分的内容 -->
      </div>
    </div>

    <!-- 第二部分：新闻报道部分 -->
    <div class="news-report">
      <div class="image-container">
        <img :src="imageUrl" alt="Image Description">
      </div>
      <div class="text-container">
        <h2 class="section-title">新闻报道</h2>
        <h1 class="title2">{{ title }}</h1>
        <p class="content">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// 第二部分的内容
const imageUrl = 'src/img/9.jpg';
const title = '成都东软学院公益项目在澳上线，代表团出席发布会并开展访企拓岗专项调研';
const content = '9月26日，成都东软学院与澳门初创智库协会携手打造的免费线上编程学习平台——Mcode公益项目在澳门成功上线。成都东软学院副校长张兵、计算机与软件学院副院长赵荷、云萌工作室指导教师袁睿及项目组成员代表出席会议。';
</script>

<style scoped>
/* 公共样式 */
img {
  height: auto;
  width: 100%;
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
}

.text-content {
  flex: 1;
}

.align-left {
  float: left;
  width: 50%;
  height: auto;
  border: 1px solid #65A39A;
}

/* 新闻报道部分标题样式 */
.title2 {
  font-size: 2em;
  color: #ffffff;
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
}

.section-title {
  margin-left: 5%;
  text-align: left;
  font-size: 1.5em;
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
}

.image-container {
  flex-basis: 42%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background-color: #65A39A;
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.text-container {
  flex-basis: 42%;
  padding: 20px;
  background-color: #65A39A;
  border-radius: 20px;
}

.content {
  font-size: 1em;
  line-height: 1.5;
  color: rgb(255, 255, 255);
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
}
</style>
