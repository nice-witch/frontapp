<template>
  <div>
    <UContainer>
      <IconsBlock :icons="icons" class-name-wrapper="flex gap-2"/>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import IconsBlock from "~/components/resume/IconsBlock.vue";

interface Resume {
  id: number;
  name: string;
  description: string;
  date: string;
  status: string;
  portfolios?: object | null;
  town: string;
  phone: string;
  age?: number;
  birth_date: string;
  email: string;
  listing_id: number;
  photo?: string;
}

const RESUME_LINK = 'https://dev.jobcart.ru/wp-json/test/v2/app';
const resumeData = ref<Resume>();
const icons = [
  'material-symbols:print-rounded',
  'tabler:file-type-pdf',
  'tabler:file-type-docx',
  'fa6-solid:file-signature',
  'streamline:interface-delete-bin-2-remove-delete-empty-bin-trash-garbage',
  'mdi:file-send',
  'weui:like-outlined',
]
// console.log(resumeData.value);

onMounted(async () => {
  try {
    const response = await fetch(RESUME_LINK);
    if(!response.ok) {
      throw new Error('Failed to fetch resume data');
    }

    const data = await response.json();
    resumeData.value = data || {};
  } catch (error) {
    console.error('Error fetching resume');
    error.value = 'Failed to load resume data';
  }
});
</script>