<script lang='ts' setup>
import { reactive, computed, ref } from 'vue'
import { createNamespace } from '@wan-xiang/utils/create';
import { iconProps } from './icon';

defineOptions({
  name: 'WxIcon'
})

const props = defineProps(iconProps)

const ns = createNamespace('icon')
const styles = computed(() => {
  if(!props.size && !props.color) return {}
  return {
    ...(props.size ? { 'font-size': props.size + 'px' }: {}),
    ...(props.color? { 'color': props.color }: {} )
  }
})
</script>

<template>
  <i :class="[ns.b()]" :style="styles">
    <slot></slot>
  </i>
</template>

<style scope>
 i {
  font-style: normal;
 }
</style>
