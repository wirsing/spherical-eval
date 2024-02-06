<template>
  <USelect 
    v-model="style" 
    :options="MAPBOX_STYLES" 
    option-attribute="name" 
    @change="onChange()"
  />
</template>

<script setup>
import { useMapStore } from '@/stores/mapStore';
import { MAPBOX_STYLES } from '@/constants/'

const mapStore = useMapStore();
const {jeniData} = storeToRefs(mapStore)

// set default style to no data viz
const style = ref(MAPBOX_STYLES[0].value)

// init with default style
mapStore.setMapStyle(style.value)

// watch change events on select
const onChange = () => {
  mapStore.setMapStyle(style.value)
}
</script>
