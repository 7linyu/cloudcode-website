<template>
    <div id="footer" class="container-fluid">
        <p class="title">{{ $t('footer.title') }}</p>
        <p v-html="$t('footer.address')"></p>
        <p v-html="$t('footer.email')"></p>
        <p v-html="$t('footer.links')"></p>
        <p class="icp" v-html="$t('footer.icp')"></p>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

// 使用 Vue I18n
const { t } = useI18n();
</script>

<style scoped>
#footer {
    width: 100%;
    height: auto;
    color: #fff;
    background: #65A49B;
    padding: 1% 1% 1% 7%;
}

.title {
    color: #ffffff;
    font-size: 25px;
    margin-bottom: 15px;
    text-align: left;
}

p {
    color: #ffffff;
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
    color: #ffffff;
}
</style>
