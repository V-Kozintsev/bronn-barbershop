<script setup>
import { ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { Menu, X, Phone, CalendarDays } from "lucide-vue-next";
import { contacts, navItems } from "../data/siteData";

const isOpen = ref(false);
const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false;
  }
);
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" aria-label="Бронн Барбершоп">
      <span class="brand-mark">Б</span>
      <span>
        <strong>Бронн</strong>
        <small>barbershop spb</small>
      </span>
    </RouterLink>

    <nav class="desktop-nav" aria-label="Основная навигация">
      <RouterLink v-for="item in navItems" :key="item.to" :to="item.to">
        {{ item.label }}
      </RouterLink>
    </nav>

    <div class="header-actions">
      <a class="icon-link" :href="contacts.phoneHref" aria-label="Позвонить">
        <Phone :size="19" />
      </a>
      <RouterLink class="button button-small" to="/booking">
        <CalendarDays :size="18" />
        Записаться
      </RouterLink>
      <button
        class="menu-button"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        @click="isOpen = !isOpen"
      >
        <Menu v-if="!isOpen" :size="24" />
        <X v-else :size="24" />
      </button>
    </div>

    <Transition name="menu">
      <div v-if="isOpen" id="mobile-menu" class="mobile-menu">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to">
          {{ item.label }}
        </RouterLink>
        <div class="mobile-menu__meta">
          <a :href="contacts.phoneHref">{{ contacts.phone }}</a>
          <span>{{ contacts.hours }}</span>
        </div>
      </div>
    </Transition>
  </header>
</template>
