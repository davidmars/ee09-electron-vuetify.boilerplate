<template>
<div>
  <h1>Home</h1>
  <v-divider></v-divider>
  <v-row class="my-5">
    <v-col lg="4">
      <admin-access/>
    </v-col>
    <v-col lg="4">
      <choose-language/>
    </v-col>
  </v-row>
</div>
</template>

<script>
import ChooseLanguage from "@/components/choose-language";
import AdminAccess from "@/components/admin-access";
export default {
  name: "home",
  components: {AdminAccess, ChooseLanguage}
}
</script>
