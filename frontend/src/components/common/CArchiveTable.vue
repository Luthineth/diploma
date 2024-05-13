<template>
  <div class="block_bordered mt-7 pa-3">
    <v-text-field
        v-model="search"
        label="Поиск"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
    />
    <v-data-table
        v-model:expanded="expanded"
        :items="items"
        :search="search"
        item-value="name"
        :mobile="isMobileVariant"
        items-per-page="5"
        show-expand
        hover
    >
      <template v-slot:headers/>
      <template v-slot:expanded-row="{ columns, item }">
        <tr>
          <td
              class="text-decoration-underline cursor-pointer"
              :colspan="columns.length"
              @click="emit('onShowTableOverlay', item)"
          >
            Открыть таблицу параметров
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import archiveSample from "@/components/fileExamples/archive-sample.json";

const props = withDefaults(
    defineProps<{
      archiveData: object[];
    }>(),
    {
      archiveData: () => archiveSample,
    },
)

const emit = defineEmits(['onShowTableOverlay']);

const expanded = ref<[]>([]);

const search = ref<string>('');

const isMobileVariant = ref<boolean>(false);

let mql = window.matchMedia("(max-width: 676px)");
mql.addEventListener("change", () => {
  isMobileVariant.value = !isMobileVariant.value
});

const items = ref<object[]>(props.archiveData);
</script>
