<template>
  <Mouth0 v-if="props.type === 0" />
  <Mouth1 v-if="props.type === 1" />
  <Mouth2 v-if="props.type === 2" />
  <Mouth3 v-if="props.type === 3" />
  <Mouth4 v-if="props.type === 4" />
  <Mouth5 v-if="props.type === 5" />
  <Mouth6 v-if="props.type === 6" />
  <Mouth7 v-if="props.type === 7" />
  <Mouth8 v-if="props.type === 8" />
  <Mouth9 v-if="props.type === 9" />
  <Mouth10 v-if="props.type === 10" />
</template>

<script setup lang="ts">
import Mouth0 from './0.vue'
import Mouth1 from './1.vue'
import Mouth2 from './2.vue'
import Mouth3 from './3.vue'
import Mouth4 from './4.vue'
import Mouth5 from './5.vue'
import Mouth6 from './6.vue'
import Mouth7 from './7.vue'
import Mouth8 from './8.vue'
import Mouth9 from './9.vue'
import Mouth10 from './10.vue'

const props = defineProps<{ type: number }>()
</script>
