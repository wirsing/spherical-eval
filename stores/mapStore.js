export const useMapStore = defineStore('mapData', {
  state: () => {
    return {
      jeniData: null,
      mapStyle: null
    }
  },
  actions: {
    setJeniData(data) {
      this.jeniData = data
    },
    setMapStyle(data) {
      this.mapStyle = data
    },
  }  
})