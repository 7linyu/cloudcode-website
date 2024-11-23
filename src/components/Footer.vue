<template>
  <div id="footer" class="container-fluid">
    <p class="title">云萌工作室</p>
    <p>地址：四川省成都市都江堰市青城山镇长寿社区3栋1层1号</p>
    <p>邮箱：<a href="mailto:support@cloudcode.team">support@cloudcode.team</a></p>
    <p>友情链接：<a href="https://geek.cloudcode.team" target="_blank">云萌极客站</a> | <a href="https://learn.cloudcode.team"
        target="_blank">网工教学平台</a></p>
    <p class="icp">
      © 2022-2023 CloudCode Team. All Rights Reserved |
      <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2022018075号-2</a> |
      <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51018102000210" target="_blank">川公网安备
        51018102000210号</a>
    </p>
  </div>
</template>

<script setup name="Footer">
</script>

<style scoped>
#footer {
  width: 100%;
  height: auto;
  color: #fff;
  background: #050505;
  padding: 10px 100px 20px 50px;
}

.title {
  color: #ffffff;
  font-size: 25px;
  margin-bottom: 15px;
  text-align: left;
}

p {
  color: #d3d3d3;
  font-size: 12px;
  margin: 5px;
  text-align: left;
}

a {
  color: #ffffff;
  text-decoration: none;
}

a:hover {
  color: #65A39A;
  text-decoration: underline;
}

.icp {
  margin-top: 15px;
  font-size: 12px;
  text-align: left;
  color: #d3d3d3;
}
</style>
