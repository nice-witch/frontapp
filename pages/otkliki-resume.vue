<template>
  <div class="text-gray-500 dark:text-gray-400">
    <UContainer>
      <p v-if="isLoading" class="text-center text-2xl">Loading...</p>
      <p v-else-if="error">Error loading data</p>
      <Resume v-else :resume-data="resumeData"/>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type {Resume} from '~/types/Resume'

const RESUME_LINK = 'https://dev.jobcart.ru/wp-json/test/v2/app/';
const resumeData = ref<Resume>();
const isLoading = ref(false);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    isLoading.value = true;
    error.value = null;
    const response = await fetch(RESUME_LINK);
    console.log(response)
    if(!response.ok) {
      error.value = 'Error fetching resume data';
      throw new Error('Failed to fetch resume data');
    }

    const data = await response.json();
    resumeData.value = data || {};
    isLoading.value = false;

  } catch (error) {
    console.error('Error fetching resume');
    error.value = 'Failed to load resume data';
    isLoading.value = false;
  }
});
</script>