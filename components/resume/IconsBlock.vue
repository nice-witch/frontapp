<template>
  <div :class="classNameWrapper">
    <SquareIcons
        v-for="icon in icons"
        :key="icon"
        :name="icon"
    />
  </div>
</template>

<script setup lang="ts">
import SquareIcons from "~/components/ui/Square-icons.vue";

const props = defineProps<{
  icons: string[];
  classNameWrapper?: string,
}>();
</script>

<style scoped>

</style>