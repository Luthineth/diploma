<template>
  <v-app-bar
      class="navbar"
      density="compact"
      flat
  >
    <v-spacer class="d-none d-xl-flex"/>
    <v-app-bar-nav-icon
        class="navbar__icon d-flex d-xl-none"
        @click="isDrawerOpened = !isDrawerOpened"
    />
    <img
        src="../../assets/logo/logo.png"
        alt="Logika logo"
    >
    <v-toolbar-items class="ml-xl-7 ml-xxl-7 d-none d-xl-flex align-center ga-7 font-weight-medium">
      <router-link
          class="d-none d-xl-flex"
          to="/"
          prepend-icon="mdi-connection"
      >
        Подключиться
      </router-link>
      <about-meter v-if="isDeviceConnected"/>
      <router-link
          v-if="isDeviceConnected"
          v-for="item in routesGroup"
          :key="item"
          class="d-none d-xl-flex"
          :to="item.route"
      >
        {{ item.title }}
      </router-link>
      <about-app/>
    </v-toolbar-items>
    <v-spacer class="d-none d-xl-flex"/>
  </v-app-bar>
  <nav-drawer
      v-model="isDrawerOpened"
      :routes-group="routesGroup"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavDrawer from "./NavDrawer.vue";
import AboutApp from "@/components/AboutApp.vue";
import AboutMeter from "@/components/AboutMeter.vue";

const routesGroup = [
  {title: 'Текущие', route: '/params_current', icon: 'chart-timeline-variant' },
  {title: 'Тотальные', route: '/params_total', icon: 'chart-line-variant' },
  {title: 'Настроечные', route: '/params_adjustable', icon: 'tools' },
  {title: 'Интервальные архивы', route: '/archive_interval', icon: 'archive' },
  {title: 'Контрольный архив', route: '/archive_control', icon: 'archive-alert' },
  {title: 'Архив НС', route: '/archive_ns', icon: 'alert-rhombus' },
  {title: 'Архив изменений БД', route: '/archive_database', icon: 'database-clock' },
];

const isDrawerOpened = ref<boolean>(false);
const isDeviceConnected = ref<boolean>(true);

let mql = window.matchMedia("(min-width: 1920px)");
mql.addEventListener("change", () => {
  isDrawerOpened.value = false;
});
</script>

<style scoped lang="scss">
@import "../../styles/colorVars";

a, .button_open-dialog {
  color: $lgk-black;
  text-decoration: none;
}

.router-link-active {
  color:  $lgk-green;
  background-color: $lgk-green-transparent;
}

.navbar__icon {
  color: $lgk-gr;
}
</style>
