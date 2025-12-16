export const state = () => ({
products: [
{ id: 1, name: 'เสื้อยืด', description: 'เสื้อยืดสีขาว', price: 199 },
{ id: 2, name: 'กางเกงยีนส์', description: 'กางเกงยีนส์ขายาว', price: 499 }
]
})


export const getters = {
allProducts: state => state.products
}