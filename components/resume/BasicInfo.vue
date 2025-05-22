<template>
  <div class="flex gap-4 text-base">
    <div class="w-[215px] mr-3">
      <img :src="`https://dev.jobcart.ru/${photo}`" alt="avatar" class="avatar">
    </div>
    <div>
      <div class="flex items-center gap-2 text-2xl font-semibold mb-4">
        <p class="text-white">{{name}}</p>
        <UIcon name="ic:twotone-open-in-new" :size="15" class="text-black"/>
      </div>

      <div class="flex text-blue-500 gap-3">
        <div class="flex items-center">
          <p>
            <span>Кандидат на вакансию:</span> Жадный благотворитель
          </p>
          <UIcon name="ic:twotone-open-in-new" :size="15" class="text-black"/>
        </div>

        <p>({{responseDate}} Отклик)</p>
      </div>

      <p>Просмотрено</p>
      <p>{{age || 'Возраст не указан'}}</p>
      <div class="flex items-center text-blue-500">
        <UIcon name="noto-v1:telephone-receiver" />
        <p>+{{phone}}</p>
        <div class="ml-4 flex gap-2">
          <UIcon name="logos:whatsapp-icon" :size="19"/>
          <UIcon name="simple-icons:viber"  :size="19"/>
          <UIcon name="logos:telegram"  :size="19"/>
        </div>
      </div>

      <p class="flex items-center text-cyan-300">
        <UIcon name="noto-v1:envelope" :size="23" />
        {{email}}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  photo?: string;
  name: string;
  phone: string;
  email: string;
  age?: number;
  responseDate: string;
}>();
</script>

<style scoped>
.avatar {
  width: inherit;
}
</style>