<template>
  <div class="project-page">
    <ProjectTopBar :title="title"/>
    <div class="project-info">
      <div class="container-carousel">
        <ProjectShowcase :media="media"/>
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
        </div>
        <div class="container-paragraph">
          <div class="paragraph" v-html="paragraph">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectTopBar from '../components/ProjectTopBar.vue'
import ProjectShowcase from '../components/ProjectShowcase.vue'
export default {
  data(){
    return{
      title: String,
      year: String,
      categories: Array,
      subject: String,
      paragraph: String,
      media: Array
    }
  },
  components: {
    ProjectTopBar,
    ProjectShowcase
  },
  created(){
    this.title = this.$content[this.$lang].projects.find(({ n }) => n === parseInt(this.$route.params.id)).title
    this.year = this.$content[this.$lang].projects.find(({ n }) => n === parseInt(this.$route.params.id)).year
    this.categories = this.$content[this.$lang].projects.find(({ n }) => n === parseInt(this.$route.params.id)).categories
    this.subject = this.$content[this.$lang].projects.find(({ n }) => n === parseInt(this.$route.params.id)).subject
    this.paragraph = this.$content[this.$lang].projects.find(({ n }) => n === parseInt(this.$route.params.id)).description
    this.media = this.$content[this.$lang].projects.find(({ n }) => n === parseInt(this.$route.params.id)).media
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
          @include title-small;
          &:last-child{
            border-right: none;
          }
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