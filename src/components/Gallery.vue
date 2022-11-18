<template>
  <div class="gallery-container">
    <div 
      :style="`width: 100%;height: 100%; background-image: url('./img/projects/`+id+`/`+media[currentMedia]+`'); background-size:cover;background-position: center;`">
    </div>
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
      this.interval = setInterval(this.updateCurrentMedia, 2000)
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
</style>