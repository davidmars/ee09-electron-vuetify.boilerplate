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
    <field-video
        label="Vidéo"
        :field="record.video"
    />

    <code-preview
        title="Données"
        :code="this.record"
        class="my-5"
    />
  </div>
</template>

<script>
import TranslatedTextField from "@/ee09/json-db-ui/fields/translated-text-field";
import FieldVideo from "@/ee09/json-db-ui/fields/field-video";
import CodePreview from "@/ee09/json-db-ui/code-preview";

export default {
  name: "video-edit",
  components: {CodePreview, FieldVideo, TranslatedTextField},

  props:{
    record:{
      type:Object
    }
  },computed:{
    /**
     *
     * @return {Video}
     */
    recordObject(){
      return this.record;
    }
  }
}
</script>