<template>
  <v-app-bar
    color="background"
    elevation="0"
    scroll-behavior="hide"
    class="px-3 nav"
  >
    <v-container>
      <v-row>
        <nuxt-link class="nav-link" :to="localePath('/')"> logo </nuxt-link>
        <v-btn @click="changeLan('en')">en</v-btn>
        <v-btn @click="changeLan('ar')">ar</v-btn>
        <v-spacer></v-spacer>
        <nuxt-link :to="localePath('/')"> Home </nuxt-link>
        <nuxt-link :to="localePath('/about')"> about </nuxt-link>
        <div class="d-flex alint-center ga-2 justify-end">
          <img width="40" :src="User" alt="User" />
          <img width="40" :src="NavBars" alt="NavBars" />
          <v-btn @click="toggleTheme">toggle theme</v-btn>
        </div>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import User from "~/assets/imgs/user.svg";
import NavBars from "~/assets/imgs/nav-bars.svg";

import { useTheme, useLocale } from "vuetify";
const { setLocale, locale } = useI18n();
const { current } = useLocale();
const theme = useTheme();

current.value = locale.value;
const changeLan = (locale) => {
  current.value = locale;
  setLocale(locale);
};
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<style lang="scss" scoped>
.nav {
  .nav-link {
    width: 160px;
  }
}
</style>
