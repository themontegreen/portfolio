<template>
  <div class="scrollable-area-container">
    <div class="projects">
      <router-link
        v-for="(project,p) in projects"
        class="project"
        :to="{name: 'project', params: {
          id: project.n,
          project: project
        }}"
        :key="p"
      >
        <div
            class="project-container"
            :style="`background-image: url('./img/projects/`+project.id+`/`+project.cover+`'); background-size:cover;background-position: center;`"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data(){
    return{
      projects: Array,
      animationDelay: .35,
      animationDuration: .75,
      staggerDuration: .25
    }
  },
  created(){
    this.projects = this.$content[this.$lang].projects
  },
  mounted(){
    this.animate()
  },
  methods: {
    animate(){
      gsap.fromTo(".scrollable-area-container .projects .project", {
        autoAlpha: 0,
        yPercent: -1
      },
      {
        autoAlpha: 1,
        yPercent: 0,
        duration: this.animationDuration,
        delay: this.animationDelay,
        stagger: this.staggerDuration
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/colors.scss';
@import '../assets/scss/fonts.scss';

.scrollable-area-container{
  height: 100%;
  overflow-y: scroll;
  .projects{
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .project{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: calc(100% / 2);
      height: 70%;
      .project-container{
        position: relative;
        width: 100%;
        height: 100%;
        background-color: rgba($true-black, .1);
        overflow: hidden;
        img{
          position: absolute;
          height: 100%;
          left: 50%;
          transform: translate(-50%,0%);
        }
      }
      .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: $themontegreen;
        z-index: 1;
        opacity: 0;
      }
    }
  }
}
</style>