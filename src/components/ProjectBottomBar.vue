<template>
  <div class="project-bottom-bar">
    <div class="buttons">
      <div class="button" @click="previousProject" v-text="'previous'"/>
      <div class="button" @click="nextProject" v-text="'next'"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectBottomBar",
  methods: {
    previousProject() {
      this.$emit('goToPrevious', 'goToPrevious')
    },
    nextProject() {
      this.$emit('goToNext', 'goToNext')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';
.project-bottom-bar{
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 40px;
  border-top: 1px solid $true-black;
  background-color: white;
  z-index: 9998;
  .buttons{
    display: flex;
    height: 100%;
    flex-direction: row;
    align-content: space-between;
    .button{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      @include title-small;
      &:first-child{
        border-right: 1px solid $true-black;;
      }
      &:hover{
        background-color: $true-black;
        color: $true-white;
      }
    }
  }
}
</style>