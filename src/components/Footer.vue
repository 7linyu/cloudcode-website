<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="logo图" />
    </div>
    <p class="title">公司企业网站模板</p>
    <p class="address_tel_fax">
      <p>地址：{{ address }}</p>
      <p>QQ群：<a style="color:#fff" target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=ce9f5f0d1d7553fb5634521f79a89668ad0d798eb35047f93300df63ebae4c05">{{ qqgroup }}</a></p>
    </p>
    <p class="email_wx">
      <p>博客：<a :href='blog + "neveryu/"' style="color:#fff">{{ blog }}</a></p>
      <p>邮箱：{{ email }}</p>
      <p>公司QQ号：{{ qq }}</p>
    </p>
    <p class="copy">Copyright &copy; 2018 - Now {{ company }}</p>
  </div>
</template>

<script setup name="Footer">
const address = import.meta.env.VITE_APP_ADDRESS
const phone = import.meta.env.VITE_APP_PHONE
const email = import.meta.env.VITE_APP_EMAIL
const qq = import.meta.env.VITE_APP_QQ
const company = import.meta.env.VITE_APP_COMPANYNAME
const blog = import.meta.env.VITE_APP_BLOG
const qqgroup = import.meta.env.VITE_APP_QQGROUP
</script>

<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #050505;
  overflow: hidden;
  /* 移除 text-align: center; */
}

.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
  /* 保持logo居中 */
}

.title,
.address_tel_fax,
.email_wx,
.copy {
  /* 添加以下属性以实现左侧对齐 */
  text-align: left;
  padding-left: 20px;
  /* 可选：为文本添加一些左侧内边距，使其不紧贴容器边缘 */
}

.title {
  font-size: 25px;
  margin-bottom: 20px;
}

.address_tel_fax,
.email_wx,
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
  /* 注意：这里的margin可能需要针对.copy进行单独调整 */
}

/* 注意：.copy的margin可能需要不同于.address_tel_fax和.email_wx，因为通常版权信息会放置在页脚底部 */
.copy {
  margin: 0 0 10px 20px;
  /* 调整为顶部和底部无外边距，左侧添加内边距（如果已添加padding-left，则此处无需再添加） */
}

@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }

  .address_tel_fax,
  .email_wx {
    font-size: 12px;
  }

  .copy {
    font-size: 12px;
    /* 针对小屏幕调整margin，可能需要根据实际情况调整 */
    margin: 0 0 10px 20px;
    /* 或者使用 padding-left 而不是 margin-top */
  }
}
</style>
