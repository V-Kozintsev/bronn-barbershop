<script setup>
import { ArrowUpRight } from "lucide-vue-next";

defineProps({
  service: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink
    class="service-card"
    :to="{ path: '/booking', query: { service: service.title } }"
  >
    <img :src="service.image" :alt="service.title" loading="lazy" />
    <div>
      <span>{{ service.category }} · {{ service.duration }}</span>
      <h3>{{ service.title }}</h3>
      <p>{{ service.description }}</p>
      <strong>{{ service.price }}</strong>
      <em>Выбрать услугу</em>
    </div>
    <ArrowUpRight class="card-arrow" :size="20" />
  </RouterLink>
</template>
