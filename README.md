# Портфолио разработчика

Персональное портфолио (визитная карточка) разработчика, созданное на **Next.js** с использованием **TypeScript** и **Tailwind CSS**.

## 🚀 Технологии

- **Next.js** — React-фреймворк с серверным рендерингом
- **TypeScript** — типизация JavaScript
- **Tailwind CSS** — утилитарный CSS-фреймворк
- **React Hooks** — управление состоянием и побочными эффектами

## 📁 Структура проекта

```
pensiya/
├── src/
│   ├── app/
│   │   ├── globals.css      # Глобальные стили
│   │   ├── layout.tsx       # Корневой layout
│   │   └── page.tsx         # Главная страница
│   └── components/
│       ├── Header.tsx       # Шапка с навигацией
│       ├── Hero.tsx         # Приветственная секция
│       ├── About.tsx        # Секция "Обо мне"
│       ├── Projects.tsx     # Секция "Проекты"
│       ├── Contact.tsx      # Секция "Контакты"
│       └── Footer.tsx       # Подвал
├── public/                   # Статические ресурсы
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🛠️ Установка и запуск

### Требования

- Node.js 18+ 
- npm или yarn

### Локальная разработка

1. Установите зависимости:
```bash
npm install
```

2. Запустите сервер разработки:
```bash
npm run dev
```

3. Откройте браузер по адресу [http://localhost:3000](http://localhost:3000)

### Сборка для продакшена

```bash
npm run build
npm start
```

## 📦 Деплой на GitHub Pages

1. Создайте репозиторий на GitHub
2. Запушьте код в репозиторий:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/yourrepo.git
git push -u origin main
```

3. Включите GitHub Pages в настройках репозитория (Settings → Pages)
4. Выберите ветку `gh-pages` или настройте через GitHub Actions

### Через GitHub Actions

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## ⚙️ Конфигурация

В файле `next.config.js` настроен статический экспорт для деплоя на GitHub Pages:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

## 🎨 Настройка

### Изменение информации

1. Откройте `src/components/Hero.tsx` — измените имя и описание
2. Откройте `src/components/About.tsx` — обновите навыки и опыт
3. Откройте `src/components/Projects.tsx` — добавьте свои проекты
4. Откройте `src/components/Contact.tsx` — укажите свои контакты

### Цветовая схема

В `tailwind.config.js` можно изменить цвета:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Основной цвет
      secondary: '#10B981',  // Дополнительный цвет
    },
  },
}
```

## 📄 Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск сервера разработки |
| `npm run build` | Сборка для продакшена |
| `npm start` | Запуск продакшен-сервера |
| `npm run lint` | Проверка кода |

## 📱 Адаптивность

Сайт полностью адаптивен и корректно отображается на:
- Мобильных устройствах (320px+)
- Планшетах (768px+)
- Десктопах (1024px+)

## ♿ Доступность

- Семантическая HTML-разметка
- ARIA-атрибуты для интерактивных элементов
- Поддержка навигации с клавиатуры
- Контрастность цветов по WCAG

## 📝 Лицензия

MIT

## 👤 Автор

Ваше имя
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: email@example.com
"# EarthWalker1" 
