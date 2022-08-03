<template>
  <div class="homepage-container" @wheel="blockScrolling" @touchmove="blockScrolling">
    <OverlayMessage/>
    <div class="fixed-content">
      <HeroParagraph/>
      <ScrollableArea/>
      <MenuFooter v-on:openEmailOverlay="openEmailOverlay" :overlayOpen="overlayEmail"/>
      <OverlayEmail v-if="overlayEmail" :closeModalAnimate="closeModalAnimate" v-on:closeModal="closeEmailOverlay"/>
    </div>
  </div>
</template>

<script>
import OverlayMessage from '../components/OverlayMessage.vue'
import HeroParagraph from '../components/HeroParagraph.vue'
import ScrollableArea from '../components/ScrollableArea.vue'
import MenuFooter from '../components/MenuFooter.vue'
import OverlayEmail from '../components/OverlayEmail.vue'
export default {
  data(){
    return{
      overlayEmail: false,
      closeModalAnimate: ''
    }
  },
  components: {
    OverlayMessage,
    HeroParagraph,
    ScrollableArea,
    MenuFooter,
    OverlayEmail
  },
  mounted(){
  },
  methods: {
    blockScrolling(e){
      if( e.srcElement.classList.value != 'scrollable-area-container' && e.srcElement.classList.value != 'project-container' ){
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    },
    openEmailOverlay(){
      if( this.overlayEmail ){
        this.closeModalAnimate = 'close'
      }
      else
        this.overlayEmail = true
    },
    closeEmailOverlay(){
      this.overlayEmail = false
      this.closeModalAnimate = ''
    }
  }
}
</script>

<style lang="scss">
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';

body{
  margin: 0px;
}
</style>

<style lang="scss" scoped>
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';
.homepage-container{
  height: 100%;
  .fixed-content{
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
  }
}
/* Mobile (Landscape) */
@media screen and (max-width: 1200px) and (orientation: landscape){
  .homepage-container{
    .overlay-message{
      display: flex;
      justify-content: center;
      align-items: center;
      .text{
        @include paragraph;
        color: $true-white;
        text-align: center;
      }
    }
  }
}
</style>