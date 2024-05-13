<template>
  <div class="h-100 d-flex align-center justify-center">
    <v-card
        variant="flat"
        width="500px"
    >
      <v-card-text class="mb-0 pb-0">
        <v-text-field
            v-model="ipAddress"
            :rules="[rules.required]"
            label="IP адрес"
            type="text"
            variant="outlined"
        />
        <v-text-field
            v-model="port"
            :rules="[rules.required]"
            label="Порт"
            type="number"
            variant="outlined"
        />
      </v-card-text>
      <v-card-actions class="d-flex flex-column align-start pa-0 ma-0">
        <v-radio-group
            v-model="connectionType"
            label="Выбор соединения"
            inline
        >
          <v-radio label="TCP" value="TCP"/>
          <v-radio label="UDP" value="UDP"/>
        </v-radio-group>
        <v-checkbox
            label="Увеличенное время ожидания ответа"
            class="ml-1"
        />
        <v-btn
            color="black"
            class="w-50 align-self-center"
            variant="outlined"
            :disabled="!canSubmit"
            prepend-icon="mdi-connection"
            @click="onEstablishConnection"
        >
          Подключиться
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
  <v-overlay
      v-model="isModalShown"
      class="align-center justify-center"
  >
    <v-card
        :text="modalText"
        :title="modalTitle"
        max-width="400px"
    />
  </v-overlay>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { validateIPAddress } from "@/utils/utils.ts";

const ipAddress = ref<string>('');
const port = ref<number>(0);

const rules = {
      required: value => !!value || 'Заполните поле!',
};

const isModalShown = ref<boolean>(false);

const connectionType = ref<string>('');

const modalText = ref<string>('');

const modalTitle = ref<string>('');

const onEstablishConnection = (): void => {
  if (validateIPAddress(ipAddress.value) && port.value >= 1 && port.value <= 65535) {
    connectToServer();
    modalText.value = 'Для просмотра доступной информации откройте меню слева и выберите нужную вкладку';
    modalTitle.value = 'Соединение установлено';
  } else {
    modalText.value = 'Некорректные значения IP-адреса или порта';
    modalTitle.value = 'Ошибка в данных';
  }
  isModalShown.value = true;
};

const canSubmit = computed(() =>
    ipAddress.value.trim() !== '' && port.value && connectionType.value.trim() !== ''
);

const connectToServer = () => {
  //mock
  console.log(ipAddress.value);
  console.log(port.value);
  console.log(connectionType.value);
};
</script>

<style scoped lang="scss">
@import "@/styles/colorVars";

:deep(.v-selection-control__wrapper) {
  color: $lgk-green;
}
</style>
