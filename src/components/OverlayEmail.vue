<template>
  <div :class="['overlayemail-content', {'copied' : copied}]" @click="copyEmail">
    <div class="email" v-text="email"/>
    <div class="text" v-text="text"/>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data(){
    return{
      email: 'daniel.demonteverde@gmail.com',
      text: 'Click anywhere to copy address',
      copied: false
    }
  },
  created(){
  },
  mounted(){
  },
  methods: {
    copyEmail(){
      navigator.clipboard.writeText(this.email)
      this.text = 'Email copied :)'
      this.$emit('copiedEmail', 'copiedEmail')
      this.copied = true
      gsap.fromTo(".overlayemail-content", {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
        duration: 1,
        delay: 2,
        onComplete: this.closeModal
      })
    },
    closeModal(){
      this.$emit('closeModal', 'closeModal')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/fonts.scss';
.overlayemail-content{
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $themontegreen;
  z-index: 1;
  cursor: pointer;
  .email{
    @include paragraph-small;
    color: $true-white;
    margin-bottom: 12px;
  }
  .text{
    @include paragraph;
    color: $true-white;
  }
}
.copied{
  background-color: $true-black;
}
</style>