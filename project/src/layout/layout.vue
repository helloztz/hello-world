<template>
  <div class="layout">
    <nav-com></nav-com>
    <div class="main-content">
      <router-view></router-view>
    </div>
    <footer-com></footer-com>
  </div>
</template>
<script>
import navCom from '../navbar/Navbar'
import footerCom from '../footerCom/footerCom.vue'
export default {
  name: 'layout',
  components: {
    navCom,
    footerCom
  }
}
</script>
<style scoped>
.layout {
  width: 100%;
  height: 100%;
  position: relative;
}
.main-content {
  width: 100%;
  min-height: calc(100vh - 80px - 75px);
  overflow: hidden;
}
</style>
