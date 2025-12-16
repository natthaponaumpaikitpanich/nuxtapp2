<template>
<div>
<h1>ตะกร้าสินค้า</h1>
<CartItem
v-for="i in cart"
:key="i.id"
:item="i"
@remove="remove"
/>
<h3>รวมทั้งหมด: {{ total }} บาท</h3>
<nuxt-link to="/">กลับหน้าสินค้า</nuxt-link>
</div>
</template>


<script>
import CartItem from '@/components/CartItem.vue'


export default {
components: { CartItem },
computed: {
cart() {
return this.$store.getters['cart/cartItems']
},
total() {
return this.$store.getters['cart/totalPrice']
}
},
methods: {
remove(id) {
this.$store.commit('cart/REMOVE_FROM_CART', id)
}
}
}
</script>