<template>
  <div class="project-showcase">
    <div class="media">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectShowcase",
  props: ["media"],
  data(){
    return {
    }
  },
  mounted(){
    console.log(this.media)
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';
.project-showcase{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .media{
    position: relative;
    width: 100%;
  }
}

/* Mobile */
@media screen and (max-width: 1200px){
}

/* Mobile (Landscape) */
@media screen and (max-width: 1200px) and (orientation: landscape){
  .project-showcase{
    .media{
    }
  }
}

/* 1920 x 1080 */
@media screen and (min-width: 1920px) and (orientation: landscape){
  .project-showcase{
    .media{
    }
  }
}
</style>