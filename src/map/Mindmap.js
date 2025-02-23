import $ from 'jquery'
import { drawLine, disableSelection, htmlToElement, ARROW_STROKE, CANVAS_WIDTH, createSvg } from "./utils.js"
import GenericNode from './GenericNode'
import LeftDefaultNode from './LeftDefaultNode'
import RightDefaultNode from './RightDefaultNode'
import { toFixed } from "@/utils/Wire.js"

export default class Mindmap extends GenericNode {
  constructor(id, width, height) {
    super()
    this.lineCanvasWidth = 80
    this.width = width
    this.height = height
    this.leftChildren = []
    this.rightChildren = []
    this.selection = null
    this.listeners = []
    this.html = null
    this.centerLabel = null
    this.host = $(id)
    this.leftSide = undefined
    this.leftDefaultNode = new LeftDefaultNode()
    this.rightDefaultNode = new RightDefaultNode()

    this.host.append(this.getHTMLElement())

    this.center()

    disableSelection(this.html)

    this.leftChildrenHTML.append(this.leftDefaultNode.getHTMLElement())
    this.rightChildrenHTML.append(this.rightDefaultNode.getHTMLElement())
  }

  getChildCandidates ( leftSide ) {
    if (leftSide) {
      return ["shoreBooster", "killSwitch", "fuse", "solarSet", "solarBooster", "starterBooster"]
    }
    if ( this.model.data.bms === "internal") {
      return ["killSwitch", "fuse", "fuseBox"] 
    }

    return ["batteryProtect", "killSwitch", "fuse"] 
  }

  /**
   * The battery do not have any build in fuse.
   */
  getFuseAmp() {
    return undefined
  }

  getBaseVoltage () {
    return this.model?.data.spannung
  }

  getMaxChargeVoltage() {
    return this.model?.data.ladespannung
  }

  reset () {
    this.leftChildren = []
    this.rightChildren = []
    if (this.html !== null ) {
      this.html.remove()
      this.html = null
    }
    this.host.append(this.getHTMLElement())

    $(this.getAnchor())[0].scrollIntoView({
      behavior: 'auto',
      inline: 'center',
      block: 'center'
    })
    this.leftChildrenHTML.append(this.leftDefaultNode.getHTMLElement())
    this.rightChildrenHTML.append(this.rightDefaultNode.getHTMLElement())

    this.leftDefaultNode.hidden = false
    this.rightDefaultNode.hidden = false
    $(this.rightLines).css('display', 'none')      
    $(this.addRightChildIcon).addClass('pulse')
    $(this.leftLines).css('display', 'none')      
    $(this.addLeftChildIcon).addClass('pulse')
  }

  center () {
    $(this.getAnchor())[0].scrollIntoView({
      behavior: 'auto',
      inline: 'center',
      block: 'center'
    })
  }

  getComponentContainer () {
    return this.centerLabel
  }

  /**
   * Returns the current selected nodes.<br>
   *
   * @type {Node}
   * */
  getCurrentSelection() {
    return this.selection
  }

  /**
   * Set the current selected node of the mindmap and reset the old
   * selection
   *
   * @private
   * */
  setCurrentSelection(node) {
    if (this.selection !== null) {
      this.selection.setSelected(false)
    }
    this.selection = null
    if (node !== null) {
      this.selection = node
      node.setSelected(true)
    }
    this.notifyListeners({ event: "select", component: this.selection })
  }

  /**
   * Called by the framework to inform the mindmap that the root node has been selected.
   *
   * @param {boolean} flag [true] if you want mark this element as selected
   * @final
   * */
  setSelected(flag) {
    if (flag === true) {
      $(this.getAnchor()).addClass('selected_node')
    } else {
      $(this.getAnchor()).removeClass('selected_node')
    }
  }

  getAnchor() {
    return this.centerLabel
  }

  setModel ( model ) {
    super.setModel(model)
    this.updateStatusbar()
    this.updateStatusIcons(true)
    this.calculateSetupPrice()
  }

