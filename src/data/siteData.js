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
  { label: "Запись онлайн", to: "/booking" },
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
    category: "Стрижки",
    description: "Форма под тип волос, рост и привычный ритм укладки.",
  },
  {
    title: "Борода",
    price: "от 1 400 ₽",
    duration: "30-45 мин",
    image: beardImage,
    category: "Борода",
    description: "Контур, плотность и уход с горячим полотенцем.",
  },
  {
    title: "Стрижка + борода",
    price: "от 3 300 ₽",
    duration: "75-90 мин",
    image: toolsImage,
    category: "Комплексы",
    description: "Полный образ за один визит, с рекомендациями по уходу.",
  },
  {
    title: "Камуфляж седины",
    price: "от 1 700 ₽",
    duration: "25 мин",
    image: toolsImage,
    category: "Уход",
    description: "Мягкое выравнивание тона без эффекта окрашивания.",
  },
  {
    title: "Fade",
    price: "от 2 500 ₽",
    duration: "60 мин",
    image: haircutImage,
    category: "Стрижки",
    description: "Чистый переход машинкой с доводкой ножницами.",
  },
  {
    title: "Детская стрижка",
    price: "от 1 600 ₽",
    duration: "40 мин",
    image: haircutImage,
    category: "Стрижки",
    description: "Аккуратная форма для гостей до 12 лет.",
  },
  {
    title: "Королевское бритье",
    price: "от 2 300 ₽",
    duration: "50 мин",
    image: beardImage,
    category: "Бритье",
    description: "Опасная бритва, горячее полотенце и уход после бритья.",
  },
  {
    title: "Бритье головы",
    price: "от 1 900 ₽",
    duration: "40 мин",
    image: beardImage,
    category: "Бритье",
    description: "Гладкое бритье с подготовкой кожи и спокойным финишем.",
  },
  {
    title: "Оформление усов",
    price: "от 800 ₽",
    duration: "20 мин",
    image: beardImage,
    category: "Борода",
    description: "Форма усов, контур и легкая фиксация.",
  },
  {
    title: "Экспресс-коррекция",
    price: "от 900 ₽",
    duration: "20 мин",
    image: toolsImage,
    category: "Быстро",
    description: "Шея, виски или контур бороды между основными визитами.",
  },
  {
    title: "Укладка",
    price: "от 700 ₽",
    duration: "15 мин",
    image: toolsImage,
    category: "Уход",
    description: "Финишная форма перед встречей, съемкой или событием.",
  },
  {
    title: "Барбер-SPA",
    price: "от 2 100 ₽",
    duration: "45 мин",
    image: toolsImage,
    category: "Уход",
    description: "Очищение, массаж кожи головы и легкий уход.",
  },
  {
    title: "Отец и сын",
    price: "от 3 500 ₽",
    duration: "90 мин",
    image: haircutImage,
    category: "Комплексы",
    description: "Две стрижки подряд с общим временем у мастеров.",
  },
  {
    title: "Консультация по образу",
    price: "от 1 000 ₽",
    duration: "25 мин",
    image: masterImage,
    category: "Консультация",
    description: "Подбор формы, длины, ухода и графика следующих визитов.",
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
  {
    name: "Максим Ларионов",
    role: "Барбер",
    experience: "5 лет",
    image: toolsImage,
    tags: ["кроп", "fade", "быстрый визит"],
    bio: "Держит темп и делает короткие формы без грубых переходов.",
  },
  {
    name: "Роман Беляев",
    role: "Мастер бритья",
    experience: "8 лет",
    image: beardImage,
    tags: ["бритье", "усы", "контур"],
    bio: "Специализируется на бритвенных услугах и плотной линии бороды.",
  },
  {
    name: "Денис Кравцов",
    role: "Барбер",
    experience: "4 года",
    image: haircutImage,
    tags: ["текстура", "средняя длина", "укладка"],
    bio: "Помогает подобрать форму, которая не разваливается после душа.",
  },
  {
    name: "Сергей Невский",
    role: "Топ-барбер",
    experience: "11 лет",
    image: masterImage,
    tags: ["первый визит", "классика", "консультация"],
    bio: "Собирает образ целиком: волосы, бороду, уход и интервал визитов.",
  },
  {
    name: "Павел Грин",
    role: "Барбер",
    experience: "6 лет",
    image: toolsImage,
    tags: ["детская стрижка", "комплексы", "уход"],
    bio: "Спокойно ведет семейные записи и аккуратные комплексные услуги.",
  },
];

export const facts = [
  { value: "4.9", label: "средняя оценка гостей" },
  { value: "12 мин", label: "от Невского проспекта пешком" },
  { value: "10-22", label: "работаем каждый день" },
];
