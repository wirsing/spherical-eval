<template>
  <div class="container">
    <h2> {{ data?.zip }}</h2>
    <div>
      <h3> Jeni Percentile {{ parseInt(data?.jenipctl || 0) }} %</h3>
      <UMeter :value="parseInt(data?.jenipctl || 0)"></UMeter>
    </div>
    <div>
      <h3> Jeni Tier </h3>
      <h3> {{ data?.jenicategory }} </h3>
    </div>
  </div>
</template>

<script setup>
import { useMapStore } from '@/stores/mapStore';

const mapStore = useMapStore();
const { jeniData: data} = storeToRefs(mapStore)
console.log(data?.jenipctl)
</script>

<style lang="scss">
.container {
  background-color: blue;
}
</style>