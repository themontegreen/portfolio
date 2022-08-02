<template>
  <div class="project-showcase">
    <div class="media">
      <img :src="'/img/projects/'+id+'/'+media[0]" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectShowcase",
  props: ["id","media"],
  data(){
    return {
    }
  },
  mounted(){
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
  width: 100%;
  height: 100%;
  overflow: hidden;
  .media{
    img{
      position: absolute;
      height: 100%;
    }
  }
}
</style>