<template>
  <div class="bg-theme-white rounded-16 hero">
    <v-row class="h-100">
      <v-col cols="12" md="6" class="h-100">
        <v-img
          src="https://placehold.co/600x400"
          height="430"
          lazy-src="https://placehold.co/600x400"
        ></v-img>
        <div class="d-flex justify-center mt-5">{{ $t("welcome") }}1</div>
      </v-col>
      <v-col cols="12" md="6" class="h-100">
        <v-img
          src="https://placehold.co/600x400"
          height="430"
          lazy-src="https://placehold.co/600x400"
        ></v-img>
        <div class="d-flex justify-center mt-5">{{ $t("welcome") }}2</div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify";

const { xs } = useDisplay();
</script>

<style lang="scss" scoped>
.hero {
  padding: 60px;
}
</style>
