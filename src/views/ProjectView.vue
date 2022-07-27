<template>
  <div class="project-top-bar">
    <ProjectTopBar :title="title"/>
  </div>
</template>

<script>
import ProjectTopBar from '../components/ProjectTopBar.vue';
export default {
  data(){
    return{
      title: String
    }
  },
  components: {
    ProjectTopBar
  },
  created(){
    this.title = this.$content[this.$lang].projects[this.$route.params.id].title
  }
}
</script>