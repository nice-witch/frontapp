<template>
  <div class="text-gray-500 dark:text-gray-400">
    <UContainer>
      <Resume :resume-data="resumeData"/>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type {Resume} from '~/types/Resume'

const RESUME_LINK = 'https://dev.jobcart.ru/wp-json/test/v2/app';
const resumeData = ref<Resume>();

onMounted(async () => {
  try {
    const response = await fetch(RESUME_LINK);
    if(!response.ok) {
      throw new Error('Failed to fetch resume data');
    }

    const data = await response.json();
    resumeData.value = data || {};
    console.log(resumeData.value);

  } catch (error) {
    console.error('Error fetching resume');
    error.value = 'Failed to load resume data';
  }
});
</script>