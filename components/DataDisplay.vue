<template>
  <div>
    <h2>Zip Code: {{ data?.zip }}</h2>
    <h3>Jeni Percentile: {{ parseInt(data?.jenipctl || 0) }} %</h3>
    <!-- Would be fun to use these: -->
    <!-- <UMeter :value="parseInt(data?.jenipctl || 0)">/UMeter> -->
    <!-- TODO: make these computed properties -->
    <h3>
      System Involvement: {{ data?.systemcategory }} -
      {{ parseInt(data?.systempctl || 0) }}%
    </h3>
    <h3>
      Inequity Drivers: {{ data?.driverscategory }} -
      {{ parseInt(data?.driverspctl) || 0 }}%
    </h3>
    <h3>
      Criminalization Risk: {{ data?.riskcategory }} -
      {{ parseInt(data?.riskpctl) || 0 }}%
    </h3>
    <hr />
    <h3>Neighborhood: {{ data?.neighborhood }}</h3>
    <h3>Supervisorial District: {{ data?.sup_dist }}</h3>
    <h3>Service Planning Area: {{ data?.spa }}</h3>
    <h3>Countywide Statistical Area: {{ data?.csa }}</h3>
  </div>
</template>

<script setup>
import { useMapStore } from "@/stores/mapStore";

const mapStore = useMapStore();
const { jeniData: data } = storeToRefs(mapStore);
</script>

<style lang="scss" scoped>
div {
  margin-top: 2rem;

  h2 {
    text-decoration: underline;
  }

  h2,
  h3 {
    margin-top: 0.5rem;
    color: black;
  }

  hr {
    border: none;
    height: 1rem;
  }
}
</style>
