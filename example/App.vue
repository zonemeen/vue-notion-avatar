<template>
  <div class="flex items-center justify-center">
    <NotionAvatar class="w-48 h-48" bgColor="#debaba" :config="config" />
  </div>
</template>

<script setup lang="ts">
import NotionAvatar, { getRandomConfig } from '../src/main'
const config = getRandomConfig()
</script>
