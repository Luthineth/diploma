<template>
  <div class="block_bordered pa-3">
    <v-text-field
        v-model="search"
        label="Поиск"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
    />
    <v-data-table
        :headers="headers"
        :items="items"
        :mobile="isMobileVariant"
        :header-props="{ style: { color: '#006f34' } }"
        :search="search"
        items-per-page="5"
        fixed-header
        hover
        @click:row="onOpenOverlay"
    />
  </div>
  <v-overlay
      v-model="overlay"
      v-if="currentItem"
      class="d-flex align-center justify-center"
      @update:model-value="newItemValue = ''"
  >
    <v-card
        :title="currentItem.name"
        :subtitle="currentItem.description"
        :text="!isChangeAllowed ? currentItem.value : ''"
    >
      <v-text-field
          v-if="isChangeAllowed"
          v-model="newItemValue"
          class="px-3"
          variant="underlined"
          :label="currentItem.value"
      />
      <v-card-actions class="d-flex justify-center">
        <v-btn
            v-if="isChangeAllowed"
            :disabled="!canSubmit"
            @click="emit('updateValue')"
        >
          Записать
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import paramsSample from "@/components/fileExamples/params-sample.json";

const props = withDefaults(
    defineProps<{
      paramsData: object[];
      isChangeAllowed?: boolean;
    }>(),
    {
      paramsData: () => paramsSample,
      isChangeAllowed: false,
    },
);

const emit = defineEmits(['updateValue']);

const overlay = ref<boolean>(false);

const isMobileVariant = ref<boolean>(false);

const search = ref<string>('');

const currentItem = ref<object>();

const newItemValue = ref<string>('');

const canSubmit = computed(() => newItemValue.value.trim() !== '');

let mql = window.matchMedia("(max-width: 676px)");
mql.addEventListener("change", () => {
  isMobileVariant.value = !isMobileVariant.value
});

const onOpenOverlay = (event, row): void => {
  overlay.value = true;
  currentItem.value = row.item;
};

const headers = [
  { title: 'Параметр', value: 'name' },
  { title: 'Значение', value: 'value' },
  { title: 'Единица измерения', value: 'unit' },
  { title: 'Описание', value: 'description' },
];

const items = ref<object[]>(props.paramsData);
</script>
