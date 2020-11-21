import {
  ADD_OLD_PRODUCT,
  ADD_NEW_PRODUCT,
  CHOOSE_ALL,
  CANCEL_ALL
} from "./mutations-types"
export default {
  addToCart(context, payload) {
    return new Promise((resolve,reject) => {
      let oldProduct = context.state.cartList.find(item => {
        return item.iid === payload.iid
      })
      if (oldProduct) {
        context.commit(ADD_OLD_PRODUCT, oldProduct)
        resolve("该商品加一")
      } else {
        context.commit(ADD_NEW_PRODUCT, payload)
        resolve("添加新商品成功")
      }
    })
  },
  chooseAll(context,payload) {
    context.commit(CHOOSE_ALL)
  },
  cancelAll(context,payload) {
    context.commit(CANCEL_ALL)
  }
}