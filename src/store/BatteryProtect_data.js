const images = require.context("@/store/images/batteryProtect/", true, /\.png$/)

export default
[
  { 
    uuid: "custom", 
    name: "Generic Battery Protection", 
    description: "Generic Battery Protection for an undefined type of battery",
    imageSrc: images("./custom.png"),
    exportable: true,
    shopping: [],
    data: {
      strom: 0,
      spannung: 0
    }
  },
  { 
    uuid: "7FA1FD36-70DE-4364-AAD7-5CE44D1953EC", 
    name: "Victron Battery Protect", 
    description: "The BatteryProtect function disconnects the battery from the (less important) consumers before it is completely discharged, which would damage it.",
    imageSrc: images("./victron_65A.png"),
    exportable: true,
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3nbmm2P",
        label: "Victron Battery Protect 12/24V 65A programmierbar für Wohnmobil und Yacht",
        lastKnownPrice: 41.47
      }
    ],
    data: {
      strom: 65,
      spannung: 12
    }
  },
  { 
    uuid: "56332EB9-6752-40C2-80E0-9840DDE77CAA", 
    name: "VOTRONIC Battery Protector", 
    description: "VOTRONIC 4250683611260 3075 Battery Protector 40A",
    imageSrc: images("./votronic_12_40.png"),
    exportable: true,
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3g7BUAQ",
        label: "VOTRONIC 4250683611260 3075 Battery Protector 40A",
        lastKnownPrice: 67.14
      }
    ],
    data: {
      strom: 40,
      spannung: 12
    }
  }
]
