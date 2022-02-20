<template>
  <Face0 v-if="props.type === 0" />
  <Face1 v-if="props.type === 1" />
  <Face2 v-if="props.type === 2" />
  <Face3 v-if="props.type === 3" />
  <Face4 v-if="props.type === 4" />
  <Face5 v-if="props.type === 5" />
  <Face6 v-if="props.type === 6" />
  <Face7 v-if="props.type === 7" />
  <Face8 v-if="props.type === 8" />
  <Face9 v-if="props.type === 9" />
  <Face10 v-if="props.type === 10" />
</template>

<script setup lang="ts">
import Face0 from './0.vue'
import Face1 from './1.vue'
import Face2 from './2.vue'
import Face3 from './3.vue'
import Face4 from './4.vue'
import Face5 from './5.vue'
import Face6 from './6.vue'
import Face7 from './7.vue'
import Face8 from './8.vue'
import Face9 from './9.vue'
import Face10 from './10.vue'

const props = defineProps<{ type: number }>()
</script>
