<template>
  <Beard0 v-if="props.type === 0 || props.type < 0 || props.type > 10" />
  <Beard1 v-if="props.type === 1" />
  <Beard2 v-if="props.type === 2" />
  <Beard3 v-if="props.type === 3" />
  <Beard4 v-if="props.type === 4" />
  <Beard5 v-if="props.type === 5" />
  <Beard6 v-if="props.type === 6" />
  <Beard7 v-if="props.type === 7" />
  <Beard8 v-if="props.type === 8" />
  <Beard9 v-if="props.type === 9" />
  <Beard10 v-if="props.type === 10" />
</template>

<script setup lang="ts">
import Beard0 from './0.vue'
import Beard1 from './1.vue'
import Beard2 from './2.vue'
import Beard3 from './3.vue'
import Beard4 from './4.vue'
import Beard5 from './5.vue'
import Beard6 from './6.vue'
import Beard7 from './7.vue'
import Beard8 from './8.vue'
import Beard9 from './9.vue'
import Beard10 from './10.vue'

const props = defineProps<{ type: number }>()
</script>