  /**
   * @type HTMLElement
   * */
  addNode(node) {
    if (node.parent && node.parent !== this ) {
      node.parent.removeNode(node)
    }

    if (node.leftSide) {
      this.leftChildrenHTML.append(node.getHTMLElement())
      this.leftChildren.push(node)
      this.leftDefaultNode.hidden = true
      $(this.leftLines).css('display', 'initial')
      $(this.addLeftChildIcon).removeClass('pulse')
    } else {
      this.rightChildrenHTML.append(node.getHTMLElement())
      this.rightChildren.push(node)
      this.rightDefaultNode.hidden = true
      $(this.addRightChildIcon).removeClass('pulse')
      $(this.rightLines).css('display', 'initial')
    }

    // The mindmap is parent and to root element of this node
    //
    node.setParent(this)
    node.setMindmap(this)

    this.updateStatusbar()
    this.updateStatusIcons()
    node.updateStatusIcons()
    this.calculateSetupPrice()
  }

  /**
   * @type HTMLElement
   * */
  removeNode(node) {
    node.getHTMLElement().remove()
    this.leftChildren = $.grep(this.leftChildren, (value) => value !== node)
    this.rightChildren = $.grep(this.rightChildren, (value) => value !== node)

    // The mindmap is parent and to root element of this node
    //
    node.setParent(null)
    node.setMindmap(null)
    this.drawLines()

    if ( this.leftChildren.length === 0 && node.leftSide === true) {
      this.leftDefaultNode.hidden = false
      $(this.leftLines).css('display', 'none')
      $(this.addLeftChildIcon).addClass('pulse')
    }
    if ( this.rightChildren.length === 0 && node.leftSide === false) {
      this.rightDefaultNode.hidden = false
      $(this.rightLines).css('display', 'none')      
      $(this.addRightChildIcon).addClass('pulse')
    }

    this.updateStatusbar()
    this.updateStatusIcons()
  }

