<template>
  <div class="hero-paragraph" v-text="text"/>
</template>

<script>
import gsap from "gsap";
export default {
  data(){
    return{
      text: String,
      animationDelay: this.$content[this.$lang].hero_paragraph.animationDelay,
      animationDuration: this.$content[this.$lang].hero_paragraph.animationDuration
    }
  },
  created(){
    this.text = this.$content[this.$lang].hero_paragraph.text
  },
  mounted(){
    this.animate()
  },
  methods: {
    animate(){
      gsap.fromTo(".hero-paragraph", {
        autoAlpha: 0,
        yPercent: -100
      },
      {
        autoAlpha: 1,
        yPercent: 0,
        duration: this.animationDuration,
        delay: this.animationDelay
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/fonts.scss';
.hero-paragraph{
  @include paragraph-big;
  position: relative;
  padding: 16px;
  border-bottom: 1px solid $true-black;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-100%);
}

@media screen and (max-width: 767px) {
  .hero-paragraph{
    @include paragraph-small;
    width: auto;
  }
}
</style>