<script setup>
import { ref } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import MasterCard from "./MasterCard.vue";

defineProps({
  masters: {
    type: Array,
    required: true,
  },
});

const track = ref(null);

function moveCarousel(direction) {
  if (!track.value) {
    return;
  }

  const card = track.value.querySelector(".master-card");
  const step = card ? card.getBoundingClientRect().width + 18 : 320;
  track.value.scrollBy({ left: step * direction, behavior: "smooth" });
}
</script>

<template>
  <div class="master-carousel">
    <div class="carousel-actions" aria-label="Навигация по мастерам">
      <button type="button" aria-label="Предыдущий мастер" @click="moveCarousel(-1)">
        <ChevronLeft :size="21" />
      </button>
      <button type="button" aria-label="Следующий мастер" @click="moveCarousel(1)">
        <ChevronRight :size="21" />
      </button>
    </div>
    <div ref="track" class="master-track">
      <MasterCard v-for="master in masters" :key="master.name" :master="master" />
    </div>
  </div>
</template>
