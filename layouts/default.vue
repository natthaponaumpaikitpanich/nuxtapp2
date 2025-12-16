<template>
  <v-app>
    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Top bar -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>My Shop</v-toolbar-title>
    </v-app-bar>

    <!-- Page -->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
      items: [
        { title: 'หน้าแรก', icon: 'mdi-home', to: '/' },
        { title: 'สินค้า', icon: 'mdi-cart', to: '/productlist' },
        { title: 'ตะกร้า', icon: 'mdi-basket', to: '/cart' },
        { title: 'inspire', icon: 'mdi-basket', to: '/inspire' },
      ],
    }
  },
}
</script>
