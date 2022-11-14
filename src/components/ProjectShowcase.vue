<template>
  <div class="project-showcase">
    <div class="media">
      <Gallery :id="id" :media="media"/>
    </div>
  </div>
</template>

<script>
import Gallery from '../components/Gallery.vue'
export default {
  name: "ProjectShowcase",
  props: ["id","media"],
  data(){
    return {
      flkty: null
    }
  },
  mounted(){
  },
  methods:{
  },
  components:{
    Gallery
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
      width: 300px;
      height: 100%;
    }
  }
}
</style>