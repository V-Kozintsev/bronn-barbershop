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
  <RouterLink class="service-card" to="/booking">
    <img :src="service.image" :alt="service.title" loading="lazy" />
    <div>
      <span>{{ service.duration }}</span>
      <h3>{{ service.title }}</h3>
      <p>{{ service.description }}</p>
      <strong>{{ service.price }}</strong>
    </div>
    <ArrowUpRight class="card-arrow" :size="20" />
  </RouterLink>
</template>
