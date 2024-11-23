<template>
  <div class="main">
    <div class="text-content">
      <div class="title">筑梦计划</div>
      <div class="subtitle">
        自云萌成立以来，我们一直热衷于帮助<br />
        团队内外需要帮助的有志青年
      </div>
      <div class="description">
        累计资助了xx场比赛<br />
        为1000余名青年提供助学支持<br />
        自创立以来为学校培养了数百名人才，并提供技术栈方面的教学<br />
        持续的关注需要帮助的新人，为其保驾护航...
      </div>
    </div>

    <div class="square-container">
      <div class="grid-item green g001">
        <img src="../img/1.png" alt="助学支持" />
        <p>助学支持</p>
        <p class="example">例如：为贫困学生提供助学金</p>
      </div>
      <div class="grid-item yellow g002">
        <img src="../img/2.png" alt="竞赛支持" />
        <p>竞赛支持</p>
        <p class="example">例如：赞助编程大赛</p>
      </div>
      <div class="grid-item yellow g003">
        <img src="../img/3.png" alt="服务评价" />
        <p>服务评价</p>
        <p class="example">例如：收集学员反馈提升服务</p>
      </div>
      <div class="grid-item green g004">
        <img src="../img/4.png" alt="覆盖人数" />
        <p>覆盖人数</p>
        <p class="example">例如：覆盖全国1000+名学生</p>
      </div>
    </div>
  </div>
</template>

<script setup name="DreamChaseProject"></script>

<style scoped>
/* 文本样式 */
.title {
  color: #65a39a;
  font-weight: bold;
  font-size: 4rem;
  ;
  margin-bottom: 15px;
  max-width: 600px;
}

.subtitle {
  color: #65a39a;
  font-size: 3rem;
  margin-bottom: 10px;
  max-width: 600px;
}

.description {
  color: #65a39a;
  font-size: 1.8rem;
  margin-bottom: 5px;
  max-width: 600px;
}

.main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5%;
  gap: 10px;
  flex-wrap: wrap;
}

.text-content {
  /* font-size: 1.6rem; */
  flex: 1 1 50%;
  margin-right: 5px;
}

/* 正方形容器 */
.square-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 300px;
  height: 300px;
  flex-shrink: 0;
}

/* 每个格子的样式 */
.grid-item {
  text-align: center;
  background-color: #f0f0f0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.grid-item img { 
  /* max-width: 100%; */
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
}

.grid-item p {
  margin: 0;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
}

.example {
  font-size: 10px;
  /* color: #777; */
  margin-top: 2px;
  text-align: center;
}

/* 颜色块 */
.yellow {
  background-color: #e9b058;
}

.green {
  background-color: #65a39a;
}

.g001 {
  border-top-left-radius: 5px;
}

.g002 {
  border-top-right-radius: 5px;
}

.g003 {
  border-bottom-left-radius: 5px;
}

.g004 {
  border-bottom-right-radius: 5px;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .title {
    font-size: 2.4rem;
  }

  .subtitle,
  .description {
    font-size: 1.4rem;
  }

  .square-container {
    width: 220px;
    height: 220px;
  }

  .grid-item img {
    width: 28px;
    height: 28px;
  }

  .grid-item p {
    font-size: 11px;
  }

  .example {
    font-size: 9px;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .subtitle,
  .description {
    font-size: 1.2rem;
  }

  .main {
    flex-direction: column;
    gap: 10px;
  }

  .square-container {
    width: 160px;
    height: 160px;
    margin-top: 10px;
  }

  .grid-item img {
    width: 24px;
    height: 24px;
  }

  .grid-item p {
    font-size: 10px;
  }

  .example {
    font-size: 8px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.8rem;
  }

  .subtitle,
  .description {
    font-size: 1rem;
  }

  .square-container {
    width: 120px;
    height: 120px;
    margin-top: 8px;
  }

  .grid-item img {
    width: 20px;
    height: 20px;
  }

  .grid-item p {
    font-size: 9px;
  }

  .example {
    font-size: 7px;
  }
}
</style>
