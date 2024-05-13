<template>
  <v-app>
    <nav-bar/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import './styles/index.scss'
import NavBar from "./components/NavBar/NavBar.vue";
</script>
