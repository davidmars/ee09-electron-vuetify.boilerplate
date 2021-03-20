<template>
  <div class="release-updater caption">
    {{$layout.version}}
    <span v-if="$releaseUpdater.nextVersion"> | Nouvelle version {{$releaseUpdater.nextVersion}} </span>
    <span v-if="$releaseUpdater.downloadProgress"> | {{$releaseUpdater.downloadProgress}}%</span>
    <v-btn x-small
           class="mx-5"
           @click="$releaseUpdater.updateAndRestart()"
           v-if="$releaseUpdater.available">
      {{$releaseUpdater.message}}
    </v-btn>
  </div>
</template>

<script>
export default {
name: "release-updater"
}
</script>
