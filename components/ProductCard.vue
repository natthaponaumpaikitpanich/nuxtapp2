<template>
<div class="card">
<h3>{{ product.name }}</h3>
<p>{{ product.description }}</p>
<p class="price">{{ product.price }} บาท</p>
<button @click="add">เพิ่มลงตะกร้า</button>
</div>
</template>


<script>
export default {
props: { product: Object },
methods: {
add() {
this.$store.commit('cart/ADD_TO_CART', this.product)
}
}
}
</script>


<style scoped>
.card {
border: 1px solid #ddd;
border-radius: 10px;
padding: 16px;
width: 220px;
box-shadow: 0 4px 10px rgba(0,0,0,.1);
}
.price {
font-weight: bold;
color: #2c7be5;
}
button {
width: 100%;
background: #2c7be5;
color: white;
border: none;
padding: 8px;
border-radius: 6px;
cursor: pointer;
}
</style>