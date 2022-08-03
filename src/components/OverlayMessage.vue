<template>
  <div class="overlay-message">
    <div class="text">For an optimal experience, view this page in portrait mode<br/>Simply put, rotate your phone :)
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/fonts.scss';
.overlay-message{
  position: fixed;
  display: none;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: $themontegreen;
  z-index: 9999;
}

/* Mobile (Landscape) */
@media screen and (max-width: 1200px) and (orientation: landscape){
 .overlay-message{
      display: flex;
      justify-content: center;
      align-items: center;
      .text{
        @include paragraph;
        color: $true-white;
        text-align: center;
      }
    }
}
</style>