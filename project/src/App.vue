<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created:function(){
    // settings.global.appId=window.location.href.split('//')[1].split('.')[0];
    // settings.global.appId='wx129eaf6876332fba';

  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background: #f0f2f5;
}
html,body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
