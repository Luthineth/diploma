<template>
  <v-navigation-drawer
      v-model="isDrawerOpened"
      width="272"
      temporary
  >
    <v-list
        class="d-flex flex-column h-100"
        density="compact"
        nav
    >
      <div class="d-flex flex-column">
        <h2 class="logika-title">Logika libs</h2>
        <a
            class="logika-link"
            href="https://логика.рф/"
            target="_blank"
        >
          Перейти на сайт фирмы
        </a>
      </div>
      <v-divider class="my-3"/>
      <v-list-item
          to="/"
          prepend-icon="mdi-connection"
          title="Подключиться"
      />
      <about-meter
          v-if="isConnected"
          :icon="'mdi-cellphone-information'"
      />
      <v-list-item
          v-for="item in routesGroup"
          :key="item.title"
          :prepend-icon="'mdi-' + item.icon"
          :title="item.title"
          :disabled="!isConnected"
          :to="item.route"
      />
      <about-app :icon="'mdi-help-circle'"/>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import AboutMeter from "../AboutMeter.vue";
import AboutApp from "../AboutApp.vue";

const props = withDefaults(
    defineProps<{
      modelValue: boolean;
      routesGroup: object[];
    }>(),
    {
      modelValue: false,
      routesGroup: () => [],
    },
);

const isDrawerOpened = ref<boolean>(false);

const isConnected = ref<boolean>(true);

const emit = defineEmits(['update:modelValue']);

watch(() => props.modelValue, (newValue) => {
  isDrawerOpened.value = newValue;
});

watch(isDrawerOpened, (newValue) => {
  emit('update:modelValue', newValue);
});

onMounted(() => {
  isDrawerOpened.value = props.modelValue;
});
</script>

<style scoped lang="scss">
@import "../../styles/colorVars";

.logika-link,
.logika-title {
  color: $lgk-green;
}

:deep(.v-list-item--nav .v-list-item-title) {
  font-size: 15px;
}

:deep(.v-list-item--active) {
  color: $lgk-green;
  .v-list-item-title {
    color: $lgk-green;
  }
}
</style>
