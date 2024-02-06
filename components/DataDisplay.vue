<template>
  <div class="container">
    <h2> {{ data?.zip }}</h2>
  </div>
</template>

<script setup>
import { useMapStore } from '@/stores/mapStore';

const mapStore = useMapStore();
const { jeniData: data} = storeToRefs(mapStore)
</script>

<style lang="scss">
.container {
  background-color: blue;
}
</style>