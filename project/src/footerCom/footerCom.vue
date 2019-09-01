<template>
  <div class="copyright-content">
    Copyright &copy; 2017.Company name All rights reserved.
  </div>
</template>
<script>
export default {
  name: 'footerCom'
}
</script>
<style scoped>
.copyright-content{
  text-align: center;
  line-height:75px;
  color: #fff;
  background-color: #15416e;
  position: absolute;
  left: 0px;
  bottom: 0px;
  right: 0px;
  top: calc(100vh - 75px);
}
</style>
