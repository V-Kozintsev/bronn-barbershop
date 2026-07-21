<script setup>
import { MapPin, Phone, Send } from "lucide-vue-next";
import { contacts, navItems } from "../data/siteData";
</script>

<template>
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">Бронн</div>
        <p>
          Барбершоп в центре Санкт-Петербурга для тех, кто ценит спокойный сервис,
          точную форму и понятный результат.
        </p>
      </div>
      <nav aria-label="Навигация в футере">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to">
          {{ item.label }}
        </RouterLink>
      </nav>
      <div class="footer-contacts">
        <a :href="contacts.phoneHref"><Phone :size="18" />{{ contacts.phone }}</a>
        <a :href="contacts.telegramHref"><Send :size="18" />Telegram</a>
        <span><MapPin :size="18" />{{ contacts.address }}</span>
      </div>
      <div class="legal">
        <span>ООО «Бронн Барбер»</span>
        <span>ИНН 7800000000</span>
        <span>ОГРН 1267800000000</span>
        <RouterLink to="/privacy">Политика конфиденциальности</RouterLink>
        <span>Не является публичной офертой</span>
      </div>
    </div>
    <div class="pusk-strip">
      <a href="https://pusk-web.ru" target="_blank" rel="noreferrer">
        Сайт разработан от Pusk Web
      </a>
    </div>
  </footer>
</template>
