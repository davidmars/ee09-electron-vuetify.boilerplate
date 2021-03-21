<template>
  <v-app>
    <v-container v-if="ready">
      <h1>Hello world</h1>
      <v-divider></v-divider>
      <v-row class="my-5">
        <v-col lg="4">
          <admin-access/>
        </v-col>
        <v-col lg="4">
          <choose-language/>
        </v-col>
      </v-row>
    </v-container>

    <!-- l'admin qui ne s'affiche que si on lui demande -->
    <admin-dialog/>

  </v-app>
</template>

<script>
import AdminDialog from "./ee09/json-db-ui/admin-dialog"
import AdminAccess from "@/components/admin-access";
import ChooseLanguage from "@/components/choose-language";
export default {
  name: 'App',
  components: {
    ChooseLanguage,
    AdminAccess,
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
