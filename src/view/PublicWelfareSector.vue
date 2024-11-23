<template>
  <div class="main">
    <div class="title">云萌公益</div>
    <div class="content-container">
      <img src="../img/6.png" alt="云萌公益" class="align-left">
      <div class="text-content">
        <div class="subtitle">
          <strong>我们是一只热爱服务的团队，致力于为社区提供帮助</strong>
        </div>
      </div>
    </div>
    <div class="images-container">
      <div v-for="(member, index) in coreMembers" :key="index" class="team-member1">
        <img :src="member.image"  class="team-image1" :alt="'图像' + (index + 1)" />
      </div>
    </div>
  </div>
</template>

<script setup name="PublicWelfareSector"></script>
<script>
export default {
    name: "CoreTeam",
    data() {
        return {
            coreMembers: [
                { image: "src/assets/img/图1.png" },
                { image: "src/assets/img/图1.png"},
                { image: "src/assets/img/图1.png"}
            ],
        };
    }
};
</script>
<style scoped>
.team-member1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.name {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 5px;
    color: #65A39A;
}
.team-member-info1 {
    margin-top: auto; /* 将名字显示在图片的中下部 */
}
.team-image1 {
    width: auto;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 5px 5px 5px #65A39A;
}

.images-container {
  padding: 20px;
  display: grid;
  background-image: url("../img/7.png");
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 90%); /* 添加这一行 */
  background-blend-mode: multiply;
}


/* 文本样式 */
.title {
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 20px;
  color: #65A39A;
  text-align: center; /* 使标题居中 */
}

.subtitle {
  color: #65a39a;
  font-size: 1.6rem;
  margin-bottom: 10px;
  max-width: 600px;
  padding-left:75px;
  padding-right:50px;
}

.description {
  color: #65a39a;
  font-size: 1.2rem;
  margin-bottom: 5px;
  max-width: 600px;
}

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
  align-items: flex-start; /* 从顶部开始对齐 */
  justify-content: space-between;
  gap: 20px; /* 调整间距 */
  width: 100%;
}

.text-content {
  flex: 1;
}

.align-left {
  float: left; /* 使图片左对齐 */
  width:50%; 
  height: auto;
  border: 1px solid blue;
}

/* 正方形容器 */
.square-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3px;
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
  width: 30px;
  height: 30px;
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
    font-size: 3.0rem;
  }
    
    .team-image1 {
        max-width: 200px;
        align-items: center;
    }
    .images-container {
        gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

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
