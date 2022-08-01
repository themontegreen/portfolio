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
export default {
  data(){
    return{
      links: Array
    }
  },
  components: {
  },
  mounted(){
    this.links = this.$content[this.$lang].footer_menu
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