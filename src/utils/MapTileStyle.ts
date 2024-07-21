// Custom Tile Styles

export const Osm = {
  default: {
    url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution: '&amp;copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  hot: {
    url: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
    attribution: "",
  },
  opentopomap: {
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    attribution: "",
  }
};

export const Stamen = {
  toner: {
    url: "https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
    attribution: "",
  },
  watercolor: {
    url: "https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",
    attribution: "",
  },
  terrain: {
    url: "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
    attribution: "",
  }
};

export const Carto = {
  rastertile_voyager_nolabels: {
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png",
    attribution: "",
  },
  rastertile_voyager_labels_under: {
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png",
    attribution: "",
  },
  rastertile_voyager: {
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
    attribution: "",
  },
  light_only_labels: {
    url: "https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png",
    attribution: "",
  },
  dark_nolabels: {
    url: "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",
    attribution: "",
  },
  dark_all: {
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
    attribution: "",
  },
  light_nolabels: {
    url: "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
    attribution: "",
  },
  light_all: {
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    attribution: "",
  },
  scale2: {
    rastertile_voyager_nolabels: {
      url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png",
      attribution: "",
    },
    rastertile_voyager_labels_under: {
      url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}@2x.png",
      attribution: "",
    },
    rastertile_voyager: {
      url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png",
      attribution: "",
    },
    light_only_labels: {
      url: "https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}@2x.png",
      attribution: "",
    },
    dark_nolabels: {
      url: "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}@2x.png",
      attribution: "",
    },
    dark_all: {
      url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      attribution: "",
    },
    light_nolabels: {
      url: "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png",
      attribution: "",
    },
    light_all: {
      url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png",
      attribution: "",
    }
  }
};

export const Esri = {
  world_imagery: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  },
  world_street_map: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    attribution: "",
  },
  world_topo_map: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    attribution: "",
  },
  natgeo_world_map: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
    attribution: "",
  }
};