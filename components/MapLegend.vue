<template>
  <div class="legend">
    <div
      v-for="{ name, color } in mapStore.legendData"
      :key="name"
      class="legend-item"
    >
      <div
        class="square"
        :style="{ backgroundColor: color }"
      />
      <h2>{{ name }}</h2>
    </div>
  </div>
</template>

<script setup>
import { useMapStore } from "@/stores/mapStore";
const mapStore = useMapStore();
</script>

<style lang="scss" scoped>
.legend {
  margin-top: 2rem;
  width: 80%;
}

.square {
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.5rem;
}

.legend-item {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
</style>
