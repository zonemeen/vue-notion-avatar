<template>
  <Glass0 v-if="props.type === 0 || props.type < 0 || props.type > 10" />
  <Glass1 v-if="props.type === 1" />
  <Glass2 v-if="props.type === 2" />
  <Glass3 v-if="props.type === 3" />
  <Glass4 v-if="props.type === 4" />
  <Glass5 v-if="props.type === 5" />
  <Glass6 v-if="props.type === 6" />
  <Glass7 v-if="props.type === 7" />
  <Glass8 v-if="props.type === 8" />
  <Glass9 v-if="props.type === 9" />
  <Glass10 v-if="props.type === 10" />
</template>

<script setup lang="ts">
import Glass0 from './0.vue'
import Glass1 from './1.vue'
import Glass2 from './2.vue'
import Glass3 from './3.vue'
import Glass4 from './4.vue'
import Glass5 from './5.vue'
import Glass6 from './6.vue'
import Glass7 from './7.vue'
import Glass8 from './8.vue'
import Glass9 from './9.vue'
import Glass10 from './10.vue'

const props = defineProps<{ type: number }>()
</script>
