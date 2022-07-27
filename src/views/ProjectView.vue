<template>
  <div class="project-top-bar">
    <ProjectTopBar :title="title"/>
    <div class="project-info">
      <div class="container-carousel">
        carousel
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
    this.title = this.$content[this.$lang].projects[this.$route.params.id].title
    this.year = this.$content[this.$lang].projects[this.$route.params.id].year
    this.categories = this.$content[this.$lang].projects[this.$route.params.id].categories
    this.subject = this.$content[this.$lang].projects[this.$route.params.id].subject
    this.paragraph = this.$content[this.$lang].projects[this.$route.params.id].description
    this.media = this.$content[this.$lang].projects[this.$route.params.id].media
  }
}
</script>