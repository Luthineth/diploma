<template>
  <div class="d-flex flex-column justify-center align-center">
    <div class="d-flex justify-center align-center ga-4">
      <v-btn
          v-for="tab in tabs"
          :key="tab.value"
          :variant="currentTab === tab.value ? 'tonal' : 'text'"
          :class="currentTab === tab.value ? 'tab_active' : ''"
          @click="currentTab = tab.value"
      >
        {{ tab.name }}
      </v-btn>
    </div>
    <c-archive-table
        v-if="currentTab == 'tv1'"
        @on-show-table-overlay="onOpenOverlay"
    />
    <c-archive-table
        v-if="currentTab == 'tv2'"
        @on-show-table-overlay="onOpenOverlay"
    />
  </div>
  <v-overlay
      class="d-flex justify-center align-center"
      v-model="isParamTableShown"
  >
    <c-param-table/>
  </v-overlay>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CArchiveTable from "@/components/common/CArchiveTable.vue";
import CParamTable from "@/components/common/CParamTable.vue";

const currentTab = ref<string>('tv1');

const tabs = ref<object[]>([
  {name: 'ТВ1', value: 'tv1'},
  {name: 'ТВ2', value: 'tv2'},
]);

const isParamTableShown = ref<boolean>(false);

const currentOverlayItem = ref({});

const onOpenOverlay = (item: object) => {
  currentOverlayItem.value = item;
  isParamTableShown.value = true;
};
</script>

<style scoped lang="scss">
@import "@/styles/colorVars";

.tab_active {
  color: $lgk-green;
}
</style>