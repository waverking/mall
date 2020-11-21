import {
  ADD_OLD_PRODUCT,
  ADD_NEW_PRODUCT,
  CHOOSE_ALL,
  CANCEL_ALL
} from "./mutations-types"
export default {
  [ADD_OLD_PRODUCT](state, payload) {
    payload.count += 1
  },
  [ADD_NEW_PRODUCT](state, payload) {
    payload.checked = true
    payload.count = 1
    state.cartList.push(payload)
  },
  [CHOOSE_ALL](state,payload) {
    for(let item of state.cartList) {
      item.checked = true
    }
  },
  [CANCEL_ALL](state,payload) {
    for(let item of state.cartList) {
      item.checked = false
    }
  }
}