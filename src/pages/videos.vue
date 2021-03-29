<template>
<div>
  <h1>Vidéos</h1>
  <hr>
  <v-row class="my-5">
    <v-col cols="4"
           v-for="vdo of $db.getListType('video')"
          :key="vdo.uid">
      <v-card :to="`/video/${vdo.uid}`">
        <v-img
            :src="vdo.thumbnail.resize().inside(400,400).jpg(80).href()"
            height="200px"
        ></v-img>
        <v-card-title>
          {{vdo.title}}
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>

</div>
</template>

<script>
export default {
name: "videos"
}
</script>

<style scoped>

</style>