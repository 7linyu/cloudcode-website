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
      <img src="../img/0001.png" alt="云萌公益" class="align-right">
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
const content = '9 月 26 日，成都东软学院与澳门初创智库协会合作的 Mcode 公益项目于澳门上线，该校副校长张兵率团出席。此项目为免费线上编程学习平台，秉持 “数智赋能教育，创新服务社会” 宗旨，助力全民编程普及，提供教育资源与学习契机，以适应社会变化。会后，代表团赴澳门及横琴粤澳深度合作区展开访企拓岗调研，走访澳门新大陆万博科技有限公司等多家企业，与负责人交流，探寻合作机遇。其间，慰问 2023 届优秀毕业生张瑛铭，其鼓励学弟学妹把握当地发展机遇。此次调研增进学院对澳门产业了解与合作，助于优化人才培养、提升就业质量。张兵副校长称，澳门为学生创业提供空间，学校望与招商投资促进局长期合作创新，持续探索数字化教育模式贡献力量。';
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
  flex-wrap: wrap; /* 添加换行 */
}

.text-content {
  flex: 1;
  color: #65A39A; /* 设置字体颜色 */
  max-width: 50%; /* 确保文本内容不超过一半宽度 */
  font-size: 2em; /* 使用相对单位设置字体大小 */
  font-weight: normal; /* 确保字体不加粗 */
}

.align-right {
  float: right;
  width: 45%;
  height: auto;
  border: 1px solid #65A39A;
  border-radius: 20px; /* 添加圆角 */
  max-width: 100%; /* 确保图片在小屏幕上自适应 */
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
  flex-basis: 42%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  max-width: 100%; /* 确保图片在小屏幕上自适应 */
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.text-container {
  flex-basis: 42%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  max-width: 100%; /* 确保文本容器在小屏幕上自适应 */
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

  .align-right {
    width: 100%; /* 图片占满整行 */
    float: none; /* 清除浮动 */
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

  .align-right {
    width: 100%; /* 图片占满整行 */
    float: none; /* 清除浮动 */
  }

  .news-report {
    flex-direction: column;
  }

  .image-container,
  .text-container {
    flex-basis: 100%; /* 图片和文本容器占满整行 */
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

  .align-right {
    width: 100%; /* 图片占满整行 */
    float: none; /* 清除浮动 */
  }

  .news-report {
    flex-direction: column;
  }

  .image-container,
  .text-container {
    flex-basis: 100%; /* 图片和文本容器占满整行 */
  }
}
</style>



