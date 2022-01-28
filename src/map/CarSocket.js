import RightNode from './RightNode'
import { toFixed } from "@/utils/Wire.js"

export default class Usb extends RightNode {
  constructor() {
    super()
  }

  getChildCandidates () {
    return ["cooler"] 
  }

  setParent(parent) {
    super.setParent(parent)
    this.model.data.strom = (this.model.data.strom_je_buchse * this.model.data.buchsen)
  }

  getErrorMessages () {
    const result = []

    // Calculate if the maximum "strom"
    //
    if ( this.children.length > 0 ) {
      this.children.forEach( child => {
        if ( child.model.data.strom > this.model.data.strom ) {
          result.push({ type: "Error", text: `The power <b>[${toFixed(child.model.data.strom)} A]</b> of the input sources are bigger than the maximum power which the socket can handle <b>[${this.model.data.strom} A]</b>` })
        }
      })
    }

    // Calculate if the accumulated "operationHours". Must be less than 24 hours
    //
    if ( this.children.length > 0 ) {
      const data = this.children[0].calculateConsumptionData()
      // skip the first element, because we have already the data of the first element in charge
      // ( slice(1) )
      this.children.slice(1).forEach( child => {
        data.operationHours += child.calculateConsumptionData().operationHours 
      })
      // the "operationHours" divided by the socket count must be less than 24 hours
      //
      if ( (data.operationHours / this.model.data.buchsen) > 24 ) {
        if ( this.model.data.buchse > 1 ) {
          result.push({ type: "Warning", text: `The car socket are occupied more than 24 hours a day. Install an additional socket.` })
        } else {
          result.push({ type: "Warning", text: `The car socket is occupied more than 24 hours a day. Install an additional socket.` })
        }
      }
    }

    // Spannungen müssen passen
    const base = this.getBaseVoltage()
    if ( this.model.data.spannung !== base ) {
      result.push({ type: "Error", text: `The USB unit requires a supply voltage of <b>[${this.model.data.spannung} V]</b>. Input voltage of <b>[${this.getBaseVoltage()} V]</b> is not supported.` })
    }
 
    return result
  }

  calculateConsumptionData () {
    // the car socket uses the voltage provided by the parent (getBaseVoltage)
    // ...even if this component breaks. Check the warnings in the UI
    const result = { strom: 0, spannung: this.parent?.getBaseVoltage(), watt: 0, amperestunden: 0 }
    if ( this.children.length > 0 ) {
      result.strom = this.children[0].calculateConsumptionData().strom
      result.amperestunden = this.children[0].calculateConsumptionData().amperestunden
      this.children.slice(1).forEach( child => {
        const consumption = child.calculateConsumptionData() 
        result.strom += consumption.strom
        result.amperestunden += consumption.amperestunden 
      })
    }
    result.watt = (result.strom * result.spannung)
    return result
  }
}
