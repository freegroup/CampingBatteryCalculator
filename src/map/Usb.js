import RightNode from './RightNode'

export default class Usb extends RightNode {
  constructor() {
    super()
  }

  getChildCandidates () {
    return ["usbConsumer"] 
  }

  calculateConsumptionData () {
    const result = { strom: 0, spannung: this.model.data.spannung, watt: 0 }
    if ( this.children.length > 0 ) {
      // check that the attributes "strom" and "spannung" are in place
      result.strom = this.children[0].calculateConsumptionData().strom
      this.children.slice(1).forEach( child => {
        result.strom += child.calculateConsumptionData().strom 
      })
    }
    result.watt = result.strom * result.spannung
    return result
  }
}
