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
const email = "gaohaoran@cloudcode.team";
</script>

<style scoped>
h1 {
  color: #65A39A;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 50px;
}

h4 {
  color: #65A39A;
  margin-bottom: 40px;
  max-width: 100%;
}

.main {
  padding: 5%;
  box-sizing: border-box;
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

/* 屏幕自适应 */
@media (max-width: 768px) {
  h1 {
    font-size: 30px;
    width: auto;
  }

  h4 {
    font-size: 18px;
    width: auto;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 24px;
  }

  h4 {
    font-size: 16px;
  }

  .main {
    padding: 2%;
  }
}
</style>



