<template>
  <USelect
    v-model="style"
    :options="MAPBOX_STYLES"
    option-attribute="name"
    @change="onChange()"
  />
</template>

<script setup>
import { useMapStore } from "@/stores/mapStore";
import { MAPBOX_STYLES } from "@/constants/";

const mapStore = useMapStore();
// set default style to no data viz
const style = ref(MAPBOX_STYLES[0].value);

const findKey = (array, value) => {
  const obj = array.find((element) => element.value === value);
  return obj.name;
};

// init with default style
mapStore.setMapStyle(style.value);
mapStore.setVisualization(findKey(MAPBOX_STYLES, style.value));

// watch change events on select
const onChange = () => {
  mapStore.setMapStyle(style.value);
  mapStore.setVisualization(findKey(MAPBOX_STYLES, style.value));
};
</script>
