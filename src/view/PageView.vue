<template>
  <div id="container">
    <div class="body">
      <router-view />
    </div>
    
  </div>
</template>

<script setup name="PageView"></script>

<style scoped>
.body{
  background-color: white;
  width: 96%;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
