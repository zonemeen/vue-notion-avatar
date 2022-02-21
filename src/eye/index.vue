<template>
  <Eye0 v-if="props.type === 0 || props.type < 0 || props.type > 10" />
  <Eye1 v-if="props.type === 1" />
  <Eye2 v-if="props.type === 2" />
  <Eye3 v-if="props.type === 3" />
  <Eye4 v-if="props.type === 4" />
  <Eye5 v-if="props.type === 5" />
  <Eye6 v-if="props.type === 6" />
  <Eye7 v-if="props.type === 7" />
  <Eye8 v-if="props.type === 8" />
  <Eye9 v-if="props.type === 9" />
  <Eye10 v-if="props.type === 10" />
</template>

<script setup lang="ts">
import Eye0 from './0.vue'
import Eye1 from './1.vue'
import Eye2 from './2.vue'
import Eye3 from './3.vue'
import Eye4 from './4.vue'
import Eye5 from './5.vue'
import Eye6 from './6.vue'
import Eye7 from './7.vue'
import Eye8 from './8.vue'
import Eye9 from './9.vue'
import Eye10 from './10.vue'

const props = defineProps<{ type: number }>()
</script>
