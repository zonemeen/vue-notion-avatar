<template>
  <Eyebrow0 v-if="props.type === 0 || props.type < 0 || props.type > 10" />
  <Eyebrow1 v-if="props.type === 1" />
  <Eyebrow2 v-if="props.type === 2" />
  <Eyebrow3 v-if="props.type === 3" />
  <Eyebrow4 v-if="props.type === 4" />
  <Eyebrow5 v-if="props.type === 5" />
  <Eyebrow6 v-if="props.type === 6" />
  <Eyebrow7 v-if="props.type === 7" />
  <Eyebrow8 v-if="props.type === 8" />
  <Eyebrow9 v-if="props.type === 9" />
  <Eyebrow10 v-if="props.type === 10" />
</template>

<script setup lang="ts">
import Eyebrow0 from './0.vue'
import Eyebrow1 from './1.vue'
import Eyebrow2 from './2.vue'
import Eyebrow3 from './3.vue'
import Eyebrow4 from './4.vue'
import Eyebrow5 from './5.vue'
import Eyebrow6 from './6.vue'
import Eyebrow7 from './7.vue'
import Eyebrow8 from './8.vue'
import Eyebrow9 from './9.vue'
import Eyebrow10 from './10.vue'

const props = defineProps<{ type: number }>()
</script>
