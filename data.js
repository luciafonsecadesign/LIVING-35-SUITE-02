var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.2591142658730128,
        "pitch": 0.17136174935968462,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": 0.4274410784943061,
          "pitch": 0.2129135482385589,
          "rotation": 5.497787143782138,
          "target": "2-bao"
        },
        {
          "yaw": 1.232272468082778,
          "pitch": 0.32023115584866346,
          "rotation": 7.0685834705770345,
          "target": "1-cama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cama",
      "name": "Cama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7421461936201634,
        "pitch": 0.4962081010478361,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": 3.1311822184856393,
          "pitch": 0.2743601260145052,
          "rotation": 0.7853981633974483,
          "target": "2-bao"
        },
        {
          "yaw": 1.772973932693711,
          "pitch": 0.17552114245372508,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.691698791317684,
        "pitch": 0.26627634889401897,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": -1.6678760212788557,
          "pitch": 0.1884818011291074,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SUITE 02",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
