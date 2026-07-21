<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import CookieConsent from "./components/CookieConsent.vue";
</script>

<template>
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <CookieConsent />
  <SiteFooter />
</template>
