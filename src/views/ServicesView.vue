<script setup>
import { Scissors, Sparkles, Timer } from "lucide-vue-next";
import ServiceCard from "../components/ServiceCard.vue";
import { services } from "../data/siteData";
</script>

<template>
  <section class="page-intro page-intro-compact">
    <span class="eyebrow">Прайс</span>
    <h1>Услуги и форматы визита</h1>
    <p>
      {{ services.length }} услуг: стрижки, борода, бритье, уход и комплексные
      визиты. Базовые цены указаны до консультации.
    </p>
  </section>

  <section class="section section-tight">
    <div class="service-grid service-grid-wide">
      <ServiceCard v-for="service in services" :key="service.title" :service="service" />
    </div>
  </section>

  <section class="pricing-band">
    <div>
      <Scissors :size="24" />
      <h2>Экспресс-коррекция</h2>
      <p>Контур висков, шеи или бороды между основными визитами.</p>
      <strong>от 900 ₽</strong>
      <RouterLink :to="{ path: '/booking', query: { service: 'Экспресс-коррекция' } }">
        Записаться
      </RouterLink>
    </div>
    <div>
      <Sparkles :size="24" />
      <h2>Уход за кожей головы</h2>
      <p>Очищение, массаж и легкая укладка после стрижки.</p>
      <strong>от 1 200 ₽</strong>
      <RouterLink :to="{ path: '/booking', query: { service: 'Барбер-SPA' } }">
        Записаться
      </RouterLink>
    </div>
    <div>
      <Timer :size="24" />
      <h2>Первый визит</h2>
      <p>Расширенная консультация, подбор формы и домашнего ухода.</p>
      <strong>+ 20 мин</strong>
      <RouterLink :to="{ path: '/booking', query: { service: 'Консультация по образу' } }">
        Записаться
      </RouterLink>
    </div>
  </section>
</template>
