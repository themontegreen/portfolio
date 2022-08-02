<template>
  <div>
    <LoadingIntro v-if="loadingAnimation" v-on:complete="complete"/>
    <RouterView v-else/>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import LoadingIntro from './components/LoadingIntro.vue'
export default {
  components: {
    LoadingIntro
  },
  data(){
    return{
      loadingAnimation: true
    }
  },
  methods: {
    complete(){
      this.loadingAnimation = false
    }
  }
}
</script>