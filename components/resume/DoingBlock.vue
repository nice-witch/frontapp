<template>
  <div>
    <p class="mb-2">Дела:</p>

    <div class="flex gap-2">
      <ChipGreen
          v-for="doing in doings"
          :key="doing.label"
          :chip="doing"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import ChipGreen from "~/components/ui/ChipGreen.vue";

const doings = [
  {
    label: 'Запланировать собеседование',
    labelDone: 'Собеседование запланировано',
    done: true,
    active: true,
  },
  {
    label: 'Создать видеозвонок',
    labelDone: 'Видеозвонок заплонирован',
    done: false,
    active: true,
  },
  {
    label: 'Запланировать событие',
    labelDone: 'Событие запланировано',
    done: false,
    active: false,
  },
  {
    label: 'Отправить запрос',
    labelDone: 'Запрос отправлен',
    done: false,
    active: true,
  },
]
</script>

<style scoped>

</style>