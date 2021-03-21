<template>
  <v-card>
    <v-card-title>
      EE09 Admin
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      L'admin EE09 permet de gérer des enregistrements dans une database locale JSON
    </v-card-text>
    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn text @click="$dbUi.displayRecords('video')">
        <v-icon left>{{$db.settings.getModelType('video').icon}}</v-icon>
        Vidéos ({{$db.getListType('video').length}})
      </v-btn>

      <v-btn text @click="$dbUi.displayRecords('file')">
        <v-icon left>{{$db.settings.getModelType('file').icon}}</v-icon>
        Fichiers ({{$db.getListType('file').length}})
      </v-btn>

      <v-btn icon @click="$dbUi.displaySettings(true)">
        <v-icon>mdi-cog</v-icon>
      </v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "admin-access"
}
</script>

<style scoped>

</style>