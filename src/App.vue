<template>
  <v-app>
    <v-container>
      <h1>Hello world</h1>
      <v-divider></v-divider>
      <v-row class="my-5">
        <v-col lg="4">
          <v-card>
            <v-card-title>
              EE09 Admin
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              L'admin EE09 permet de gérer des enregistrements dans une database locale JSON
            </v-card-text>
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
        </v-col>
      </v-row>
    </v-container>

    <admin-dialog/>

  </v-app>
</template>

<script>
import AdminDialog from "./ee09/json-db-ui/admin-dialog"
export default {
  name: 'App',
  components: {
    AdminDialog
  },
  data: () => ({
  }),
  mounted() {
    document.title="Youpi !"
  },
  watch: {
    '$route' (to, from) {
      console.log("change route",from,to);
    }
  }
};
</script>
<style lang="less">
@import "~common-fonts/ibm-plex/all.css";
body,html{
  overflow: auto;
  background-color: #fee;
  h1{
    font-family: 'IBM Plex Sans', cursive;
  }

}
</style>