  /**
   * @type HTMLElement
   * */
  getHTMLElement() {
    if (this.html === null) {
      this.html = document.createElement('table')
      this.html.className = 'root'
      this.html.style.width = `${this.width}px`
      this.html.style.height = `${this.height}px`

      {
        const row = this.html.insertRow()

        this.leftChildrenHTML = row.insertCell()
        {
          this.leftChildrenHTML.className = 'left_canvas producer'
          this.leftChildrenHTML.width = `${parseInt(this.width / 2)}`
        }

        this.leftLines = row.insertCell()
        {
          this.leftLines.className = 'producer'
          this.leftLines.style.width = `${this.lineCanvasWidth}px`
          this.leftLines.style.height = `${this.height}px`
          this.leftLines.style.display = `none`
          this.leftCanvas = createSvg(this.leftLines) // createCanvas(this.leftLines)
          this.leftCanvas.style.height = `${this.height}px`
          this.leftCanvas.setAttribute('width', this.lineCanvasWidth)
          this.leftCanvas.setAttribute('height', this.height)
        }

        const addLeftChildCell = row.insertCell()
        {
          addLeftChildCell.className = 'storage'
          this.addLeftChildIcon = htmlToElement('<i aria-hidden="true" class="pulse addChild_icon v-icon mdi mdi-plus-circle-outline"></i>')
          addLeftChildCell.append(this.addLeftChildIcon)
        }

        this.centerCanvas = row.insertCell()
        {
          this.centerCanvas.className = 'node storage'
          this.labelContainer = document.createElement('div')
          {
            this.centerCanvas.append(this.labelContainer)
            this.toolbarDiv = document.createElement('div')
            {
              this.labelContainer.append(this.toolbarDiv)
              this.toolbarDiv.className = 'toolbar'

              this.gaugeIcon = htmlToElement('<i aria-hidden="true" class="float-left toolbar_icon v-icon mdi mdi-gauge"></i>')
              this.toolbarDiv.append(this.gaugeIcon)

              this.configIcon = htmlToElement('<i aria-hidden="true" class="float-left toolbar_icon pr-8 v-icon mdi mdi-widgets-outline"></i>')
              this.toolbarDiv.append(this.configIcon)
            }

            this.centerLabel = document.createElement('div')
            {
              this.centerLabel.className = 'container'
              this.labelContainer.append(this.centerLabel)
            }

            this.errorIcon = htmlToElement('<i aria-hidden="true" class="error_icon pl-3 v-icon mdi mdi-alert"></i>')
            this.labelContainer.append(this.errorIcon)

            this.statusbarDiv = htmlToElement('<div class="balancebar"></div>')
            this.labelContainer.append(this.statusbarDiv)
            this.inputLabel = htmlToElement('<div class="input_label float-left">Input</div>')
            this.statusbarDiv.append(this.inputLabel)
            this.runtimeLabel = htmlToElement('<div class="runtime_label text-center">Running time</div>')
            this.statusbarDiv.append(this.runtimeLabel)
            this.outputLabel = htmlToElement('<div class="output_label float-right">Output</div>')
            this.statusbarDiv.append(this.outputLabel)
          }
        }

        const addRightChildCell = row.insertCell()
        {
          addRightChildCell.className = 'storage'
          this.addRightChildIcon = htmlToElement('<i aria-hidden="true" class="pulse addChild_icon v-icon mdi mdi-plus-circle-outline"></i>')
          addRightChildCell.append(this.addRightChildIcon)
        }

        this.rightLines = row.insertCell()
        {
          this.rightLines.className = 'consumer'
          this.rightLines.style.width = `${this.lineCanvasWidth}px`
          this.rightLines.style.height = `${this.height}px`
          this.rightLines.style.display = `none`
          // this.rightCanvas = createCanvas(this.rightLines)
          this.rightCanvas = createSvg(this.rightLines)
          this.rightCanvas.style.height = `${this.height}px`
          this.rightCanvas.setAttribute('width', this.lineCanvasWidth)
          this.rightCanvas.setAttribute('height', this.height)
        }

        this.rightChildrenHTML = row.insertCell()
        {
          this.rightChildrenHTML.className = 'right_canvas consumer'
          this.rightChildrenHTML.width = `${parseInt(this.width / 2)}`
        }
      }

      this.afterCreateHTML()
    }
    return this.html
  }

  afterCreateHTML() {
    super.afterCreateHTML()

    $(this.centerLabel).on('click', (event) => {
      event.stopPropagation()
      this.setCurrentSelection(this)
    })
    $(this.configIcon).on("click", event => {
      event.stopPropagation()
      this.onComponentConfigure(this)
    })

    $(this.centerLabel).on("click", event => {
      event.stopPropagation()
      this.onComponentShowInfo(this)
    })

    $(this.gaugeIcon).on("click", event => {
      event.stopPropagation()
      this.onComponentBalance(this)
    })

    $(this.addLeftChildIcon).on("click", event => {
      event.stopPropagation()
      this.notifyListeners({ event: "addChild", component: this, leftSide: true, candidates: this.getChildCandidates(true) })
    })

    $(this.addRightChildIcon).on("click", event => {
      event.stopPropagation()
      this.notifyListeners({ event: "addChild", component: this, leftSide: false, candidates: this.getChildCandidates(false) })
    })  

    $(this.errorIcon).on("click", (event) => {
      event.stopPropagation()
      this.onComponentShowErrors(this)
    })
  }

