
import components from "./Fridge_data.js"

function longname(model) {
  return model.name + " (" + model.data.liter + " Liter, " + model.data.watt + " Watt)"
}

function sortComponents (payload) {
  return payload.sort((a, b) => a.data.liter - b.data.liter)
}

function enrichComponents (payload) {
  payload.forEach(element => {
    element.type = "fridge"
    element.longname = longname(element)
    element.data.watt = element.data.strom * element.data.spannung
    element.longname = element.name + " (" + element.data.liter + " Liter, " + element.data.watt + " Watt)"
  })
  return payload
}

export default {
  namespaced: true,
  state: {
    components: enrichComponents(sortComponents(components))
  },
  getters: {
    getByUuid: (state, getters, rootState, rootGetters) => (uuid) => {
      return state.components.find(component => component.uuid === uuid)
    },
    longname: (state, getters, rootState, rootGetters) => (model) => {
      return longname(model)
    }
  }
}
