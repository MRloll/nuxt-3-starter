<template>
  <v-app>
    <v-layout>
      <v-main>
        <NuxtLoadingIndicator />
        <common-nav-bar />
        <v-container>
          <slot></slot>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>
