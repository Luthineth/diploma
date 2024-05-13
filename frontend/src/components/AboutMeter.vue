<template>
  <v-dialog v-model="dialogVisible" max-width="500">
    <template #activator="{ props }">
      <v-list-item
          v-bind="props"
          :prepend-icon="icon"
          title="О приборе"
      />
    </template>
    <v-card
        title="О приборе"
    >
      <template v-slot:text>
        <div>{{ meterData.name }}</div>
        <div>{{ meterData.version }}</div>
        <v-divider class="my-3"/>
        <div>Заводской номер: {{ meterData.series }}</div>
        <div>ИД: {{ meterData.id }}</div>
        <div>Контрольная сумма БД: {{ meterData.sum }}</div>
      </template>
      <v-card-actions class="d-flex justify-center align-center">
        <v-btn @click="dialogVisible = false">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import meterInfo from "@/components/fileExamples/meter-info.json";

withDefaults(
    defineProps<{
      meterData: object;
      icon?: string;
    }>(),
    {
      meterData: () => meterInfo,
      icon: '',
    },
)

const dialogVisible = ref<boolean>(false);
</script>

<style scoped lang="scss">
@import "@/styles/colorVars";

.v-btn {
  color: $lgk-green;
}
</style>
