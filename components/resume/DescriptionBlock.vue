<template>
  <div>
    <p class="text-2xl font-semibold text-white">Pikabu отклик</p>
    <p class="mb-6">Отклик с портала pikabu.</p>
    <p>Дата рождения: {{birthDate}}</p>
    <p class="mb-6">{{getNationality}}</p>
    <p class="mb-6">Сопроводительное письмо</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  description?: string;
  birthDate?: string;
}>();

const getNationality = computed((): string => {
  const value = props.description;
  return value?.split('\r\n').find((el) => el.includes('Гражданство'))
})
</script>

<style scoped>

</style>