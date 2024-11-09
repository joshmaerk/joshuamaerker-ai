<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CookieBanner from './components/CookieBanner.vue'
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
  <CookieBanner />
</template>