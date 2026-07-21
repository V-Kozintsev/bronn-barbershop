<script setup>
import MasterCard from "../components/MasterCard.vue";
import { masters } from "../data/siteData";
</script>

<template>
  <section class="page-intro">
    <span class="eyebrow">Мастера</span>
    <h1>Команда Бронн</h1>
    <p>
      Каждый мастер ведет клиента от консультации до рекомендаций по уходу, чтобы
      стрижка не требовала отдельной инструкции каждое утро.
    </p>
  </section>

  <section class="section">
    <div class="master-grid">
      <MasterCard v-for="master in masters" :key="master.name" :master="master" />
    </div>
  </section>
</template>
