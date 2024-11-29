<template>
  <div id="container">
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<script setup name="PageView"></script>

<style scoped>
.body {
  background-color: rgb(255, 253, 253);
  width: 96%;
  margin-left: 2%;
}
</style>
