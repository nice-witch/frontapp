<template>
  <div>
    <IconsBlock :icons="icons" class="mb-6"/>
    <BasicInfo
        :name="resumeData?.name"
        :photo="resumeData?.photo"
        :phone="resumeData?.phone"
        :email="resumeData?.email"
        :response-date="resumeData?.date"
    />
    <DoingBlock class="mb-6"/>
    <StatusBlock class="mb-6"/>
    <DescriptionBlock :description="resumeData?.description" :birth-date="resumeData?.birth_date" />
    <AdditionalInformation />
  </div>
</template>

<script setup lang="ts">
import type {Resume} from '~/types/Resume'

import AdditionalInformation from "~/components/resume/AdditionalInformation.vue";
import BasicInfo from "~/components/resume/BasicInfo.vue";
import StatusBlock from "~/components/resume/StatusBlock.vue";
import DoingBlock from "~/components/resume/DoingBlock.vue";
import IconsBlock from "~/components/resume/IconsBlock.vue";
import DescriptionBlock from "~/components/resume/DescriptionBlock.vue";

const props = defineProps<{
  resumeData: Resume;
}>();

const icons = [
  'material-symbols:print-rounded',
  'tabler:file-type-pdf',
  'tabler:file-type-docx',
  'fa6-solid:file-signature',
  'streamline:interface-delete-bin-2-remove-delete-empty-bin-trash-garbage',
  'mdi:file-send',
  'weui:like-outlined',
]
</script>

<style scoped>

</style>