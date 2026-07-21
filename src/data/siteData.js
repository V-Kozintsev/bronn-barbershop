import heroImage from "../assets/images/hero-interior.png";
import haircutImage from "../assets/images/service-haircut.png";
import beardImage from "../assets/images/service-beard.png";
import masterImage from "../assets/images/master-portrait.png";
import toolsImage from "../assets/images/atmosphere-tools.png";

export const contacts = {
  phone: "+7 812 309-42-18",
  phoneHref: "tel:+78123094218",
  whatsappHref: "https://wa.me/78123094218",
  telegramHref: "https://t.me/bronn_barber",
  address: "Санкт-Петербург, ул. Рубинштейна, 24",
  hours: "Пн-Вс 10:00-22:00",
  email: "hello@bronnbarber.ru",
};

export const navItems = [
  { label: "Главная", to: "/" },
  { label: "Услуги", to: "/services" },
  { label: "Мастера", to: "/masters" },
  { label: "Запись", to: "/booking" },
];

export const assets = {
  heroImage,
  toolsImage,
};

export const services = [
  {
    title: "Стрижка",
    price: "от 2 200 ₽",
    duration: "45-60 мин",
    image: haircutImage,
    description: "Форма под тип волос, рост и привычный ритм укладки.",
  },
  {
    title: "Борода",
    price: "от 1 400 ₽",
    duration: "30-45 мин",
    image: beardImage,
    description: "Контур, плотность и уход с горячим полотенцем.",
  },
  {
    title: "Стрижка + борода",
    price: "от 3 300 ₽",
    duration: "75-90 мин",
    image: toolsImage,
    description: "Полный образ за один визит, с рекомендациями по уходу.",
  },
  {
    title: "Камуфляж седины",
    price: "от 1 700 ₽",
    duration: "25 мин",
    image: toolsImage,
    description: "Мягкое выравнивание тона без эффекта окрашивания.",
  },
];

export const masters = [
  {
    name: "Артем Волков",
    role: "Старший барбер",
    experience: "9 лет",
    image: masterImage,
    tags: ["классика", "борода", "деловой стиль"],
    bio: "Собирает спокойные силуэты, которые держатся без сложной укладки.",
  },
  {
    name: "Никита Орлов",
    role: "Барбер",
    experience: "6 лет",
    image: haircutImage,
    tags: ["fade", "текстура", "короткие формы"],
    bio: "Любит чистые переходы и стрижки, которые выглядят свежо через две недели.",
  },
  {
    name: "Илья Северин",
    role: "Барбер-стилист",
    experience: "7 лет",
    image: beardImage,
    tags: ["борода", "бритье", "уход"],
    bio: "Работает с линией бороды и аккуратным бритьем без театральности.",
  },
];

export const facts = [
  { value: "4.9", label: "средняя оценка гостей" },
  { value: "12 мин", label: "от Невского проспекта пешком" },
  { value: "10-22", label: "работаем каждый день" },
];
