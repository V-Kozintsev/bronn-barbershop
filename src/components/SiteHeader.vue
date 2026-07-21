<script setup>
import { onBeforeUnmount, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { Phone, CalendarDays } from "lucide-vue-next";
import logoUrl from "../assets/bronn-logo.svg";
import { contacts, navItems } from "../data/siteData";

const isOpen = ref(false);
const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false;
  }
);

watch(isOpen, (open) => {
  document.body.classList.toggle("menu-open", open);
});

onBeforeUnmount(() => {
  document.body.classList.remove("menu-open");
});
</script>

<template>
  <header class="site-header" :class="{ 'menu-active': isOpen }">
    <RouterLink class="brand" to="/" aria-label="Бронн Барбершоп">
      <img :src="logoUrl" alt="" aria-hidden="true" />
      <span class="brand-word">
        <strong>БРОНН</strong>
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
        Записаться онлайн
      </RouterLink>
      <button
        class="menu-button"
        :class="{ 'is-open': isOpen }"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        aria-label="Открыть меню"
        @click="isOpen = !isOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <Teleport to="body">
      <Transition name="drawer-fade">
        <button
          v-if="isOpen"
          class="menu-scrim"
          type="button"
          aria-label="Закрыть меню"
          @click="isOpen = false"
        ></button>
      </Transition>

      <Transition name="drawer">
        <aside v-if="isOpen" id="mobile-menu" class="mobile-menu" aria-label="Мобильное меню">
          <RouterLink class="mobile-menu__brand" to="/">
            <img :src="logoUrl" alt="" aria-hidden="true" />
            <span>
              <strong>БРОНН</strong>
              <small>barbershop spb</small>
            </span>
          </RouterLink>
          <RouterLink v-for="item in navItems" :key="item.to" :to="item.to">
            {{ item.label }}
          </RouterLink>
          <RouterLink class="button mobile-menu__cta" to="/booking">Записаться онлайн</RouterLink>
          <div class="mobile-menu__meta">
            <a :href="contacts.phoneHref">{{ contacts.phone }}</a>
            <a :href="contacts.telegramHref">Telegram</a>
            <span>{{ contacts.hours }}</span>
            <span>{{ contacts.address }}</span>
          </div>
        </aside>
      </Transition>
    </Teleport>
  </header>
</template>
