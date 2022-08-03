<template>
  <div :class="['overlayemail-content', {'copied' : copied}]">
    <div class="email" v-text="email"/>
    <div class="text" v-text="text"/>
  </div>
</template>

<script>
import gsap from "gsap"
import Clipboard from "clipboard"
export default {
  data(){
    return{
      emailBox: this.$content[this.$lang].footer_menu.find(({ label }) => label == 'Email'),
      email: String,
      text: String,
      successText: String,
      errorText: String,
      copied: Boolean,
      clipboard: null
    }
  },
  props: ['closeModalAnimate'],
  watch: {
    closeModalAnimate(){
      this.animateOverlayClose(0)
    }
  },
  created(){
    this.email = this.emailBox.link
    this.text = this.emailBox.text
    this.successText = this.emailBox.success
    this.errorText = this.emailBox.error
    this.copied = false
  },
  mounted(){

    this.clipboard = new Clipboard('.overlayemail-content', {
      text: () =>{
        return this.email
      }
    })
    this.clipboard.on('success', this.copyEmail)
    this.clipboard.on('error', this.errorCopyEmail)

    this.animateOverlayOpen()
  },
  methods: {
    copyEmail(){
      this.text = this.successText
      this.$emit('copiedEmail', 'copiedEmail')
      this.copied = true
      this.animateOverlayClose(2)
    },
    errorCopyEmail(){
      this.text = this.errorText
    },
    animateOverlayOpen(){
      gsap.fromTo(".overlayemail-content", {
          yPercent: 100,
        },
        {
          yPercent: 0,
          ease: "power3.out",
          duration: .75
        })
    },
    animateOverlayClose(delay){
      gsap.fromTo(".overlayemail-content", {
        yPercent: 0
      },
      {
        yPercent: 100,
        duration: 1,
        delay: delay,
        ease: "power3.out",
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