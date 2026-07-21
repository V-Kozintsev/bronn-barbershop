<script setup>
import { computed, reactive, ref } from "vue";
import { CheckCircle2, Loader2 } from "lucide-vue-next";
import { services } from "../data/siteData";

const form = reactive({
  name: "",
  phone: "",
  service: services[0].title,
  date: "",
  time: "12:00",
  comment: "",
});

const touched = ref(false);
const submitting = ref(false);
const submitted = ref(false);

const phoneIsValid = computed(() => form.phone.replace(/\D/g, "").length >= 10);
const canSubmit = computed(() => form.name.trim().length > 1 && phoneIsValid.value && form.date);

function submitBooking() {
  touched.value = true;

  if (!canSubmit.value || submitting.value) {
    return;
  }

  submitting.value = true;
  window.setTimeout(() => {
    submitting.value = false;
    submitted.value = true;
  }, 700);
}

function resetForm() {
  submitted.value = false;
  touched.value = false;
  form.name = "";
  form.phone = "";
  form.service = services[0].title;
  form.date = "";
  form.time = "12:00";
  form.comment = "";
}
</script>

<template>
  <form class="booking-form" @submit.prevent="submitBooking">
    <div v-if="submitted" class="success-state">
      <CheckCircle2 :size="42" />
      <h2>Заявка принята</h2>
      <p>Администратор свяжется с вами, чтобы подтвердить время визита.</p>
      <button class="button" type="button" @click="resetForm">Записать еще гостя</button>
    </div>

    <template v-else>
      <label>
        Имя
        <input v-model="form.name" type="text" autocomplete="name" placeholder="Алексей" />
      </label>

      <label>
        Телефон
        <input v-model="form.phone" type="tel" autocomplete="tel" placeholder="+7 900 000-00-00" />
        <span v-if="touched && !phoneIsValid" class="field-error">Укажите номер для связи</span>
      </label>

      <label>
        Услуга
        <select v-model="form.service">
          <option v-for="service in services" :key="service.title" :value="service.title">
            {{ service.title }} - {{ service.price }}
          </option>
        </select>
      </label>

      <div class="form-row">
        <label>
          Дата
          <input v-model="form.date" type="date" />
        </label>
        <label>
          Время
          <input v-model="form.time" type="time" />
        </label>
      </div>

      <label>
        Комментарий
        <textarea v-model="form.comment" rows="4" placeholder="Например: нужна консультация по форме бороды" />
      </label>

      <button class="button button-wide" type="submit">
        <Loader2 v-if="submitting" class="spin" :size="19" />
        <span v-else>Отправить заявку</span>
      </button>
    </template>
  </form>
</template>
