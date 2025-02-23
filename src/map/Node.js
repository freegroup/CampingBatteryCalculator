import $ from 'jquery'
import GenericNode from './GenericNode'

export default class Node extends GenericNode {
  constructor() {
    super()
    this.parent = null
    this.mindmap = null

    this.children = []
    this.leftSide = false
    this.html = null
    this.labelDiv = null
  }

  getComponentContainer () {
    return this.labelDiv
  }

  /**
   * @type HTMLElement
   * @final
   * */
  addNode(node) {
    $(this.childrenContainer).show()
    if (node.parent && node.parent !== this ) {
      node.parent.removeNode(node)
    }
    this.children.push(node)
    this.childContainer.append(node.getHTMLElement())
    node.setParent(this)
    node.setMindmap(this.mindmap)
    this.updateStatusIcons()
    node.updateStatusIcons()
    this.drawLines()
    this.mindmap.updateStatusbar()
    this.mindmap.calculateSetupPrice()
  }

  /**
   * @type HTMLElement
   * @final
   * */
  removeNode(node) {
    this.children = $.grep(this.children, (element) => element !== node)
    node.html.remove()
    node.setParent(null)
    node.setMindmap(null)
    this.updateStatusIcons()
    this.drawLines()
    this.mindmap.updateStatusbar()
    if (this.children.length === 0 ) {
      $(this.childrenContainer).hide()
    }
  }

  /**
   * Set the parent node of this element.
   * @param {Node} parent
   */
  setParent(parent) {
    this.parent = parent
    this.parent !== null && this.drawLines()
    this.renderModel()
    this.updateStatusIcons()
  }

  set hidden(flag) {
    $(this.html).css('display', flag === true ? "none" : 'block')
  }

  /**
   * Set the to root mindmap element of this node.
   *
   * @param {Mindmap} mindmap the mindmap of the element
   * */
  setMindmap(mindmap) {
    this.mindmap = mindmap
    this.children.forEach((child) => (child.setMindmap(mindmap)))
    this.renderModel()
  }

  /**
   * Called by the framework to inform this element that this node
   * has been selected.<br>
   * The node is responsible to change the graphical representation.<br>
   * Subclases can override this method to customize the style of the node
   * in the selected mode.
   *
   * @param {boolean} flag [true] if you want mark this element as selected
   * */
  setSelected(flag) {
    if (flag === true) {
      $(this.getAnchor()).addClass('selected_node')
    } else {
      $(this.getAnchor()).removeClass('selected_node')
    }
  }

  /**
   * */
  getAnchor() {
    return this.labelDiv
  }

  /**
   * */
  getAbsoluteAnchor() {
    return $(this.labelDiv).offset()
  }

  /**
   * */
  getAnchorHeight() {
    return $(this.labelDiv).height()
  }

  /**
   * */
  getAnchorBoundigBox() {
    const pos = this.getAbsoluteAnchor()
    pos.width = $(this.labelDiv).width()
    pos.height = $(this.labelDiv).height()
    return pos
  }

  /**
   *
   * @private
   * */
  adjustCanvasHeight() {
    this.canvas.setAttribute('height', 5)
    const height = $(this.childrenContainer).outerHeight()
    this.canvas.setAttribute('height', height)

    return height
  }  

  /**
   * Event after the HTML has been generate.
   *
   * */
  afterCreateHTML() {
    super.afterCreateHTML()

    $(this.addChildIcon).on("click", event => {
      event.stopPropagation()
      this.mindmap.onComponentAddChild(this, this.leftSide)
    })

    $(this.statusbarDiv).on("click", event => {
      event.stopPropagation()
      this.mindmap.onComponentTimer(this)
    })

    $(this.gaugeIcon).on("click", event => {
      event.stopPropagation()
      this.mindmap.onComponentBalance(this)
    })

    $(this.configIcon).on("click", event => {
      event.stopPropagation()
      this.mindmap.onComponentConfigure(this)
    })

    $(this.deleteIcon).on("click", event => {
      event.stopPropagation()
      this.mindmap.onComponentRemoveChild(this)
    })

    $(this.errorIcon).on("click", (event) => {
      event.stopPropagation()
      this.mindmap.onComponentShowErrors(this)
    })

    $(this.labelDiv).on("click", (event) => {
      event.stopPropagation()
      this.mindmap.onComponentShowInfo(this)
    })

    this.setSelected(false)
    this.setOperationHours(this.model.operationHours)
  }
}
