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
<<<<<<< HEAD
  /* height: 100%; */
=======
  height: 100%;
>>>>>>> 289fcd15f8695b17a6e465963d204e1d94560bcd
}
#app {
  width: 100%;
  /* height: 100%; */
}
</style>
