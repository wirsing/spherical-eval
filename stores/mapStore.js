import { CHOROPLETH_COLORS } from "@/constants/";

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
          break;
        case "Inequity Drivers":
          return CHOROPLETH_COLORS.drivers;
          break;
        case "Jeni Heatmap":
          return CHOROPLETH_COLORS.jeniHeat;
          break;
        case "Criminalization Heatmap":
          return CHOROPLETH_COLORS.crimHeat;
          break;
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
