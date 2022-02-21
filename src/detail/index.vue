<template>
  <Detail0 v-if="props.type === 0 || props.type < 0 || props.type > 10" />
  <Detail1 v-if="props.type === 1" />
  <Detail2 v-if="props.type === 2" />
  <Detail3 v-if="props.type === 3" />
  <Detail4 v-if="props.type === 4" />
  <Detail5 v-if="props.type === 5" />
  <Detail6 v-if="props.type === 6" />
  <Detail7 v-if="props.type === 7" />
  <Detail8 v-if="props.type === 8" />
  <Detail9 v-if="props.type === 9" />
  <Detail10 v-if="props.type === 10" />
</template>

<script setup lang="ts">
import Detail0 from './0.vue'
import Detail1 from './1.vue'
import Detail2 from './2.vue'
import Detail3 from './3.vue'
import Detail4 from './4.vue'
import Detail5 from './5.vue'
import Detail6 from './6.vue'
import Detail7 from './7.vue'
import Detail8 from './8.vue'
import Detail9 from './9.vue'
import Detail10 from './10.vue'

const props = defineProps<{ type: number }>()
</script>
