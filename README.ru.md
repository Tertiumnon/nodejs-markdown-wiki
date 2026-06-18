# NodeJS Markdown Wiki

Простой веб-сервер для отображения и управления markdown файлами с помощью HTTP интерфейса.

## Возможности

- 📄 Отображение markdown файлов в виде HTML
- 🗂️ Навигация по структуре папок и файлов
- ⚡ Встроенная поддержка TypeScript
- 🎨 Быстрый лinting и форматирование с помощью Biome
- 📦 Управление версиями и релизами через npm скрипты

## Требования

- Node.js 18+ или [Bun](https://bun.sh)
- npm или bun

## Установка

```bash
# С помощью npm
npm install

# Или с помощью Bun
bun install
```

## Использование

### Запуск сервера

```bash
npm start
# или
bun run start
```

Сервер запустится на `http://localhost:8080`

### Доступные маршруты

- `GET /` — главная страница
- `GET /test` — отображение `test.md` в HTML
- `GET /files` — JSON структура файлов папки `test`

## npm Скрипты

```bash
# Разработка
npm start              # Запуск сервера в режиме hot reload

# Сборка
npm run build         # Сборка в dist/

# Качество кода
npm run lint          # Проверка кода
npm run format        # Форматирование кода

# Релизы
npm run release:patch # Патч релиз (версия-patch)
npm run release:minor # Минорный релиз (версия-minor)
npm run release:major # Мажорный релиз (версия-major)
```

## Структура проекта

```
nodejs-markdown-wiki/
├── src/
│   ├── index.ts              # Express сервер
│   └── utils/
│       ├── file.util.ts      # Утилиты для работы с файлами
│       └── file.type.ts      # TypeScript типы
├── test/
│   └── test.md               # Пример markdown файла
├── biome.json                # Конфигурация Biome
├── tsconfig.json             # Конфигурация TypeScript
├── package.json              # Зависимости и скрипты
└── README.ru.md              # Этот файл
```

## Технологический стек

- **Runtime**: [Bun](https://bun.sh) или Node.js
- **Фреймворк**: Express.js 4.18.2
- **Язык**: TypeScript 5.2.2
- **Парсинг Markdown**: markdown-it 13.0.1
- **Шаблонизация**: EJS 3.1.9
- **Linting & Formatting**: Biome 1.8.0
- **Управление релизами**: @tertium/js 1.4.8

## Процесс релиза

Проект использует Git Flow для управления версиями:

### Патч релиз (из ветки main)
```bash
npm run release:patch
```
- Обновляет версию (patch)
- Создает git tag
- Пушит в main
- Rebase в develop

### Минорный/Мажорный релиз (из ветки develop)
```bash
npm run release:minor  # или release:major
```
- Обновляет версию (minor/major)
- Создает git tag
- Пушит в develop
- Мержит в main
- Пушит main

## Разработка

### Миграции

Проект недавно мигрирован на современный стек:
- ✅ **Bun Runtime** (v0.3.0) — вместо Node.js + ts-node-dev
- ✅ **Biome** (v0.4.0) — вместо ESLint + Prettier
- ✅ **@tertium/js** (v0.5.0) — для управления релизами

## Лицензия

MIT

## Автор

Vitalii Balabanov <tertiumnon@gmail.com>
