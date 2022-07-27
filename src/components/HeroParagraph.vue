<template>
  <div class="hero-paragraph" v-text="text"/>
</template>

<script>
export default {
  data(){
    return{
      text: String
    }
  },
  components: {
  },
  mounted(){
    this.text = this.$content[this.$lang].hero_paragraph
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/fonts.scss';
.hero-paragraph{
  @include paragraph-big;
  position: relative;
  width: 100vw;
  padding: 16px;
  border-bottom: 1px solid $true-black;
}

@media screen and (max-width: 767px) {
  .hero-paragraph{
    @include paragraph-small;
    width: auto;
  }
}
</style>