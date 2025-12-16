<template>
  <div class="product-list-page">
    <h1>รายการสินค้า</h1>

    <ProductCard
      v-for="item in products"
      :key="item.id"
      :product="item"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'

export default {
  name: 'ProductListPage',

  components: {
    ProductCard
  },

  data() {
    return {
      products: [
        {
          id: 1,
          name: 'สินค้า A',
          description: 'รายละเอียดสินค้า A',
          price: 100
        },
        {
          id: 2,
          name: 'สินค้า B',
          description: 'รายละเอียดสินค้า B',
          price: 200
        },
        {
          id: 3,
          name: 'สินค้า C',
          description: 'รายละเอียดสินค้า C',
          price: 300
        }
      ]
    }
  },

  methods: {
  addToCart(product) {
    console.log('เพิ่มสินค้า:', product)

    // ✅ ต่อเข้ากับ cart store ของคุณตรง ๆ
    this.$store.dispatch('cart/setProductID', product.id)
  }
}
}
</script>
