<template>
  <Accessory0 v-if="props.type === 0" />
  <Accessory1 v-if="props.type === 1" />
  <Accessory2 v-if="props.type === 2" />
  <Accessory3 v-if="props.type === 3" />
  <Accessory4 v-if="props.type === 4" />
  <Accessory5 v-if="props.type === 5" />
  <Accessory6 v-if="props.type === 6" />
  <Accessory7 v-if="props.type === 7" />
  <Accessory8 v-if="props.type === 8" />
  <Accessory9 v-if="props.type === 9" />
  <Accessory10 v-if="props.type === 10" />
</template>

<script setup lang="ts">
import Accessory0 from './0.vue'
import Accessory1 from './1.vue'
import Accessory2 from './2.vue'
import Accessory3 from './3.vue'
import Accessory4 from './4.vue'
import Accessory5 from './5.vue'
import Accessory6 from './6.vue'
import Accessory7 from './7.vue'
import Accessory8 from './8.vue'
import Accessory9 from './9.vue'
import Accessory10 from './10.vue'

const props = defineProps<{ type: number }>()
</script>
