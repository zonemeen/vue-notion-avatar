<template>
  <NotionAvatar bgColor="#debaba" :config="config" />
</template>

<script setup lang="ts">
import NotionAvatar, { getRandomConfig } from '../src/main'
const config = getRandomConfig()
</script>
