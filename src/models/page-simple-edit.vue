<template>
  <div>
    <v-text-field
        filled
        label="name"
        v-model="record.name"
    />
    <translated-text-field
        label="Titre"
        :field="record.title"
        col="4"
    />

    <translated-textarea-field
      label="Texte"
      :field="record.texte"
      col="4"/>



    <code-preview
        title="Données"
        :code="this.record"
        class="my-5"
    />
  </div>
</template>

<script>
import TranslatedTextField from "@/ee09/json-db-ui/fields/translated-text-field";
import CodePreview from "@/ee09/json-db-ui/code-preview";
import TranslatedTextareaField from "@/ee09/json-db-ui/fields/translated-textarea-field";

export default {
  name: "page-simple-edit",
  components: {TranslatedTextareaField, CodePreview,  TranslatedTextField},

  props:{
    record:{
      type:Object
    }
  },computed:{
    /**
     *
     * @return {PageSimple}
     */
    recordObject(){
      return this.record;
    }
  }
}
</script>