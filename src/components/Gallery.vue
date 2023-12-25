<template>
  <div class="gallery-container">
    <transition name="slide-fade" mode="out-in">
      <div
        :key="[id,currentMedia]"
        :style="`width: 100%;height: 100%; background-image: url('./img/projects/`+id+`/`+media[currentMedia]+`'); background-size:cover;background-position: center;`">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: ["id","media"],
  data(){
    return {
      currentMedia: 0,
      interval: null
    }
  },
  mounted(){
    if(!this.interval )
      this.setImgInterval()

  },
  updated(){

    if( this.interval ){
      clearInterval(this.interval)
    }

    this.setImgInterval()
  },
  methods:{
    setImgInterval(){
      this.interval = setInterval(this.updateCurrentMedia, 6300)
    },
    updateCurrentMedia(){
      if( this.currentMedia < this.media.length - 1 )
        this.currentMedia++
      else
        this.currentMedia = 0
    }
  }
}
</script>

<style lang="scss">
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';
.gallery-container{
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-fade-enter-active {
  /*transition: all .3s ease-in-out;*/
  transition: opacity .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-leave-active {
  transition: opacity .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

/*.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
*/
</style>