  drawLines(recursive) {
    this.adjustCanvasHeight()

    let thisAnchor = $(this.leftCanvas).offset()
    this.leftCanvas.innerHTML = ""
    this.leftChildren.forEach((child) => {
      const percentage = child.getPercentageOfAh()
      const anchor = child.getAbsoluteAnchor()
      const top = anchor.top - thisAnchor.top + child.getAnchorHeight() / 2
      const lineWidth = Math.max(3, ARROW_STROKE * percentage)
      const line = drawLine(this.leftCanvas, '#5CC9FA', lineWidth, { x: 5, y: top }, { x: CANVAS_WIDTH / 2, y: top }, { x: CANVAS_WIDTH / 2, y: this.height / 2 }, { x: CANVAS_WIDTH - 5, y: this.height / 2 })
      $(line).on('click', () => { 
        this.notifyListeners({ event: "wireSettings", component: child })
      })
      if ( recursive ) {
        child.drawLines(recursive)
      }
    })

    thisAnchor = $(this.rightCanvas).offset()
    this.rightCanvas.innerHTML = ""

    this.rightChildren.forEach((child) => {
      const percentage = child.getPercentageOfAh()
      const anchor = child.getAbsoluteAnchor()
      const top = anchor.top - thisAnchor.top + child.getAnchorHeight() / 2
      const lineWidth = Math.max(1, ARROW_STROKE * percentage)
      const line = drawLine(this.rightCanvas, '#C2185B', lineWidth, { x: 5, y: this.height / 2 }, { x: CANVAS_WIDTH / 2, y: this.height / 2 }, { x: CANVAS_WIDTH / 2, y: top }, { x: CANVAS_WIDTH - 5, y: top }, 15, false, false)
      $(line).on('click', () => { 
        this.notifyListeners({ event: "wireSettings", component: child })
      })
      if ( recursive ) {
        child.drawLines(recursive)
      }
    })
  }

  calculateInputData () {
    const result = { strom: 0, spannung: 0, watt: 0, amperestunden: 0 }
    if ( this.leftChildren.length > 0 ) {
      let childData = this.leftChildren[0].calculateOutputData()
      // check that the attributes "strom" and "spannung" are in place
      result.amperestunden = childData.amperestunden
      result.strom = childData.strom
      result.spannung = childData.spannung
      this.leftChildren.slice(1).forEach( child => {
        childData = child.calculateOutputData()
        result.strom += childData.strom 
        result.amperestunden += childData.amperestunden 
      })
    }
    result.watt = result.strom * result.spannung
    return result
  }

  calculateOutputData () {
    const result = { strom: 0, spannung: this.model.data.spannung, watt: 0, amperestunden: 0 }
    if ( this.rightChildren.length > 0 ) {
      // check that the attributes "strom" and "spannung" are in place
      result.strom = this.rightChildren[0].calculateConsumptionData().strom
      result.amperestunden = this.rightChildren[0].calculateConsumptionData().amperestunden
      this.rightChildren.slice(1).forEach( child => {
        result.strom += child.calculateConsumptionData().strom 
        result.amperestunden += child.calculateConsumptionData().amperestunden 
      })
    }
    result.watt = (result.strom * result.spannung)
    return result
  }

  /**
   *
   * @private
   * */
  adjustCanvasHeight() {
    this.leftCanvas.setAttribute('height', this.height)
    this.rightCanvas.setAttribute('height', this.height)

    return this.height
  }

  onComponentAddChild(parent, leftSide) {
    this.notifyListeners({ event: "addChild", component: parent, leftSide: leftSide, candidates: parent.getChildCandidates() })
  }

  onComponentRemoveChild(node) {
    this.notifyListeners({ event: "removeChild", component: node })
  }

  onComponentConfigure(component) {
    this.notifyListeners({ event: "configure", component: component })
  }

  onComponentTimer(component) {
    this.notifyListeners({ event: "timer", component: component })
  }

  onComponentShowErrors(component) {
    this.notifyListeners({ event: "showError", component: component })
  }

  onComponentShowInfo(component) {
    this.notifyListeners({ event: "showInfo", component: component })
  }

  onComponentBalance(component) {
    this.notifyListeners({ event: "showBalance", component: component })
  }

