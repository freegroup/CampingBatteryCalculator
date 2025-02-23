import { toFixed } from "@/utils/Wire.js"
const images = require.context("@/store/images/usbConsumer/", true, /\.png$/)

export default [
  { 
    uuid: "custom", 
    name: "Generic USB Device", 
    imageSrc: images("./custom.png"),
    operationHours: 2,
    runningMode: "loading",
    exportable: false,
    shopping: [],
    data: {
      spannung: 0, 
      strom: 0
    }
  },
  { 
    uuid: "1w312343lk245phone", 
    name: "SmartPhone", 
    imageSrc: images("./phone_charge.png"),
    operationHours: 2,
    runningMode: "loading",
    exportable: false,
    shopping: [
    ],
    data: {
      spannung: 5, 
      strom: 1.5
    }
  },
  { 
    uuid: "4D17FAB4-DA63-4ED0-879F-DF34EF6BDFFA", 
    name: "15inch Mac Book Pro", 
    imageSrc: images("./macbook_charge.png"),
    operationHours: 2,
    runningMode: "loading",
    exportable: false,
    shopping: [
    ],
    data: {
      spannung: 5, 
      strom: toFixed(87 / 5)
    }
  },
  { 
    uuid: "51EA546A-AF25-4C1C-8019-EC1DA24C697B", 
    name: "13inch Mac Book Pro", 
    imageSrc: images("./macbook_charge.png"),
    operationHours: 2,
    runningMode: "loading",
    exportable: false,
    shopping: [
    ],
    data: {
      spannung: 5, 
      strom: toFixed(61 / 5)
    }
  },
  { 
    uuid: "901D2C87-35EE-4EBD-96AE-A890F62DF45A", 
    name: "12inch Mac Book Pro", 
    imageSrc: images("./macbook_charge.png"),
    operationHours: 2,
    runningMode: "loading",
    exportable: false,
    shopping: [
    ],
    data: {
      spannung: 5, 
      strom: toFixed(30 / 5)
    }
  },
  { 
    uuid: "6F5314FF-D1B5-448F-AD82-9CE2C20B25ED", 
    name: "Mac Book Air", 
    imageSrc: images("./macbook_charge.png"),
    operationHours: 2,
    runningMode: "loading",
    exportable: false,
    shopping: [
    ],
    data: {
      spannung: 5, 
      strom: toFixed(30 / 5)
    }
  }
]
