const images = require.context("@/assets/components/fuseBox/", true, /\.png$/)

export default 
[
  { 
    uuid: "7asdf", 
    type: "fuseBox", 
    name: "Sicherungsbox 12", 
    imageSrc: images("./mictuning_12.png"),
    data: {
      strom: 100,
      spannung: 32,
      stromEinzeln: 15,
      verteiler: 12
    }
  }
]
