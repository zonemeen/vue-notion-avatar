<template>
  <div>
    <svg viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Face />
      <Eye />
      <Eyebrow />
      <Glass />
      <Hair />
      <Mouth />
      <Nose />
      <Accessory />
      <Beard />
      <Detail />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ShapeBorderRadius } from './const'
import Accessory from './accessory/index.vue'
import Beard from './beard/index.vue'
import Detail from './detail/index.vue'
import Eye from './eye/index.vue'
import Eyebrow from './eyebrow/index.vue'
import Face from './face/index.vue'
import Glass from './glass/index.vue'
import Hair from './hair/index.vue'
import Mouth from './mouth/index.vue'
import Nose from './nose/index.vue'
import { NotionAvatarProps, AvatarConfig } from './types'
</script>
