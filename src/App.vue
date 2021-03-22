<template>
  <v-app>
    <v-app-bar
        app
        fixed
        color="white"
        elevate-on-scroll
    >
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/videos">Vidéos</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid v-if="ready" class="pt-10">
        <router-view/>
      </v-container>
    </v-main>

    <!-- l'admin qui ne s'affiche que si on lui demande -->
    <admin-dialog/>

    <v-footer app>
      <v-spacer></v-spacer>
      <span class="caption">{{$db.utils.date.now("yyyy")}}</span>
    </v-footer>

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
    ready:false
  }),
  mounted() {
    let me=this;
    document.title="Youpi !";
        setTimeout(function(){
          me.ready=true
        },1000)
  },
  watch: {
    '$route' (to, from) {
      console.log("change route",from,to);
      switch (to.name){
        case "video":
          this.$layout.currentPage=this.$db.getByUid(to.params.uid)
          break;
      }
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
