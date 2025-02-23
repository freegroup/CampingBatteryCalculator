const images = require.context("@/store/images/accu/", true, /\.png$/)

export default [
  {
    uuid: "custom",
    name: "Generic",
    description: "Generic Battery with user defined properties",
    imageSrc: images("./custom.png"),
    shopping: [],
    data: {
      amperestunden: 0,
      effective_amperestunden: 0, // es können die vollen 100Ah entnommen werden
      bms: "internal",
      spannung: 0,
      type: "LiFePO4",
      ladespannung: 14.6
    }
  },
  {
    uuid: "6473ECD0-5189-4DB0-8E31-480975998729",
    name: "LIONTRON",
    description: "LIONTRON LiFePO4 12,8V 100Ah LX Smart BMS mit Bluetooth",
    imageSrc: images("./liotron_100ah.png"),
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3rejt3Z",
        label: "LIONTRON LiFePO4 12,8V 100Ah",
        lastKnownPrice: 994
      }
    ],
    data: {
      amperestunden: 100,
      effective_amperestunden: 100, // es können die vollen 100Ah entnommen werden
      bms: "internal",
      spannung: 12,
      type: "LiFePO4",
      ladespannung: 14.6
    }
  },
  {
    uuid: "BD79BE1F-AEF9-467E-A0B7-7270080AF600",
    name: "LIONTRON",
    description: "LIONTRON LiFePO4 12,8V 200Ah LX Smart BMS mit Bluetooth",
    imageSrc: images("./liotron_200ah.png"),
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3AKKy1D",
        label: "LIONTRON LiFePO4 12,8V 200Ah",
        lastKnownPrice: 1796
      }
    ],
    data: {
      bms: "internal",
      amperestunden: 200,
      spannung: 12,
      type: "LiFePO4",
      effective_amperestunden: 200,
      ladespannung: 14.6
    }
  },
  {
    uuid: "FFF2A576-2AB2-4C0D-8982-C2053E83DC73",
    name: "LIONTRON",
    description: "LIONTRON LiFePO4 12,8V 150Ah LX Smart BMS mit Bluetooth",
    imageSrc: images("./liotron_150ah.png"),
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3ALvO2v",
        label: "LIONTRON LiFePO4 12,8V 150Ah",
        lastKnownPrice: 1386
      }
    ],
    data: {
      bms: "internal",
      amperestunden: 150,
      spannung: 12,
      type: "LiFePO4",
      effective_amperestunden: 150,
      ladespannung: 14.6
    }
  },
  {
    uuid: "10A62DB5-3195-47CC-9DCE-E249DD8F7789",
    name: "ECO-WORTHY",
    description: "ECO-WORTHY 12V 30Ah LiFePO4 with BMS",
    imageSrc: images("./eco_worthy_30Ah.png"),
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3IR1aHX",
        label: "ECO-WORTHY 12V 30Ah LiFePO4 Akku wiederaufladbare Lithiumbatterie",
        lastKnownPrice: 115
      }
    ],
    data: {
      bms: "internal",
      amperestunden: 30,
      spannung: 12,
      type: "LiFePO4",
      effective_amperestunden: 30,
      ladespannung: 14.6
    }
  },
  {
    uuid: "00DB77EB-C014-43BE-890F-251BE9F9859E",
    name: "ECO-WORTHY",
    description: "ECO-WORTHY 12V 50Ah LiFePO4 with BMS",
    imageSrc: images("./eco_worthy_50Ah.png"),
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3saJu3w",
        label: "ECO-WORTHY 12V 50Ah LiFePO4 Akku wiederaufladbare Lithiumbatterie",
        lastKnownPrice: 219
      }
    ],
    data: {
      bms: "internal",
      amperestunden: 50,
      spannung: 12,
      type: "LiFePO4",
      effective_amperestunden: 50,
      ladespannung: 14.6
    }
  },
  {
    uuid: "A1DBFC5E-8900-4AD4-8ED7-392B0F470AE0",
    name: "ECO-WORTHY ",
    description: "ECO-WORTHY 12V 100Ah LiFePO4 with BMS",
    imageSrc: images("./eco_worthy_100Ah.png"),
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3IWk40h",
        label: "ECO-WORTHY 12V 100Ah LiFePO4 Akku wiederaufladbare Lithiumbatterie",
        lastKnownPrice: 429
      }
    ],
    data: {
      bms: "internal",
      amperestunden: 100,
      spannung: 12,
      type: "LiFePO4",
      effective_amperestunden: 100,
      ladespannung: 14.6
    }
  },
  {
    uuid: "42C116CF-4380-4B27-9450-3E027A9393A1",
    name: "ECTIVE",
    description:
      "ECTIVE 230Ah 12V AGM Versorgungsbatterie DC 230s mit LCD-Display VRLA Solar-Batterie mit integrierten Nachfüllpacks",
    imageSrc: images("./ective_230Ah.png"),
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3s4eKB1",
        label:
          "ECTIVE 230Ah 12V AGM Versorgungsbatterie DC 230s mit LCD-Display VRLA Solar-Batterie mit integrierten Nachfüllpacks",
        lastKnownPrice: 354
      }
    ],
    data: {
      bms: "none",
      amperestunden: 230,
      spannung: 12,
      type: "AGM",
      effective_amperestunden: 230 * 0.6,
      ladespannung: 14.4
    }
  },
  {
    uuid: "A8996B36-C868-4B87-9498-31701E559E1B",
    name: "ECTIVE",
    description: "ECTIVE 70Ah 12V AGM Batterie DC 70 VRLA Versorgungsbatterie",
    imageSrc: images("./ective_70Ah.png"),
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3HeM5zB",
        label: "ECTIVE 70Ah 12V AGM Batterie DC 70 VRLA Versorgungsbatterie",
        lastKnownPrice: 130.82
      }
    ],
    data: {
      bms: "none",
      amperestunden: 70,
      spannung: 12,
      type: "AGM",
      effective_amperestunden: 70 * 0.6,
      ladespannung: 14.4
    }
  },
  {
    uuid: "662CD3C1-DB78-4FE2-A65F-2122E879BA5C",
    name: "ECTIVE",
    description: "ECTIVE 100Ah 12V AGM Batterie DC 70 VRLA Versorgungsbatterie",
    imageSrc: images("./ective_100Ah.png"),
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3grZetv",
        label: "ECTIVE 100Ah 12V AGM Batterie DC 70 VRLA Versorgungsbatterie",
        lastKnownPrice: 169.82
      }
    ],
    data: {
      bms: "none",
      amperestunden: 100,
      spannung: 12,
      type: "AGM",
      effective_amperestunden: 100 * 0.6,
      ladespannung: 14.4
    }
  },
  {
    uuid: "35F28D76-AB51-4C6F-87D0-EA42D940EF9D",
    name: "ECTIVE",
    description:
      "ECTIVE LC300L BT 12V 300Ah 3840Wh LiFePO4-Batterie mit Bluetooth-Funktion Lithium-Eisenphosphat Versorgungs-Batterie",
    imageSrc: images("./ective_300Ah.png"),
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3rcCjIt",
        label:
          "ECTIVE LC300L BT 12V 300Ah 3840Wh LiFePO4-Batterie mit Bluetooth-Funktion Lithium-Eisenphosphat Versorgungs-Batterie",
        lastKnownPrice: 2525.5
      }
    ],
    data: {
      bms: "internal",
      amperestunden: 300,
      spannung: 12,
      type: "LiFePO4",
      effective_amperestunden: 300,
      ladespannung: 14.6
    }
  },
  {
    uuid: "B7CF51D7-CD05-4F11-85C5-A58036DA5FB3",
    name: "ECTIVE",
    description:
      "ECTIVE 230Ah 12V Gel Frontterminal-Batterie DC230 Slim Gel Deep Cycle schmale Versorgungsbatterie",
    imageSrc: images("./ective_slim_230Ah.png"),
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3KYU0Di",
        label:
          "ECTIVE 230Ah 12V Gel Frontterminal-Batterie DC230 Slim Gel Deep Cycle schmale Versorgungsbatterie",
        lastKnownPrice: 392.62
      }
    ],
    data: {
      bms: "none",
      amperestunden: 230,
      spannung: 12,
      type: "Gel",
      effective_amperestunden: 230 * 0.6,
      ladespannung: 14.2
    }
  },
  {
    uuid: "30DB5D21-B21D-441F-B398-CECBFB7627AD",
    name: "Victron Energy",
    description: "Victron Energy AGM 12V 220Ah Deep Cycle",
    imageSrc: images("./victron_220_agm.png"),
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/3rcAlI7",
        label: "Victron Energy AGM 12V 220Ah Deep Cycle",
        lastKnownPrice: 525.9
      }
    ],
    data: {
      bms: "none",
      amperestunden: 220,
      spannung: 12,
      type: "AGM",
      effective_amperestunden: 220 * 0.6,
      ladespannung: 14.4
    }
  },
  {
    uuid: "6AB59672-1A9E-4D78-9CC4-529FAA850F87",
    name: "LIONTRON",
    description: "LIONTRON LiFePO4 Smart BMS 25.6V 100Ah",
    imageSrc: images("./liotron_100ah_24v.png"),
    shopping: [
      {
        shop: "Amazon",
        link: "https://amzn.to/34rcGeo",
        label: "LIONTRON LiFePO4 Smart BMS 25.6V 100Ah",
        lastKnownPrice: 1935.9
      }
    ],
    data: {
      bms: "internal",
      amperestunden: 100,
      spannung: 24,
      type: "LiFePO4",
      effective_amperestunden: 100,
      ladespannung: 28.8
    }
  }
]
