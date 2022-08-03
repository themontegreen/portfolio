<template>
  <div class="menufooter-container">
    <div
      v-for="(link,l) in links"
      :key="l"
      :class="['link', {'green' : link.color == 'green'}, {'selected' : link.color == 'green' && overlayOpen}]"
      v-text="link.label"
      @click="clickButton(link)"
    />
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data(){
    return{
      links: Array,
      animationDelay: 0,
      animationDuration: 1.2
    }
  },
  props: ['overlayOpen'],
  created(){
    this.links = this.$content[this.$lang].footer_menu
  },
  mounted(){
    this.animate()
  },
  computed: {
    emailSelected(l){
      console.log(l)
    }
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
    },
    clickButton(link){
      if( link.label == 'Email' )
        this.$emit('openEmailOverlay', 'openEmailOverlay')
      else
        window.open(link.link, '_blank').focus()
    }
  }
}
</script>

<style lang="scss">
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
    background-color: $true-white;
    @include title-small;
    cursor: pointer;
  }
  .link:hover{
    background-color: $true-black;
    color: $true-white;
  }
  .green{
    background-color: $themontegreen;
  }
  .selected{
    background-color: $true-black;
    color: $true-white;
  }
}
</style>