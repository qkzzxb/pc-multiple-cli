<template>
  <div id="app">
    <router-view></router-view>
    <div id="modal" v-if="modalShow" :style="modalBg" @touchmove.prevent @scroll.prevent></div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      modalShow:false,
      modalBg:{
        backgroundColor:'rgba(0,0,0,.8)'
      }
    }
  },
  created() {  
    Bus.$on('modalOpen',style => {
      if(style){
        this.modalBg.backgroundColor=style;
      }
      this.modalShow=true;
    });
    Bus.$on('modalClose',style => {  
      this.modalShow=false;
      this.modalBg.backgroundColor='rgba(0,0,0,.8)';
    });  
  }  
} 
</script>
<style lang="scss">
  #app {
    font-family:'PingFang SC','微软雅黑','Avenir', Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height:100vh;
    @include set-font(12);
    line-height:1.42857143;
    color:$grey32;
    max-width:540px;
    margin:0 auto;
    font-weight: lighter;
  }
  #modal{
    width: 100vw;
    height: 100vh;
    // background-color:rgba(0, 0, 0, .8);
    position: fixed;
    z-index: 90;
    top:0;
    left:0;
  }
</style>
