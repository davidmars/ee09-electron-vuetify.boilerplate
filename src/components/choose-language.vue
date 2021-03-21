<template>
<v-card >
  <v-card-title>Choisissez votre langue</v-card-title>
  <v-divider></v-divider>
  <v-card-text>
    <v-list>
      <v-list-item-group>
        <v-list-item
            v-for="lang of $db.settings.languages"
            :key="lang.code"
            @click="$db.settings.currentLanguage=lang"
            active-class=""
            v-ripple="null"
        >
          <v-list-item-avatar>
            <v-img :src="lang.flagImg"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="lang.label"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon v-if="lang.isCurrent">mdi-check</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>



    <!---->
    <v-divider></v-divider>
    <h3 class="my-5">Exemples d'utilisation des langues</h3>

    <h4>Avec le module i18n</h4>
    <p>
      {{ $t("message.hello") }}
      <br>
      <span>
        Voir <code>src/plugins/texts.json</code>
      </span>
    </p>

    <h4>Depuis un enregistrement de la base de données</h4>
    <p v-if="exempleDePage">
      {{ exempleDePage.title }} <i>{{ exempleDePage.texte }}</i>
      <br>
      <span>
        Vous pouvez modifier cet enregistrement <a href="#" @click="$dbUi.displayRecord(exempleDePage)">ici</a>
      </span>
    </p>


  </v-card-text>
  <v-divider></v-divider>
  <v-card-actions>
    <span v-if="$db.settings.currentLanguage">
      La langue courante est
      <b>{{$db.settings.currentLanguage.label}}</b>
    </span>

  </v-card-actions>
</v-card>
</template>

<script>
import PageSimple from "@/models/PageSimple";
export default {
name: "choose-language",
  data(){
    return {
      /**
       * @type {null|PageSimple}
       */
      exempleDePage:null
    }
  },
  mounted() {
    this.exempleDePage=this.$db.findOne("pagesimple","name","Exemple de page");
    if(!this.exempleDePage){
      this.exempleDePage=new PageSimple();
      this.exempleDePage.name="Exemple de page";
      this.exempleDePage.title["fr"]="Bonjour";
      this.exempleDePage.texte["fr"]="Monde";
      this.exempleDePage.title["en"]="Hello";
      this.exempleDePage.texte["en"]="World";
      this.exempleDePage.title["es"]="Holà";
      this.exempleDePage.texte["es"]="Mundo";
      this.$db.store(this.exempleDePage);
    }
  }
}
</script>

<style scoped>

</style>