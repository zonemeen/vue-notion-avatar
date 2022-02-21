<template>
  <Nose0 v-if="props.type === 0 || props.type < 0 || props.type > 10" />
  <Nose1 v-if="props.type === 1" />
  <Nose2 v-if="props.type === 2" />
  <Nose3 v-if="props.type === 3" />
  <Nose4 v-if="props.type === 4" />
  <Nose5 v-if="props.type === 5" />
  <Nose6 v-if="props.type === 6" />
  <Nose7 v-if="props.type === 7" />
  <Nose8 v-if="props.type === 8" />
  <Nose9 v-if="props.type === 9" />
  <Nose10 v-if="props.type === 10" />
</template>

<script setup lang="ts">
import Nose0 from './0.vue'
import Nose1 from './1.vue'
import Nose2 from './2.vue'
import Nose3 from './3.vue'
import Nose4 from './4.vue'
import Nose5 from './5.vue'
import Nose6 from './6.vue'
import Nose7 from './7.vue'
import Nose8 from './8.vue'
import Nose9 from './9.vue'
import Nose10 from './10.vue'

const props = defineProps<{ type: number }>()
</script>
