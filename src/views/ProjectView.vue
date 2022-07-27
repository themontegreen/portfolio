<template>
  Project view {{$route.params.id}}
</template>

<script>
export default {
  mounted() {
    // get id parameter
    console.log(this.$route.params.id)
  }
}
</script>