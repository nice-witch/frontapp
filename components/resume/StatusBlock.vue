<template>
  <div>
    <p class="mb-2">Статус рассмотрения:</p>

    <div class="flex gap-1 flex-wrap items-stretch">
      <ChipStatus
          v-for="status in statuses"
          :key="status.label"
          :chip-status="status"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import ChipStatus from "~/components/ui/ChipStatus.vue";

const statuses = [
  {
    label: 'Новое',
    done: true,
  },
  {
    label: 'Просмотрено',
    done: true,
  },
  {
    label: 'Отправлено приглашение',
    done: false,
  },
  {
    label: 'Назначено собеседование',
    done: false,
  },
  {
    label: 'Не дошел',
    done: false,
  },
  {
    label: 'Проведено собеседование',
    done: false,
  },
  {
    label: 'Ожидание ответа соискателя',
    done: false,
  },
  {
    label: 'Принятие решения',
    done: false,
  },
  {
    label: 'Принят',
    done: false,
  },
  {
    label: 'Отклонено/Отказ',
    done: false,
  },
  {
    label: 'Архивировано',
    done: false,
  },
]
</script>

<style scoped>

</style>