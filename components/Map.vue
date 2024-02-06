<template>
  <MapboxMap
    map-id="jeni-la-county"
    :options="{
      style,
      center: [-118.243683, 34.052235], // LA as starting position
      zoom: 9 // Layer only renders starting at zoom level 9
    }"
  >
  </MapboxMap>  
</template>

<script setup>
import { useMapStore } from '@/stores/mapStore';

const mapStore = useMapStore();
const { mapStyle: style} = storeToRefs(mapStore)

useMapbox('jeni-la-county', (map) => {
  map.on('click', (e) => {
    const data = map.queryRenderedFeatures(e.point, {
      layers: ['jeni']
    });

    mapStore.setJeniData(data[0].properties)
  })
})

</script>
