<script setup lang="ts">
const { alert, alertMessage, alertType } = storeToRefs(useAlertStore());
</script>
<template>
  <div class="text-center">
    <v-snackbar v-model="alert" :color="alertType" location="right top">
      <v-icon v-if="alertType === 'success'">mdi-check</v-icon>
      <v-icon v-else>mdi-alert</v-icon>
      {{ alertMessage }}
    </v-snackbar>
  </div>
</template>

<style scoped></style>
