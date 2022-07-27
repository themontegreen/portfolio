<template>
  <HeroParagraph/>
  <ScrollableArea/>
  <MenuFooter/>
</template>

<script>
import HeroParagraph from '../components/HeroParagraph.vue'
import ScrollableArea from '../components/ScrollableArea.vue'
import MenuFooter from '../components/MenuFooter.vue'
export default {
  data(){
    return{
    }
  },
  components: {
    HeroParagraph,
    ScrollableArea,
    MenuFooter
  },
  mounted(){
    // console.log(this.$content[this.$lang])
  }
}
</script>