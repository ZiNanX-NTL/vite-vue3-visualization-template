<template>
  <div class="basic-layout relative size-full overflow-hidden">
    <HeadBar class="h-75rem"></HeadBar>
    <global-content class="size-full flex-vertical-full before-(block h-75rem content-[''])" :show-padding="false" />
  </div>
</template>

<script setup>
import { GlobalContent } from '../common';
import HeadBar from './components/HeadBar.vue';

defineOptions({ name: 'BigLayout' });
</script>

<style scoped></style>
