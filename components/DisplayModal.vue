<template>
  <div class="ui">
    <UserNav></UserNav>
    <DataDisplay v-if="visualization && visualization != 'No Data'"></DataDisplay>
    <Legend></Legend>
  </div>
</template>

<script setup>
import { useMapStore } from '@/stores/mapStore';

const mapStore = useMapStore();
const { visualization } = storeToRefs(mapStore)
</script>

<style lang="scss" scoped>
.ui {
  padding: 1.5rem;
  position: fixed;
  top: 2rem;
  left: 2rem;
  width: 30rem;
  height: 50rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 6px 12px rgba(0, 0, 0, 0.08);
}
</style>