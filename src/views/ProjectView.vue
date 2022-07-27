<template>
  <div class="project-top-bar">
    Project view {{$route.params.id}}
    <div class="name-project">{{title}}</div>
    <router-link
      class="close-btn"
      :to="{name: 'home'}"
    >
      <img style="width: 18px;" src="/img/x-button.png" alt="">
    </router-link>

  </div>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
  }
}
</script>