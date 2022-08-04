<template>
  <div class="project-showcase">
    <div class="media" data-flickity='{ "cellAlign": "left", "contain": true }'>
      <img
        v-for="(media,m) in media"
        :key="m"
        class="carousel-cell"
        :src="'./img//projects/'+id+'/'+media"
      />
    </div>
  </div>
</template>

<script>
import Flickity from "flickity"
export default {
  name: "ProjectShowcase",
  props: ["id","media"],
  data(){
    return {
      flkty: null
    }
  },
  mounted(){
    // this.flkty = new Flickity(this.$el.querySelector('.project-showcase .media'), {
    //   // options
    //   cellAlign: 'left',
    //   contain: true
    // });
  },
  methods:{
  }
}
</script>

<style lang="scss">
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';
.project-showcase{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .media{
    height: 100%;
    .carousel-cell{
      height: 200px;
    }
  }
}
</style>