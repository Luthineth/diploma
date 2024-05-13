<template>
  <div class="d-flex flex-column justify-center align-center">
    <h1 class="error__title">404</h1>
    <h2>Либо такая страница еще не существует, либо вы потеряли соединение к приборам</h2>
    <v-btn
        class="mt-5"
        variant="outlined"
        @click="$router.push('/')"
    >
      Вернуться на главную страницу
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Handjet:wght@100&display=swap');
@import "@/styles/colorVars";

.error__title{
  font-family: "Handjet", sans-serif;
  font-size: 15rem;
  color: $lgk-green;
}
</style>