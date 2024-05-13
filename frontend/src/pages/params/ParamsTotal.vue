<template>
  <div class="d-flex flex-column justify-center align-center">
    <div class="d-flex justify-center align-center ga-4 mb-7">
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

    <c-param-table
        v-if="currentTab == 'common'"
        :is-change-allowed="true"
        @update-value="console.log('hi')"
    />
    <c-param-table
        v-if="currentTab == 'tv1'"
        :is-change-allowed="true"
        @update-value="console.log('hi')"
    />
    <c-param-table
        v-if="currentTab == 'tv2'"
        :is-change-allowed="true"
        @update-value="console.log('hi')"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CParamTable from "@/components/common/CParamTable.vue";

const currentTab = ref<string>('common')

const tabs = ref<object[]>([
  {name: 'ОБЩ', value: 'common'},
  {name: 'ТВ1', value: 'tv1'},
  {name: 'ТВ2', value: 'tv2'},
])
</script>

<style scoped lang="scss">
@import "@/styles/colorVars";

.tab_active {
  color: $lgk-green;
}
</style>
