<script setup>
defineProps({
  master: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink
    class="master-card"
    :to="{ path: '/booking', query: { master: master.name } }"
  >
    <img :src="master.image" :alt="master.name" loading="lazy" />
    <div class="master-card__body">
      <span>{{ master.role }} · {{ master.experience }}</span>
      <h3>{{ master.name }}</h3>
      <p>{{ master.bio }}</p>
      <div class="tag-row">
        <span v-for="tag in master.tags" :key="tag">{{ tag }}</span>
      </div>
      <strong>Выбрать мастера</strong>
    </div>
  </RouterLink>
</template>
