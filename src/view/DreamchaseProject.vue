<template>
  <div class="main">
    <div class="text-content">
      <h1>筑梦计划</h1>
      <h3>
        自云萌成立以来，我们一直热衷于帮助<br>
        团队内外需要帮助的有志青年
      </h3>
      <h4>
        累计资助了xx场比赛<br>
        为1000余名青年提供助学支持<br>
        自创立以来为学校培养了数百名人才，并提供技术栈方面的教学<br>
        持续的关注需要帮助的新人，为其保驾护航...
      </h4>
    </div>

    <!-- 正方形容器 -->
    <div class="square-container">
      <div class="grid-item green g001">
        <img src="../img/1.png" alt="助学支持">
        <p>助学支持</p>
        <p>aaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaa</p>
      </div>
      <div class="grid-item yellow g002">
        <img src="../img/2.png" alt="竞赛支持">
        <p>竞赛支持</p>
        <p>aaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaa</p>
      </div>
      <div class="grid-item yellow g003">
        <img src="../img/3.png" alt="服务评价">
        <p>服务评价</p>
        <p>aaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaa</p>
      </div>
      <div class="grid-item green g004">
        <img src="../img/4.png" alt="覆盖人数">
        <p>覆盖人数</p>
        <p>aaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaa</p>
      </div>
    </div>
  </div>
</template>

<script setup name="DreamChaseProject"></script>

<style scoped>
/* 文本样式 */
h1 {
  color: #65A39A;
  margin-bottom: 30px;
  max-width: 600px;
  font-size: 2.5rem;
}

h3,
h4 {
  color: #65A39A;
  margin-bottom: 20px;
  max-width: 600px;
  font-size: 1.5rem;
}

h4 {
  margin-bottom: 0;
  font-size: 1.2rem;
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px;
  aspect-ratio: 1;
  max-width: 100%;
}

/* 每个格子的样式 */
.grid-item {
  text-align: center;
  background-color: #f0f0f0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.grid-item img {
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
}

.grid-item p {
  margin: 0;
  color: #333;
  font-size: 16px;
  min-height: 2.5em;
  /* 确保有至少两行文本空间 */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* 颜色块 */
.yellow {
  background-color: #E9B058;
}

.green {
  background-color: #65A39A;
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
