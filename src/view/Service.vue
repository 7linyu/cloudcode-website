<template>
<div class="navbar">
  <div class="navbar-left" style="display: flex; align-items: center; width: 100%;">
    <router-link to="/new-page">
      <img src="@/assets/img/logo.png" alt="Logo" class="navbar-logo" />
    </router-link>
    <span class="navbar-text">云萌工作室</span>
  </div>
  <div class="navbar-right">
    <a href="#" class="navbar-lang">简体中文</a>
    <span class="navbar-divider">/</span>
    <a href="#" class="navbar-lang">繁體中文</a>
    <span class="navbar-divider">/</span>
    <a href="#" class="navbar-lang">English</a>
  </div>
</div>
<div>
  <div class="green-box"></div>
</div>

<div>

  <img src="@/assets/img/cloud.jpg" class="responsive-img" />

</div>
  <div id="Service">
    <div class="container text-center">
      <h3>我们的服务</h3>
      <p style="color: #b2b2b2">The Best Service You Never See</p>
    </div>
    <div class="container">

      <div class="Service-container row">
        <div
          class="Service-item col-xs-12 col-sm-6 col-md-3 wow slideInUp"
          v-for="(item, index) in serviceList"
          :key="index"
          @click="ServiceClick(item.id)"
        >
          <div class="Service-item-wrapper">
            <div class="Service-item-top">
              <h4>{{ item.title }}</h4>
              <i></i>
              <p>{{ item.eng_title }}</p>
            </div>
            <div class="Service-item-img">
              <img :src="item.img" alt="服务" />
            </div>
            <div class="Service-item-border"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup name="Service">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import WOW from 'wow.js'
import service1 from '@/assets/img/service1.jpg'
import service2 from '@/assets/img/service2.jpg'
import service3 from '@/assets/img/service3.jpg'
import service4 from '@/assets/img/service4.jpg'
const serviceList = [
  {
    id: 'section-1',
    title: '软件定制开发',
    eng_title: 'Customize App',
    img: service1
  },
  {
    id: 'section-2',
    title: 'IT外包服务',
    eng_title: 'Outsourcing',
    img: service2
  },
  {
    id: 'section-3',
    title: '网上商城建设',
    eng_title: 'eCommerce Site',
    img: service3
  },
  {
    id: 'section-4',
    title: 'iOS应用定制开发',
    eng_title: 'iOS App Dev',
    img: service4
  }
]

const router = useRouter()

function ServiceClick(id) {
  router.push({
    name: 'serviceDetail',
    state: {
      id
    }
  })
}
onMounted(() => {
  var wow = new WOW()
  wow.init()
})
</script>
<style scoped>
.Service-container {
  padding: 30px 50px;
}
.Service-item {
  margin-bottom: 50px;
}
.Service-item-wrapper {
  cursor: pointer;
  background: rgba(244, 244, 244, 1);
  overflow: hidden;
  position: relative;
}
.Service-item-top {
  width: 100%;
  height: 120px;
  padding: 30px;
  text-align: center;
}
.Service-item-top > i {
  display: inline-block;
  width: 25px;
  height: 2px;
  background: #28f;
}
.Service-item-top > p {
  color: #b2b2b2;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease;
}
.Service-item-img {
  width: 100%;
  overflow: hidden;
}
.Service-item-img img {
  width: 100%;
  transition: all 0.5s ease;
}
.Service-item-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 9999999;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  border: 1px solid #000;
  opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > i {
  opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > p {
  opacity: 1;
  transform: translateY(-10px);
}
.Service-item-wrapper:hover .Service-item-img > img {
  transform: scale(1.1, 1.1);
}
.Service-item-wrapper:hover > .Service-item-border {
  opacity: 1;
  width: 90%;
  height: 90%;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-logo {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}

.navbar-text {
  font-size: 28px;
  font-weight: bold;
  color: #65A49B;
}

.navbar-right {
  display: flex;
  align-items: center;
  white-space: nowrap; /* 禁止换行 */
}

.navbar-lang {
  font-size: 14px;
  color: #65A49B;
  text-decoration: none;
  margin: 0 5px;
  font-weight: bold;  /* 使字体加粗 */
}

.navbar-lang:hover {
  text-decoration: underline;
}

.navbar-divider {
  font-size: 14px;
  color: #666;
}
/* 添加媒体查询实现自适应 */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 10px 20px;
  }

  .navbar-left {
    transform: translateX(0); /* 移除默认偏移 */
    margin-bottom: 10px; /* 添加下间距 */
    justify-content: center;
  }

  .navbar-right {
    justify-content: center;
    /* flex-wrap: wrap; 在屏幕很窄时支持换行 */
    margin-left: 0; /* 重置左边距 */
    margin-top: 10px; /* 增加顶部间距 */
  }

  .navbar-lang {
    margin: 0 10px 5px; /* 语言选项间距调整 */
  }

  .navbar-divider {
    display: none; /* 隐藏分隔符，节省空间 */
  }
}
/* 图片css */
.responsive-img {
  width: 100%; /* 设置图片宽度为100%，让它适应父容器 */
  height: auto; /* 保持图片的纵横比 */
}
.green-box {
  width: 280%;            /* 使盒子的宽度为屏幕宽度的 180% */
  height: 10px;           /* 高度为 10px */
  background-color: #65A49B;  /* 设置背景颜色为绿色 */
  margin-left: -500px;     /* 左移 10px */
  margin-top: -20px;      /* 上移 10px */
}


</style>

