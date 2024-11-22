<template>
  <div class="main">
    <div style="margin-right: 30%;">
      <h1>筑梦计划</h1>
      <h3>自云萌成立以来，我们一直热衷于帮助<br>
        团队内外需要帮助的有志青年</h3>
      <h4>累计资助了xx场比赛<br>
        为1000余名青年提供助学支持
        <br>
        自创立以来为学校培养了数百名人才，并提供技术栈方面的教学
        <br>
        持续的关注需要帮助的新人，为其保驾护航....
        <br>
      </h4>
    </div>

    <div class="grid-container">
      <div class="grid-item green g001">
        <img src="../img/1.png" alt="">
        <p>助学支持</p>
      </div>
      <div class="grid-item yellow g002">
        <img src="../img/2.png" alt="">
        <p>竞赛支持</p>
      </div>
      <div class="grid-item yellow g003">
        <img src="../img/3.png" alt="" />
        <p>服务评价</p>
      </div>
      <div class="grid-item green g004">
        <img src="../img/4.png" alt="">
        <p>覆盖人数</p>
      </div>
    </div>
  </div>
</template>

<script setup name="DreamChaseProject"></script>


<style scoped>
h1 {
  color: #65A39A;
  margin-bottom: 30px;
  width: 500px;
}

h3 {
  color: #65A39A;
  margin-bottom: 80px;
  width: 550px;
}

h4 {
  color: #65A39A;
  width: 550px;
}

.main {
  margin-left: 3%;
  display: flex;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px;
  justify-items: center;
  align-items: center;
  margin-top: 10px;
}

.grid-item {
  text-align: center;
  background-color: #f0f0f0;
  padding: 10px;
  /* 减少内边距 */
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  /* 确保外边距为0 */
  border-radius: 2px;
  /* 默认边角为2px */
}

.grid-item img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.grid-item p {
  margin: 0;
  color: #333;
  font-size: 14px;
}

.yellow {
  background-color: #E9B058;
}

.green {
  background-color: #65A39A;
}

.g001 {
  border-top-left-radius: 10px;
}

.g002 {
  border-top-right-radius: 10px;
}

.g003 {
  border-bottom-left-radius: 10px;
}

.g004 {
  border-bottom-right-radius: 10px;
}
</style>
