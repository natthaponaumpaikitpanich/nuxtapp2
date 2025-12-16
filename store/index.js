export const state = () => ({
  cart: []
})

export const mutations = {
  ADD_TO_CART(state, product) {
    const item = state.cart.find(p => p.id === product.id)
    if (item) {
      item.qty++
    } else {
      state.cart.push({ ...product, qty: 1 })
    }
  },
  REMOVE_FROM_CART(state, id) {
    state.cart = state.cart.filter(p => p.id !== id)
  }
}

export const getters = {
  cartItems: state => state.cart,
  totalPrice: state =>
    state.cart.reduce((sum, item) => sum + item.price * item.qty, 0)
}