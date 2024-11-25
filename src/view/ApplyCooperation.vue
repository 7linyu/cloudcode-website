<template>
  <div class="main">
    <h1>{{ $t('applyCooperation.title') }}</h1>
    <h4>
      {{ $t('applyCooperation.description') }}
    </h4>
    <h4 style="color: #E0B266; font-weight: bold;">
      {{ $t('applyCooperation.slogan') }}
    </h4>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

// 使用 Vue I18n
const { t } = useI18n();

// 定义组件名称
const name = "ApplyCooperation";
</script>

<style scoped>

h1 {
    color: #65A39A;
    margin-bottom: 30px;
    width: 500px;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 50px; 
}
h4 {
  color: #65A39A;
  margin-bottom: 40px;
  width: 550px;
  margin-bottom: 30px;
}
.main{
    padding: 5% ;
    /* margin-left: 3%; */
    
  }
</style>
