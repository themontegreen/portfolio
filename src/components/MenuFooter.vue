<template>
  <div class="menufooter-container">
    <a
      v-for="(link,l) in links"
      :key="l"
      :class="['link', {'green' : link.color == 'green'}]"
      v-text="link.label"
      :href="link.link"
    />
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data(){
    return{
      links: Array,
      animationDelay: .7,
      animationDuration: 1.2
    }
  },
  created(){
    this.links = this.$content[this.$lang].footer_menu
  },
  mounted(){
    this.animate()
  },
  methods: {
    animate(){
      gsap.fromTo(".menufooter-container", {
        autoAlpha: 0,
        yPercent: 100
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
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';
.menufooter-container{
  position: relative;
  display: flex;
  .link{
    position: relative;
    width: calc(100%/4);
    text-align: center;
    padding: 12px 0;
    border-top: 1px solid $true-black;
    border-right: 1px solid $true-black;
    text-decoration: none;
    @include title-small;
  }
  .link:hover{
    background-color: $true-black;
    color: $true-white;
  }
  .green{
    background-color: $themontegreen;
  }
}
</style>