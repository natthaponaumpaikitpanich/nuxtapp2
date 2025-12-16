<template>
<div>
<h1>รายการสินค้า</h1>
<div class="grid">
<ProductCard
v-for="p in products"
:key="p.id"
:product="p"
/>
</div>
<nuxt-link to="/cart">ไปที่ตะกร้า</nuxt-link>
</div>
</template>


<script>
import ProductCard from '@/components/ProductCard.vue'


export default {
components: { ProductCard },
computed: {
products() {
return this.$store.getters['product/allProducts']
}
}
}
</script>


<style scoped>
.grid {
display: flex;
gap: 20px;
}
</style>