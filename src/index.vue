<template>
  <div
    :class="props.class"
    :style="{
      backgroundColor: bgColor,
      overflow: 'hidden',
      'border-radius': borderRadius,
    }"
  >
    <svg viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Face :type="face" />
      <Eye :type="eye" />
      <Eyebrow :type="eyebrow" />
      <Glass :type="glass" />
      <Hair :type="hair" />
      <Mouth :type="mouth" />
      <Nose :type="nose" />
      <Accessory :type="accessory" />
      <Beard :type="beard" />
      <Detail :type="detail" />
    </svg>
  </div>
</template>

<script lang="ts">
import { ShapeTypes, AvatarConfig } from './types'

interface NotionAvatarProps {
  class?: string
  shape?: ShapeTypes
  bgColor?: string
  config: AvatarConfig
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
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
import { ShapeBorderRadius } from './const'

const props = withDefaults(defineProps<NotionAvatarProps>(), {
  shape: 'circle',
})
const {
  face,
  eye,
  eyebrow,
  glass,
  hair,
  mouth,
  nose,
  accessory = 0,
  beard = 0,
  detail = 0,
} = props.config
const borderRadius = ShapeBorderRadius[props.shape as ShapeTypes]
const bgColor = computed(() =>
  (props.shape as ShapeTypes) in ShapeBorderRadius
    ? props.bgColor
    : 'rgba(255, 0, 0, 0)'
)
</script>
