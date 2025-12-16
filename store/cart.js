export const state = () => ({
items: []
})


export const mutations = {
ADD_TO_CART(state, product) {
const item = state.items.find(i => i.id === product.id)
if (item) {
item.qty++
} else {
state.items.push({ ...product, qty: 1 })
}
},
REMOVE_FROM_CART(state, id) {
state.items = state.items.filter(i => i.id !== id)
}
}


export const getters = {
cartItems: state => state.items,
totalPrice: state =>
state.items.reduce((sum, i) => sum + i.price * i.qty, 0)
}