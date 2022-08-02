<template>
  <div class="loadingintro-container">
    <div class="horizontal-bar"/>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data(){
    return{
      loadingTime: 2,
      delayTime: 1
    }
  },
  created(){
  },
  methods: {
    animateHorizontalBar(){
      gsap.fromTo(".loadingintro-container .horizontal-bar",
        {
          width: '0%'
        },
        {
          width: '100%',
          duration: this.loadingTime,
          delay: this.delayTime,
          onComplete: this.animateBackground
        }
      )
    },
    animateBackground(){
      gsap.fromTo(".loadingintro-container",
        {
          autoAlpha: 1
        },
        {
          autoAlpha: 0,
          duration: this.loadingTime,
          onComplete: this.complete
        }
      )
    },
    complete(){
      this.$emit('complete', 'complete')
    }
  },
  mounted(){
    this.animateHorizontalBar()
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';
.loadingintro-container{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: $themontegreen;
  z-index: 9999;
  .horizontal-bar{
    position: absolute;
    top: 50%;
    width: 100%;
    height: 1px;
    background-color: $true-white;
    transform: translateY(-50%);
  }
}
</style>