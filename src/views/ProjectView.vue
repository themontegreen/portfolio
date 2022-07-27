<template>
  <div class="project-top-bar">
    Project view {{$route.params.id}}
    <ProjectTopBar/>
  </div>
</template>

<script>
import ProjectTopBar from '../components/ProjectTopBar.vue';
export default {
  data(){
    return{
    }
  },
  components: {
    ProjectTopBar
  },
  mounted(){
  }
}
</script>