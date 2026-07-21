<script setup>
import { ref } from "vue";
import { Cookie } from "lucide-vue-next";

const storageKey = "bronn-cookie-consent";
const isVisible = ref(localStorage.getItem(storageKey) !== "accepted");

function acceptCookies() {
  localStorage.setItem(storageKey, "accepted");
  isVisible.value = false;
}
</script>

<template>
  <Transition name="cookie">
    <aside v-if="isVisible" class="cookie-banner" aria-label="Уведомление о cookie">
      <Cookie :size="22" />
      <p>
        Мы используем cookie, чтобы сайт работал стабильнее и помогал быстрее записаться.
        <RouterLink to="/privacy">Подробнее о политике конфиденциальности</RouterLink>
      </p>
      <button class="button button-small" type="button" @click="acceptCookies">Принять</button>
    </aside>
  </Transition>
</template>
