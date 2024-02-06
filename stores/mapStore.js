import { CHOROPLETH_COLORS } from '@/constants/'

export const useMapStore = defineStore('mapData', {
  state: () => {
    return {
      jeniData: null,
      mapStyle: null,
      visualization: null,
    }
  },
  getters: {
    legendData() {
      return this.visualization === 'Jeni Ranking' 
        ? CHOROPLETH_COLORS.ranking 
        : this.visualization === 'Inequity Drivers' 
          ? CHOROPLETH_COLORS.drivers 
          : []
    }
  },
  actions: {
    setJeniData(data) {
      this.jeniData = data
    },
    setMapStyle(data) {
      this.mapStyle = data
    },
    setVisualization(data) {
      this.visualization = data
    },    
  }  
})