<script setup>
import MasterCarousel from "../components/MasterCarousel.vue";
import { masters } from "../data/siteData";
</script>

<template>
  <section class="page-intro page-intro-compact">
    <span class="eyebrow">Мастера</span>
    <h1>Команда Бронн</h1>
    <p>
      Каждый мастер ведет клиента от консультации до рекомендаций по уходу, чтобы
      стрижка не требовала отдельной инструкции каждое утро.
    </p>
  </section>

  <section class="section section-tight">
    <MasterCarousel :masters="masters" />
  </section>
</template>
