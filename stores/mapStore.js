import { CHOROPLETH_COLORS } from "@/constants/";
import { defineStore } from 'pinia'

export const useMapStore = defineStore("mapData", {
  state: () => {
    return {
      jeniData: null,
      mapStyle: null,
      visualization: null,
    };
  },
  getters: {
    legendData() {
      // TODO Figure out a better way to reference these
      switch (this.visualization) {
        case "Jeni Ranking":
          return CHOROPLETH_COLORS.ranking;
        case "Inequity Drivers":
          return CHOROPLETH_COLORS.drivers;
        case "Jeni Heatmap":
          return CHOROPLETH_COLORS.jeniHeat;
        case "Criminalization Risk Heatmap":
          return CHOROPLETH_COLORS.crimHeat;
      }
    },
  },
  actions: {
    setJeniData(data) {
      this.jeniData = data;
    },
    setMapStyle(data) {
      this.mapStyle = data;
    },
    setVisualization(data) {
      this.visualization = data;
    },
  },
});
