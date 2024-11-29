<template>
  <div class="main">
    <h1>{{ $t('applyCooperation.title') }}</h1>
    <h4>
      {{ $t('applyCooperation.description') }}
    </h4>
    <h4 style="color: #E0B266; font-weight: bold;">
      {{ $t('applyCooperation.slogan') }}
    </h4>

    <!-- 联系方式部分 -->
    <div class="contact-info">
      <p>{{ $t('applyCooperation.contactLabel') }}://此处为联系方式</p>
      <a :href="'mailto:' + email" class="email-link">{{ email }}</a>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

// 使用 Vue I18n
const { t } = useI18n();

// 定义组件名称
const name = "ApplyCooperation";

// 联系方式
const email = "example@example.com";
</script>

<style scoped>
h1 {
  color: #65A39A;
  margin-bottom: 30px;
  width: 500px;
  font-weight: bold;
  font-size: 50px;
}

h4 {
  color: #65A39A;
  margin-bottom: 40px;
  width: 550px;
}

.main {
  padding: 5%;
}

.contact-info {
  margin-top: 30px;
}

.email-link {
  color: #E0B266;
  text-decoration: none;
  font-weight: bold;
}

.email-link:hover {
  text-decoration: underline;
}
</style>



