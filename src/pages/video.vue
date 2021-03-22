<template>
<div>
  <h1>Vidéo</h1>
  <hr>
  <h2>{{record.name}}</h2>
  <h2>{{record.title}}</h2>
  <v-img :src="record.thumbnail.href" contain max-height="200px"></v-img>
  <video-plyr
      v-if="record.video.getErrors().length===0"
      :options="{}"
      :source="record.video.getPlyrSource()"
  />


</div>
</template>

<script>
import VideoPlyr from "ee09/src/ee09/vue/video-plyr";
export default {
  name: "videos",
  components: {
    VideoPlyr,
    //VuePlyr
  },
  computed:{
    /**
     *
     * @return {Video}
     */
    record(){
      return this.$layout.currentPage
    }
  }
}
</script>

<style scoped>

</style>