<template>
  <div class="project-page">
    <ProjectTopBar :title="title"/>
    <div class="project-info">
      <div class="container-carousel">
        <ProjectShowcase :id="id" :media="media"/>
      </div>
      <div class="project-content">
        <div class="info-header">
          <div class="info" v-text="year"></div>
          <div class="info">
            <span v-for="(category,c) in categories" :key="c">
              {{category}}<span v-if="(c+1) < categories.length">/</span>
            </span>
          </div>
          <div class="info" v-text="subject"></div>
          <a v-if="link" :href="link" class="link" target="_blank">link</a>
        </div>
        <div class="container-paragraph">
          <div class="paragraph" v-html="paragraph">
          </div>
        </div>
      </div>
    </div>
    <ProjectBottomBar v-on:goToPrevious="previousProject" v-on:goToNext="nextProject"/>
  </div>
</template>

<script>
import ProjectTopBar from '../components/ProjectTopBar.vue'
import ProjectShowcase from '../components/ProjectShowcase.vue'
import ProjectBottomBar from '../components/ProjectBottomBar.vue'
import gsap from "gsap"
export default {
  data(){
    return{
      id: String,
      title: String,
      year: String,
      categories: Array,
      subject: String,
      paragraph: String,
      media: Array,
      link: String,
      animationDelay: .5,
      animationDuration: 1.5
    }
  },
  components: {
    ProjectTopBar,
    ProjectShowcase,
    ProjectBottomBar
  },
  watch:{
    $route (to, from){
      if( to.name == 'project' ){
        this.retrieveData()
        this.animateRefresh()
      }
    }
  },
  created(){
    this.retrieveData()
  },
  mounted(){
    this.animateLoad()
  },
  methods: {
    retrieveData(){
      this.id = this.$content[this.$lang].projects.find(({ n }) => n === parseInt(this.$route.params.id)).id
      this.title = this.$content[this.$lang].projects.find(({ n }) => n === parseInt(this.$route.params.id)).title
      this.year = this.$content[this.$lang].projects.find(({ n }) => n === parseInt(this.$route.params.id)).year
      this.categories = this.$content[this.$lang].projects.find(({ n }) => n === parseInt(this.$route.params.id)).categories
      this.subject = this.$content[this.$lang].projects.find(({ n }) => n === parseInt(this.$route.params.id)).subject
      this.paragraph = this.$content[this.$lang].projects.find(({ n }) => n === parseInt(this.$route.params.id)).description
      this.media = this.$content[this.$lang].projects.find(({ n }) => n === parseInt(this.$route.params.id)).media
      this.link = this.$content[this.$lang].projects.find(({ n }) => n === parseInt(this.$route.params.id)).link
    },
    previousProject(){
      if( this.$content[this.$lang].projects.findIndex(({ n }) => n === parseInt(this.$route.params.id)) > 0 ){
        this.$router.push({ name: 'project', params: { id: this.$content[this.$lang].projects[(this.$content[this.$lang].projects.findIndex(({ n }) => n === parseInt(this.$route.params.id)) - 1)].n } })
      }
      else{
        this.$router.push({ name: 'project', params: { id: this.$content[this.$lang].projects[ this.$content[this.$lang].projects.length - 1 ].n } })
      }
    },
    nextProject(){
      if( this.$content[this.$lang].projects.findIndex(({ n }) => n === parseInt(this.$route.params.id)) < (this.$content[this.$lang].projects.length - 1) ){
        this.$router.push({ name: 'project', params: { id: this.$content[this.$lang].projects[(this.$content[this.$lang].projects.findIndex(({ n }) => n === parseInt(this.$route.params.id)) + 1)].n } })
      }
      else{
        this.$router.push({ name: 'project', params: { id: this.$content[this.$lang].projects[0].n } })
      }
    },
    animateLoad(){
      gsap.fromTo(".container-paragraph .paragraph", {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        duration: this.animationDuration,
        delay: this.animationDelay
      })
    },
    animateRefresh(){
      gsap.fromTo(".container-paragraph .paragraph", {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        duration: this.animationDuration,
        delay: this.animationDelay
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';
.project-page{
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  .project-info{
    position: relative;
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 40px;
    .container-carousel{
      position: relative;
      height: 50%;
      border-bottom: 1px solid $true-black;
      padding: 8px;
    }
    .project-showcase{
      position: relative;
    }
    .project-content{
      position: relative;
      width: 100%;
      height: 50%;
      .info-header{
        display: flex;
        height: 40px;
        flex-direction: row;
        .info{
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 1px solid $true-black;
          padding: 5px;
          @include title-small;
        }
        .info:last-child{
          border-right: none;
        }
        .link{
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: $themontegreen;
          color: $true-white;
          padding: 5px;
          text-decoration: none;
          @include title-small;
        }
        .link:hover,:active{
          background-color: $true-black;
          color: $true-white;
        }
      }
      .container-paragraph{
        position: relative;
        height: calc(100% - 56px);
        border-top: 1px solid $true-black;
        padding: 8px 16px;
        .paragraph{
          position: relative;
          height: 100%;
          overflow: scroll;
          @include paragraph;
        }
      }
    }
  }
}

/* Mobile (Landscape) */
@media screen and (max-width: 1200px) and (orientation: landscape){
  .project-page{
    .project-info{
      flex-direction: row;
      height: calc(100vh - 80px);
      .container-carousel{
        width: 45%;
        height: calc(100% - 16px);
      }
      .project-content{
        width: 55%;
        height: 100%;
        border-left: 1px solid $true-black;
      }
    }
  }
}

/* Tablet Landscape */
@media screen and (min-width: 1200px) and (orientation: landscape){
  .project-page{
    .project-info{
      flex-direction: row-reverse;
      height: calc(100vh - 80px);
      .container-carousel{
        width: 60%;
        height: calc(100% - 16px);
        border-left: 1px solid $true-black;
      }
      .project-content{
        width: 40%;
        height: 100%;
        border-left: 1px solid $true-black;
      }
    }
  }
}

/* 1920 x 1080 */
@media screen and (min-width: 1366px) and (orientation: landscape){
  .project-page{
    .project-info{
      .container-carousel{
        width: 65%;
      }
      .project-content{
        width: 35%;
      }
    }
  }
}
</style>