  getErrorMessages () {
    const result = []
    
    // because the possible output devices are related to the used accu, we must 
    // dynamic check the we have connected only allowed devices.
    //
    this.rightChildren.forEach( child => {
      if ( !this.getChildCandidates(false).includes( child.model.type )) {
        result.push( { type: "Error", text: `Battery of type <b>'${this.model.data.type}'</b> do not allow a direct connection to a device of type <b>'${child.model.type}'</b>` } )
      }
    })

    const isWrongComponent = child => {
      // we found an BMS. perfect
      if ( child.model.type === "batteryProtect" ) {
        return false
      }
      // We found a non BMS and non allowed device type in the chain
      if ( !this.getChildCandidates(false).includes( child.model.type )) {
        return true
      }
      
      // check if we find at least one wrong device in the recursive subchildren
      return child.children.find( subChild => isWrongComponent(subChild))
    }

    // check that a BMS is in place if the accu do not have any
    //
    if ( this.model.data.bms === "none" && this.rightChildren.length > 0 ) {
      const hasWrongChildren = this.rightChildren.find( subChild => isWrongComponent(subChild))
      if ( hasWrongChildren ) {
        result.push({ type: "Error", text: `Battery type <b>${this.model.data.type}</b> requires a battery protection between all consumers to avoid deep discharge and damage of the battery.` })
      }
    }

    return result
  }

  updateStatusbar () {
    // something has changed in the client config. We can recalculate the balance values for the input/output
    // labels
    const input = this.calculateInputData()
    const output = this.calculateOutputData()
    const inputAh = input.amperestunden
    const outputAh = output.amperestunden
    const diff = inputAh - outputAh
    let runtimeDays = ""
    if ( diff >= 0 || this.model === null ) {
      runtimeDays = '<i aria-hidden="true" class="v-icon mdi mdi-all-inclusive"></i>'
    } else {
      runtimeDays = toFixed(this.model.data.effective_amperestunden / Math.abs(diff))
    }
    this.inputLabel.innerHTML = "Input<br>" + toFixed(inputAh) + " Ah"
    this.runtimeLabel.innerHTML = "Running Time<br>" + runtimeDays + " days"
    this.outputLabel.innerHTML = "Output<br>" + toFixed(outputAh) + " Ah"
  }

  updateStatusIcons(recursive) {
    const msgs = this.getErrorMessages()
    const errors = msgs.filter(msg => msg.type === "Error").length

    this.hideError(msgs.length === 0)
    
    if ( errors === 0) {
      $(this.errorIcon).removeClass("red--text text--darken-2")
      $(this.errorIcon).addClass("yellow--text text--darken-2")
    } else {
      $(this.errorIcon).addClass("red--text text--darken-2")
      $(this.errorIcon).removeClass("yellow--text text--darken-2")
    }
    if ( recursive ) {
      this.leftChildren.forEach( child => child.updateStatusIcons(recursive))
      this.rightChildren.forEach( child => child.updateStatusIcons(recursive))
    }
  }

  /**
   * Adds a listener to the mindmap, which will be notified whenever the selection has been changed.
   * @param {String} event the kind of event you whant to listen.
   * @param {Function} listener function or listener to call if the event is fired
   */
  on(event, listener) {
    if (typeof listener.selectionChanged === "function") {
      this.listeners.push({ event: event, callback: listener.selectionChanged })
    } else if (typeof listener === "function") {
      this.listeners.push({ event: event, callback: listener })
    } else {
      throw Error("Object doesn't implement required callback interface")
    }
    return this
  }

  /**
   * Removes a listener.
   * @param {map.SelectionListener} listener the listener to remove.
   */
  off(listener) {
    this.listeners = $.grep(this.listeners, entry => (entry === listener || entry.selectionChanged === listener))
  }

  /**
   * Notifies selection listeners that the selection has been changed
   *
   * @private
   * */
  notifyListeners(event) {
    this.listeners.forEach(listener => { 
      if (listener.event === event.event) {
        listener.callback(event)
      }
    })
    this.updateStatusbar()
    this.updateStatusIcons()
    this.calculateSetupPrice()
  }

  toJson() {
    const json = {}
    json.price = this.calculateSetupPrice()
    json.center = { uuid: this.model.uuid, type: this.model.type, customData: this.model.customData || null }
    json.left = []
    json.right = []
    this.leftChildren.forEach( child => {
      json.left.push(child.toJson())
    })
    this.rightChildren.forEach( child => {
      json.right.push(child.toJson())
    })
    return json
  }
}
