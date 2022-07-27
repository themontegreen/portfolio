<template>
  <div class="hero-paragraph">
    Milan based designer+developer focused in the design and development process of visual design systems, digital user experiences and interactive data-driven content. 
  </div>
</template>

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