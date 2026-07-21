<script setup>
import { ArrowRight, Clock, MapPin, Star } from "lucide-vue-next";
import ServiceCard from "../components/ServiceCard.vue";
import MasterCarousel from "../components/MasterCarousel.vue";
import { assets, contacts, facts, masters, services } from "../data/siteData";
</script>

<template>
  <section class="hero-section">
    <img class="hero-bg" :src="assets.heroImage" alt="Интерьер барбершопа Бронн" />
    <div class="hero-copy">
      <span class="eyebrow">Санкт-Петербург · ул. Рубинштейна</span>
      <h1>Бронн</h1>
      <p>
        Мужские стрижки, борода, бритье и уход в барбершопе на Рубинштейна.
        Чёткий результат, спокойный сервис и мастера, которые слышат задачу.
      </p>
      <div class="hero-actions">
        <RouterLink class="button" to="/booking">
          Записаться онлайн
          <ArrowRight :size="19" />
        </RouterLink>
        <a class="button button-ghost" :href="contacts.phoneHref">{{ contacts.phone }}</a>
      </div>
      <div class="hero-directions">
        <div v-for="fact in facts" :key="fact.label">
          <strong>{{ fact.value }}</strong>
          <span>{{ fact.label }}</span>
        </div>
      </div>
    </div>
    <div class="hero-visit">
      <span>Сегодня</span>
      <strong>10:00-22:00</strong>
      <p>{{ contacts.address }}</p>
      <RouterLink to="/booking">Выбрать время <ArrowRight :size="18" /></RouterLink>
    </div>
  </section>

  <section class="section">
    <div class="section-heading">
      <span class="eyebrow">Услуги</span>
      <h2>Без лишней суеты, с понятным результатом</h2>
      <RouterLink to="/services">Весь прайс <ArrowRight :size="18" /></RouterLink>
    </div>
    <div class="service-grid">
      <ServiceCard v-for="service in services.slice(0, 4)" :key="service.title" :service="service" />
    </div>
  </section>

  <section class="split-section">
    <img :src="assets.toolsImage" alt="Инструменты барбершопа" loading="lazy" />
    <div>
      <span class="eyebrow">Подход</span>
      <h2>Сначала форма, потом средство</h2>
      <p>
        Мастер смотрит на рост волос, посадку бороды, привычку носить головной убор
        и время, которое вы готовы тратить утром. Поэтому стрижка живет в реальности,
        а не только в день визита.
      </p>
      <ul class="check-list">
        <li><Star :size="18" /> Персональная схема ухода после каждой услуги</li>
        <li><Clock :size="18" /> Запас между визитами, чтобы не торопить гостей</li>
        <li><MapPin :size="18" /> Центр города, 12 минут от Невского проспекта</li>
      </ul>
    </div>
  </section>

  <section class="section section-muted">
    <div class="section-heading">
      <span class="eyebrow">Команда</span>
      <h2>Мастера, к которым возвращаются</h2>
      <RouterLink to="/masters">Все мастера <ArrowRight :size="18" /></RouterLink>
    </div>
    <MasterCarousel :masters="masters" />
  </section>
</template>
