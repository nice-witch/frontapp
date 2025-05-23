<template>
  <div class="flex gap-2 cursor-pointer">
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
}>();
</script>