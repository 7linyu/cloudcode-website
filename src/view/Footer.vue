<template>
    <footer class="footer">
        <div class="container">
            <h3>云萌工作室</h3>
            <p>
                地址：四川省成都市郫都区犀浦镇珠江镇兴大社区第1组1号
            </p>
            <p>
                邮箱：<a href="mailto:support@cloudcode.team">support@cloudcode.team</a>
            </p>
            <p>友情链接：云萌实验站</p>
            <p>蜀ICP备2022010875号-2</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
.footer {
    background-color: #000;
    /* 黑色背景 */
    color: #fff;
    /* 白色字体 */
    text-align: left;
    padding: 5%;
}

.footer a {
    color: #ffa500;
    /* 亮橙色超链接 */
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    /* 调整字体大小 */
    line-height: 1.6;
}
</style>
