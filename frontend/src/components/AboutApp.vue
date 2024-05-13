<template>
  <v-dialog v-model="dialogVisible" max-width="500">
    <template #activator="{ props }">
      <v-list-item
          v-bind="props"
          class="mt-auto"
          :prepend-icon="icon"
          title="О приложении"
      />
    </template>
    <v-card title="О приложении">
      <v-card-text
          v-for="(value, key) in aboutApp"
          :key="key"
      > {{ value }}</v-card-text>
      <v-card-actions class="d-flex justify-center align-center">
        <v-btn @click="dialogVisible = false">ОК</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import aboutApp from "@/components/fileExamples/about-app.json"

withDefaults(
    defineProps<{
      icon?: string;
    }>(),
    {
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
