<template>
  <p>{{resumeData}}</p>
</template>

<script setup lang="ts">
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