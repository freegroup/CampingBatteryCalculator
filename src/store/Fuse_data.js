const images = require.context("@/store/images/fuse/", true, /\.png$/)

export default
[
  { 
    uuid: "custom", 
    name: "Generic Main Fuse", 
    description: "Generic MEGA-Fuse",
    imageSrc: images("./custom.png"),
    exportable: true,
    shopping: [],
    data: {
      type: "melt",
      strom: 0,
      spannung_min: 0,
      spannung_max: 0
    }
  },
  { 
    uuid: "FBB6A004-FDC3-4937-A08C-30DED8119B66", 
    name: "Red Wulf", 
    description: "Automatic wear-free fuse for the motorhome electrical system. In case of overload or when you press the emergency stop button, the fuse switches off and can be switched on again manually when you press the latch again.",
    imageSrc: images("./redwulf-40A.png"),
    exportable: true,
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3L7RYB4",
        label: "Red Wulf Fuse Switch 40A",
        lastKnownPrice: 23
      }
    ],
    data: {
      type: "automatic",
      strom: 40,
      spannung_min: 12,
      spannung_max: 48
    }
  },
  { 
    uuid: "C9A6897A-A19C-4CBD-A05B-F93ED56CF65A", 
    name: "Red Wulf", 
    description: "Automatic wear-free fuse for the motorhome electrical system. In case of overload or when you press the emergency stop button, the fuse switches off and can be switched on again manually when you press the latch again.",
    imageSrc: images("./redwulf-50A.png"),
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3s2vj03",
        label: "Red Wulf Fuse Switch 50A",
        lastKnownPrice: 15.99
      }
    ],
    data: {
      type: "automatic",
      strom: 50,
      spannung_min: 12,
      spannung_max: 48
    }
  },
  { 
    uuid: "0441223A-0331-4490-AA30-49C180F5323F", 
    name: "Red Wulf", 
    description: "Automatic wear-free fuse for the motorhome electrical system. In case of overload or when you press the emergency stop button, the fuse switches off and can be switched on again manually when you press the latch again.",
    imageSrc: images("./redwulf-70A.png"),
    exportable: true,
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/34lCgBg",
        label: "Red Wulf Fuse Switch 70A",
        lastKnownPrice: 24
      }
    ],
    data: {
      type: "automatic",
      strom: 70,
      spannung_min: 12,
      spannung_max: 48
    }
  },
  { 
    uuid: "EAB2F71E-4DD7-4DAF-9E64-34E746E495C5", 
    name: "Red Wulf", 
    description: "Automatic wear-free fuse for the motorhome electrical system. In case of overload or when you press the emergency stop button, the fuse switches off and can be switched on again manually when you press the latch again.",
    imageSrc: images("./redwulf-100A.png"),
    exportable: true,
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3AMjJKx",
        label: "Red Wulf Fuse Switch 100A",
        lastKnownPrice: 16
      }
    ],
    data: {
      type: "automatic",
      strom: 100,
      spannung_min: 12,
      spannung_max: 48
    }
  },
  { 
    uuid: "1943CC13-AC53-4EA3-9014-D936170FD203", 
    name: "Red Wulf", 
    description: "Automatic wear-free fuse for the motorhome electrical system. In case of overload or when you press the emergency stop button, the fuse switches off and can be switched on again manually when you press the latch again.",
    imageSrc: images("./redwulf-200A.png"),
    operationHours: 24,
    exportable: true,
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3udKIxj",
        label: "Red Wulf Fuse Switch 200A",
        lastKnownPrice: 16
      }
    ],
    data: {
      type: "automatic",
      strom: 200,
      spannung_min: 12,
      spannung_max: 48
    }
  },
  { 
    uuid: "6841A63B-7D6A-44E0-9D22-3BCC5530A156", 
    name: "Mega Fuse", 
    description: "Fuse holder for the MEGA fuses",
    imageSrc: images("./generic.png"),
    operationHours: 24,
    exportable: true,
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3KUht8J",
        label: "Fuse holder for the MEGA fuses",
        lastKnownPrice: 4.99
      }
    ],
    data: {
      type: "melt",
      strom: 40,
      spannung_min: 12,
      spannung_max: 35
    }
  },
  { 
    uuid: "4CF4DF81-05AD-48BF-BAE7-C743C6E4BEAC", 
    name: "Mega Fuse", 
    description: "Fuse holder for the MEGA fuses",
    imageSrc: images("./generic.png"),
    operationHours: 24,
    exportable: true,
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/34lpP8L",
        label: "Fuse holder for the MEGA fuses",
        lastKnownPrice: 4.99
      }
    ],
    data: {
      type: "melt",
      strom: 50,
      spannung_min: 12,
      spannung_max: 35
    }
  },
  { 
    uuid: "3680222D-EF80-4AB7-8172-9DE3D862C66E", 
    name: "Mega Fuse", 
    description: "Fuse holder for the MEGA fuses",
    imageSrc: images("./generic.png"),
    operationHours: 24,
    exportable: true,
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3G9ABff",
        label: "Fuse holder for the MEGA fuses",
        lastKnownPrice: 4.99
      }
    ],
    data: {
      type: "melt",
      strom: 70,
      spannung_min: 12,
      spannung_max: 35
    }
  },
  { 
    uuid: "F5859568-8B95-4EF9-A063-41540BF4F864", 
    name: "Mega Fuse", 
    description: "Fuse holder for the MEGA fuses",
    imageSrc: images("./generic.png"),
    operationHours: 24,
    exportable: true,
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3Gemd5B",
        label: "Fuse holder for the MEGA fuses",
        lastKnownPrice: 4.99
      }
    ],
    data: {
      type: "melt",
      strom: 100,
      spannung_min: 12,
      spannung_max: 35
    }
  },
  { 
    uuid: "00B45BD4-D8F3-44BD-8EED-FF3E9C68370D", 
    name: "Mega Fuse", 
    description: "Fuse holder for the MEGA fuses",
    imageSrc: images("./generic.png"),
    operationHours: 24,
    exportable: true,
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/34gezKF",
        label: "Fuse holder for the MEGA fuses",
        lastKnownPrice: 4.99
      }
    ],
    data: {
      type: "melt",
      strom: 200,
      spannung_min: 12,
      spannung_max: 35
    }
  }
]
