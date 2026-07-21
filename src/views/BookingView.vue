<script setup>
import { Clock, MapPin, Phone, Send } from "lucide-vue-next";
import BookingForm from "../components/BookingForm.vue";
import { contacts } from "../data/siteData";
</script>

<template>
  <section class="booking-layout">
    <div class="booking-copy">
      <span class="eyebrow">Запись</span>
      <h1>Выберите услугу и удобное время</h1>
      <p>
        Заявка отправляется администратору. Мы подтвердим визит по телефону или в
        мессенджере.
      </p>

      <div class="contact-stack">
        <a :href="contacts.phoneHref"><Phone :size="19" />{{ contacts.phone }}</a>
        <a :href="contacts.telegramHref"><Send :size="19" />Telegram</a>
        <span><Clock :size="19" />{{ contacts.hours }}</span>
        <span><MapPin :size="19" />{{ contacts.address }}</span>
      </div>
    </div>

    <BookingForm />
  </section>

  <section class="map-section">
    <div class="section-heading">
      <span class="eyebrow">Адрес</span>
      <h2>Рубинштейна, 24</h2>
    </div>
    <iframe
      title="Карта Бронн Барбершоп"
      src="https://yandex.ru/map-widget/v1/?ll=30.335098%2C59.934280&mode=search&text=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D1%83%D0%BB.%20%D0%A0%D1%83%D0%B1%D0%B8%D0%BD%D1%88%D1%82%D0%B5%D0%B9%D0%BD%D0%B0%2C%2024&z=15"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    ></iframe>
  </section>
</template>
