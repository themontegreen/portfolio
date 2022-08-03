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
      emailBox: this.$content[this.$lang].footer_menu.find(({ label }) => label == 'Email'),
      email: String,
      text: String,
      successText: String,
      copied: Boolean
    }
  },
  created(){
    this.email = this.emailBox.link
    this.text = this.emailBox.text
    this.successText = this.emailBox.success
    this.copied = false
  },
  mounted(){
    gsap.fromTo(".overlayemail-content", {
        yPercent: 100,
      },
      {
        yPercent: 0,
        ease: "power3.out",
        duration: .75
      })
  },
  methods: {
    copyEmail(){
      navigator.clipboard.writeText(this.email)
      this.text = this.successText
      this.$emit('copiedEmail', 'copiedEmail')
      this.copied = true
      gsap.fromTo(".overlayemail-content", {
        yPercent: 0
      },
      {
        yPercent: 100,
        duration: 1,
        delay: 2,
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
  z-index: 9999;
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