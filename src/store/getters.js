export default  {
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  totalPrice(state) {
    return state.cartList.filter(item => 
      item.checked === true
    ).reduce((pre,cur) => {
      return pre + cur.count * cur.price
    },0).toFixed(2)
  },
  calculation(state) {
    return state.cartList.filter(item => 
       item.checked === true
    ).reduce((pre,cur) => {
      return pre + cur.count
    },0)
  },
  
}
