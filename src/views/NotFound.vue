<template>
  <div class="page-not-found">
    <div class="error">404</div>
    <div class="description">page not found :(</div>
  </div>
</template>

<style lang="scss" scoped>
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';
.page-not-found{
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .error{
    @include title-small;
  }
  .description{
    @include title-small;
    font-weight: 300;
  }
}
</style>